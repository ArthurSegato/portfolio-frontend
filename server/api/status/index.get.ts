export default defineEventHandler(async (event) => {
  try {
    return {
      message: "up",
    };
  } catch (error) {
    return error;
  }
});
