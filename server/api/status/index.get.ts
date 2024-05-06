export default defineEventHandler(async () => {
  try {
    return { message: "up" };
  } catch (error) {
    throw createError({ statusCode: 418 });
  }
});
