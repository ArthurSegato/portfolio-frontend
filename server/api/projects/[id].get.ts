// import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  try {
    return {
      message: "ok",
    };
    //   const projectId = getRouterParam(event, "id");
    //   const runtimeConfig = useRuntimeConfig();
    //   const { rows } = await sql`SELECT
    //   "Project"."name",
    //   "Project"."longDescription" AS "long_description",
    //   "Project"."category" :: text,
    //   "Project"."visits",
    //   "Project"."downloads",
    //   "Project"."revenue",
    //   "Project"."techStack" AS "tech_stack",
    //   "Project"."size",
    //   "Project"."sizeUnit" :: text AS "size_unit",
    //   "Project"."embeds",
    //   "Cover"."url" AS "cover_url",
    //   "MetaImages"."facebookUrl",
    //   "MetaImages"."facebookAlt",
    //   "MetaImages"."twitterUrl",
    //   "MetaImages"."twitterAlt",
    //   "MetaImages"."googleUrl",
    //   (
    //       SELECT
    //           JSONB_AGG(
    //               JSONB_BUILD_OBJECT(
    //                   'name',
    //                   "Link"."name",
    //                   'url',
    //                   "Link"."url"
    //               )
    //           )
    //       FROM
    //           "Link"
    //       WHERE
    //           "Project"."id" = "Link"."projectId"
    //   ) AS "links",
    //   (
    //       SELECT
    //           jsonb_agg(
    //               jsonb_build_object(
    //                   'mimetype',
    //                   "Asset"."mimetype",
    //                   'url',
    //                   "Asset"."url",
    //                   'alt',
    //                   "Asset"."alt",
    //                   'title',
    //                   "Asset"."title",
    //                   'poster',
    //                   "Asset"."poster"
    //               )
    //           )
    //       FROM
    //           "Asset"
    //       WHERE
    //           "Project"."id" = "Asset"."projectId"
    //   ) AS "assets"
    // FROM
    //   "Project"
    //   LEFT JOIN "Cover" ON "Project"."id" = "Cover"."projectId"
    //   LEFT JOIN "MetaImages" ON "Project"."id" = "MetaImages"."projectId"
    // WHERE
    //   "Project"."id" = ${projectId};`;
    //   const githubUrlRegex =
    //     /^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/;
    //   const youtubeUrlRegex =
    //     /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|youtu\.be\/|user\/\S+\/|user\/\S+\/videos\?v=)([a-zA-Z0-9_-]{11})/;
    //   const github = {
    //     stars: null,
    //     created_at: null,
    //     updated_at: null,
    //     size: rows[0].size,
    //     size_unit: rows[0].size_unit,
    //     licenses: null,
    //   };
    //   const youtube = {
    //     views: null,
    //     likes: null,
    //     comments: null,
    //   };
    //   if (rows[0].links !== null) {
    //     for (let i = 0; i < rows[0].links.length; i++) {
    //       if (githubUrlRegex.test(rows[0].links[i].url)) {
    //         await fetch(
    //           `https://api.github.com/repos/ArthurSegato/${
    //             rows[0].links[i].url.match(/\/([^/]+)$/)[1]
    //           }`,
    //           {
    //             method: "GET",
    //             headers: {
    //               Authorization: `Bearer ${runtimeConfig.githubApiKey} `,
    //             },
    //           }
    //         )
    //           .then((response) => {
    //             if (response.ok) return response.json();
    //           })
    //           .then((data) => {
    //             github.stars += data.stargazers_count;
    //             if (data.license !== null) {
    //               if (github.licenses === null) {
    //                 github.licenses = [
    //                   {
    //                     name: data.license.spdx_id,
    //                     url: `https://choosealicense.com/licenses/${data.license.key}`,
    //                   },
    //                 ];
    //               } else {
    //                 github.licenses.push({
    //                   name: data.license.spdx_id,
    //                   url: `https://choosealicense.com/licenses/${data.license.key}`,
    //                 });
    //               }
    //             }
    //             if (
    //               github.created_at === null ||
    //               github.created_at < data.created_at
    //             )
    //               github.created_at = data.created_at.split("T")[0];
    //             if (
    //               github.updated_at === null ||
    //               github.created_at > data.created_at
    //             )
    //               github.updated_at = data.updated_at.split("T")[0];
    //           });
    //       }
    //       if (youtubeUrlRegex.test(rows[0].links[i].url)) {
    //         await fetch(
    //           `https://www.googleapis.com/youtube/v3/videos?key=${
    //             runtimeConfig.youtubeApiKey
    //           }&id=${
    //             rows[0].links[i].url.match(youtubeUrlRegex)[1]
    //           }&part=statistics`,
    //           {
    //             method: "GET",
    //           }
    //         )
    //           .then((response) => {
    //             if (response.ok) return response.json();
    //           })
    //           .then((data) => {
    //             if (data.items.length > 0) {
    //               youtube.views += parseInt(data.items[0].statistics.viewCount);
    //               youtube.likes += parseInt(data.items[0].statistics.likeCount);
    //               youtube.comments += parseInt(
    //                 data.items[0].statistics.commentCount
    //               );
    //             }
    //           });
    //       }
    //     }
    //   }
    //   return {
    //     name: rows[0].name,
    //     long_description: rows[0].long_description,
    //     category: rows[0].category || null,
    //     visits: rows[0].visits || null,
    //     downloads: rows[0].downloads || null,
    //     revenue: rows[0].revenue || null,
    //     youtube: youtube || null,
    //     github: github || null,
    //     tech_stack: rows[0].tech_stack,
    //     cover: rows[0].cover || null,
    //     links: rows[0].links || null,
    //     meta_images: rows[0].meta_images || null,
    //     assets: rows[0].assets || null,
    //     embeds: rows[0].embeds || null,
    //   };
  } catch (error) {
    return error;
  }
});
