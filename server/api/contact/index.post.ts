import isEmail from "validator/es/lib/isEmail";
import isAlpha from "validator/es/lib/isAlpha";

export default defineEventHandler(async (event) => {
  try {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);

    if (!isAlpha(body.name)) throw new Error("Name must be valid");

    if (!isEmail(body.email)) throw new Error("Email address must be valid");

    if (!isAlpha(body.message)) throw new Error("Message must be valid");

    await fetch(runtimeConfig.webhooks.contact, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            fields: [
              {
                name: "Name",
                value: `${body.name}`,
              },
              {
                name: "Email",
                value: `${body.email}`,
              },
              {
                name: "Message",
                value: `${body.message}`,
              },
            ],
          },
        ],
      }),
    });

    return {
      message: "Got it!",
    };
  } catch (error) {
    if (error instanceof Error) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      });
    } else return error;
  }
});
