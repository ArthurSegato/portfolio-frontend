import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  const projectId = getRouterParam(event, "id");
  const runtimeConfig = useRuntimeConfig();

  const { rows } =
    await sql`SELECT "Project"."name", "longDescription", category, visits, downloads, revenue, "techStack", size, "sizeUnit", embeds,
    ARRAY["Link"."name", "Link"."url"] as Links
    FROM "Project"
    LEFT JOIN "Link"
    ON "Project"."id" = "Link"."projectId";`;

  return rows;

  // const githubUrlRegex =
  //   /^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/;
  // const youtubeUrlRegex =
  //   /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|user\/\S+\/|user\/\S+\/videos\?v=)([a-zA-Z0-9_-]{11})/;
  // const github = {
  //   stars: null,
  //   created_at: null,
  //   updated_at: null,
  //   size: rows.size,
  //   size_unit: rows.sizeUnit,
  //   licenses: null,
  // };
  // const youtube = {
  //   views: null,
  //   likes: null,
  //   comments: null,
  // };

  // for (let i = 0; i < rows.links.length; i++) {
  //   if (githubUrlRegex.test(rows.links[i].url)) {
  //     await fetch(
  //       `https://api.github.com/repos/ArthurSegato/${
  //         rows.links[i].url.match(/\/([^/]+)$/)[1]
  //       }`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${runtimeConfig.githubApikey} `,
  //         },
  //       }
  //     )
  //       .then((response) => {
  //         if (response.ok) return response.json();
  //       })
  //       .then((data) => {
  //         github.stars += data.stargazers_count;

  //         if (data.license !== null) {
  //           if (github.licenses === null) {
  //             github.licenses = [
  //               {
  //                 name: data.license.spdx_id,
  //                 url: `https://choosealicense.com/licenses/${data.license.key}`,
  //               },
  //             ];
  //           } else {
  //             github.licenses.push({
  //               name: data.license.spdx_id,
  //               url: `https://choosealicense.com/licenses/${data.license.key}`,
  //             });
  //           }
  //         }

  //         if (github.created_at === null || github.created_at < data.created_at)
  //           github.created_at = data.created_at.split("T")[0];

  //         if (github.updated_at === null || github.created_at > data.created_at)
  //           github.updated_at = data.updated_at.split("T")[0];
  //       });
  //   }
  //   if (youtubeUrlRegex.test(rows.links[i].url)) {
  //     await fetch(
  //       `https://www.googleapis.com/youtube/v3/videos?key=${
  //         runtimeConfig.youtubeApikey
  //       }&id=${rows.links[i].url.match(youtubeUrlRegex)[1]}&part=statistics`,
  //       {
  //         method: "GET",
  //       }
  //     )
  //       .then((response) => {
  //         if (response.ok) return response.json();
  //       })
  //       .then((data) => {
  //         if (data.items.length > 0) {
  //           youtube.views += parseInt(data.items[0].statistics.viewCount);
  //           youtube.likes += parseInt(data.items[0].statistics.likeCount);
  //           youtube.comments += parseInt(data.items[0].statistics.commentCount);
  //         }
  //       });
  //   }
  // }

  // return {
  //   name: rows.name,
  //   long_description: rows.longDescription,
  //   category: rows.category,
  //   visits: rows.visits,
  //   downloads: rows.downloads,
  //   revenue: rows.revenue,
  //   youtube: youtube,
  //   github: github,
  //   tech_stack: rows.techStack,
  //   links: rows.links,
  //   cover: rows.cover,
  //   meta_images: rows.metaImages,
  //   assets: rows.assets,
  //   embeds: rows.embeds,
  // };
});
