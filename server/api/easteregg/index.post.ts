export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (body.message === undefined || body.message.length === 0)
      throw new Error("Message cannot be empty");

    fetch(runtimeConfig.eastereggWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `${body.message}`,
      }),
    });

    return {
      message: "Your message has been received, Potter",
    };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    }
  }
});
