export default defineEventHandler(async (event) => {
  try {
    return {
      message: "online",
    };
  } catch (error) {
    throw createError({
      statusCode: 418,
    });
  }
});
