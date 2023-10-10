import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const projectId = getRouterParam(event, "id");
  const runtimeConfig = useRuntimeConfig();

  const db = await prisma.project.findUnique({
    where: {
      id: parseInt(projectId),
    },
    select: {
      name: true,
      longDescription: true,
      category: true,
      visits: true,
      downloads: true,
      revenue: true,
      techStack: true,
      size: true,
      sizeUnit: true,
      links: {
        select: {
          name: true,
          url: true,
        },
      },
      cover: {
        select: {
          url: true,
        },
      },
      metaImages: {
        select: {
          facebookUrl: true,
          facebookAlt: true,
          twitterUrl: true,
          twitterAlt: true,
          googleUrl: true,
        },
      },
      assets: {
        select: {
          mimetype: true,
          url: true,
          alt: true,
        },
      },
      embeds: true,
    },
  });

  const githubUrlRegex =
    /^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/;
  const youtubeUrlRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|user\/\S+\/|user\/\S+\/videos\?v=)([a-zA-Z0-9_-]{11})/;
  const github = {
    stars: null,
    created_at: null,
    updated_at: null,
    size: db.size,
    size_unit: db.sizeUnit,
    licenses: null,
  };
  const youtube = {
    views: null,
    likes: null,
    comments: null,
  };

  for (let i = 0; i < db.links.length; i++) {
    if (githubUrlRegex.test(db.links[i].url)) {
      await fetch(
        `https://api.github.com/repos/ArthurSegato/${
          db.links[i].url.match(/\/([^/]+)$/)[1]
        }`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${runtimeConfig.githubApikey} `,
          },
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          github.stars += data.stargazers_count;

          if (data.license !== null) {
            if (github.licenses === null) {
              github.licenses = [
                {
                  name: data.license.spdx_id,
                  url: `https://choosealicense.com/licenses/${data.license.key}`,
                },
              ];
            } else {
              github.licenses.push({
                name: data.license.spdx_id,
                url: `https://choosealicense.com/licenses/${data.license.key}`,
              });
            }
          }

          if (github.created_at === null || github.created_at < data.created_at)
            github.created_at = data.created_at.split("T")[0];

          if (github.updated_at === null || github.created_at > data.created_at)
            github.updated_at = data.updated_at.split("T")[0];
        });
    }
    if (youtubeUrlRegex.test(db.links[i].url)) {
      await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${
          runtimeConfig.youtubeApikey
        }&id=${db.links[i].url.match(youtubeUrlRegex)[1]}&part=statistics`,
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) return response.json();
        })
        .then((data) => {
          if (data.items.length > 0) {
            youtube.views += parseInt(data.items[0].statistics.viewCount);
            youtube.likes += parseInt(data.items[0].statistics.likeCount);
            youtube.comments += parseInt(data.items[0].statistics.commentCount);
          }
        });
    }
  }

  return {
    name: db.name,
    long_description: db.longDescription,
    category: db.category,
    visits: db.visits,
    downloads: db.downloads,
    revenue: db.revenue,
    youtube: youtube,
    github: github,
    tech_stack: db.techStack,
    links: db.links,
    cover: db.cover,
    meta_images: db.metaImages,
    assets: db.assets,
    embeds: db.embeds,
  };
});
