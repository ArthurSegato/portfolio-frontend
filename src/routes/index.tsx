import { component$ } from "@builder.io/qwik";
import {
  Link,
  type DocumentHead,
  Form,
  routeAction$,
} from "@builder.io/qwik-city";
import Image from "~/media/arthur-segato.jpg?jsx";

declare const contact: any;

export const useContactAction = routeAction$(async (data, requestEvent) => {
  try {
    const url = requestEvent.env.get("WEBHOOK_DISCORD");
    if (url !== undefined)
      fetch(url, {
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
                  value: `${data.name}`,
                },
                {
                  name: "Contact form",
                  value: `${data.email}`,
                },
                {
                  name: "Message",
                  value: `${data.message}`,
                },
              ],
            },
          ],
        }),
      });

    return {
      success: true,
    };
  } catch (error) {
    return error;
  }
});

export default component$(() => {
  const sendContact = useContactAction();
  return (
    <>
      <section class="card w-full bg-base-100 shadow-xl md:card-side lg:w-10/12 2xl:w-8/12">
        <figure class="lg:w-8/12">
          <Image
            class="h-full w-full rounded-t-xl object-cover object-left md:rounded-none"
            title="Arthur Segato with long hair is depicted in a blurry image at night."
            alt="Arthur Segato with long hair is depicted in a blurry image at night."
          />
        </figure>
        <div class="flex flex-col">
          <article class="card-body grow">
            <h1 class="card-title text-4xl">Hello, I'm Arthur Segato!</h1>
            <p>A 24yo Brazilian based in Porto.</p>
            <p>
              I hold a bachelor's degree in Computer Science and possess
              expertise in diverse areas such as game development, full-stack
              development, UI/UX design and video editing.
            </p>
            <p>
              My passion lies in exploring virtual reality, cybersecurity, and
              advocating for open-source initiatives.
            </p>
            <p>
              Besides technology I enjoy urbex, learn about different cultures
              && languages, large goofy dogs, F1, cozy co-op games and cooking.
            </p>
          </article>
          <div class="card-actions join join-vertical w-full justify-end px-8 pb-8 md:join-horizontal">
            <Link href="https://github.com/ArthurSegato" class="btn join-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              Projects (Github)
            </Link>
            <Link href="https://arthursegato.itch.io/" class="btn join-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.35M3.75 21V9.35m0 0a3 3 0 0 0 3.75-.62 3 3 0 0 0 2.25 1.02A3 3 0 0 0 12 8.73a3 3 0 0 0 2.25 1.02 3 3 0 0 0 2.25-1.01 3 3 0 0 0 3.75.6m-16.5 0a3 3 0 0 1-.62-4.71l1.19-1.2A1.5 1.5 0 0 1 5.38 3h13.24a1.5 1.5 0 0 1 1.06.44l1.2 1.19a3 3 0 0 1-.63 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .41.34.75.75.75Z"
                />
              </svg>
              Games (Itch.io)
            </Link>
            <Link
              href="https://github.com/arthursegato.gpg"
              class="btn join-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.03 5.91c-.56-.1-1.16.03-1.56.43l-2.66 2.66H8.25v2.25H6v2.25H2.25v-2.82c0-.6.24-1.17.66-1.59l6.5-6.5c.4-.4.52-1 .43-1.56a6 6 0 1 1 11.91-1.03Z"
                />
              </svg>
              PGP Key
            </Link>
            <button
              class="btn btn-primary join-item"
              onClick$={() => contact.showModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.12 3 2.7 3.23 1.14.16 2.28.29 3.43.38.35.02.67.2.86.5L12 21l2.75-4.13a1.14 1.14 0 0 1 .87-.5 48.17 48.17 0 0 0 3.42-.38 3.22 3.22 0 0 0 2.71-3.23V6.74c0-1.6-1.12-3-2.7-3.23A48.4 48.4 0 0 0 12 3c-2.4 0-4.74.17-7.04.51a3.22 3.22 0 0 0-2.71 3.23v6.02Z"
                />
              </svg>
              Contact
            </button>
          </div>
        </div>
        <dialog id="contact" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 class="text-lg font-bold">Send me a owl</h3>
            <Form action={sendContact} class="flex flex-col gap-2">
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">
                    Ah, my dear, in what manner should I address you?
                  </span>
                </div>
                <div class="join w-full">
                  <button class="btn join-item" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      class="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.13a1.88 1.88 0 1 1-3.75 0 1.88 1.88 0 0 1 3.75 0Zm1.3 6.34a6.72 6.72 0 0 1-3.18.79 6.72 6.72 0 0 1-3.16-.79 3.38 3.38 0 0 1 6.33 0Z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="The name's Potter, Harry Potter."
                    class="input input-bordered w-full"
                    id="name"
                    name="name"
                  />
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">
                    And by what means may I reach you, my dear?
                  </span>
                </div>
                <div class="join w-full">
                  <button class="btn join-item" disabled>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      class="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.61a2.25 2.25 0 0 1-2.36 0l-7.5-4.61a2.25 2.25 0 0 1-1.07-1.92v-.24"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="I possess a small farmstead in @pelican_town, you see."
                    class="input join-item input-bordered w-full"
                    id="email"
                    name="email"
                  />
                </div>
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">
                    And what subject would you fancy delving into?
                  </span>
                </div>
                <textarea
                  class="textarea textarea-bordered h-24"
                  placeholder="A-a MURDER? On MY Owl Express!?"
                  name="message"
                ></textarea>
              </label>
              <button type="submit" class="group btn btn-primary">
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  class="h-5 w-5 transition-all duration-200 ease-in-out group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.27 3.12A59.77 59.77 0 0 1 21.48 12a59.77 59.77 0 0 1-18.21 8.88L6 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </Form>
          </div>
        </dialog>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Arthur Segato | Developer",
  meta: [
    {
      name: "description",
      content:
        "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    },
    {
      name: "keywords",
      content:
        "Web Developer Porto,Full-Stack Development Brazil,UI/UX Design,Game Development,Virtual Reality Enthusiast,Cybersecurity Advocate,Open-Source Initiatives Supporter,Computer Science Bachelor Brazil,Video Editing,Brazilian Tech Professional,Arthur Segato Web Development,Open Source Technology Advocate,Virtual Reality Developer Brazil,Vue 3 Freelance Developer,Nuxt 3,Vercel Deployment,PostgreSQL Database,Figma Design Integration,Qwik Framework Development,Freelance Web Developer,Vue.js Web Applications,Nuxt.js SEO Optimization,Arthur,Arthur Segato,Arthur Segatto,Segato,Segatto,Developer,Web Developer,Game Developer,VR,UX,UI,Porto",
    },
    {
      name: "author",
      content: "Arthur Segato",
    },
    {
      name: "og:title",
      content: "Arthur Segato | Developer",
    },
    {
      name: "og:description",
      content:
        "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    },
    {
      name: "og:url",
      content: "https://www.arthursegato.dev",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:site:name",
      content: "Arthur Segato | Developer",
    },
    {
      name: "og:image",
      content: "https://www.arthursegato.dev/gifs/facebook-card.gif",
    },
    {
      name: "og:image:secure_url",
      content: "https://www.arthursegato.dev/gifs/facebook-card.gif",
    },
    {
      name: "og:image:alt",
      content:
        "Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.",
    },
    {
      property: "og:image:width",
      content: "1240",
    },
    {
      property: "og:image:height",
      content: "650",
    },
    {
      property: "og:image:type",
      content: "image/jpg",
    },
    {
      name: "twitter:title",
      content: "Arthur Segato | Developer",
    },
    {
      name: "twitter:description",
      content:
        "Hey, I'm a computer scientist developing stuff for the web, and games in my spare time, but I create other things too, so if that interests you, why not take a look at my website?",
    },
    {
      name: "twitter:site",
      content: "https://www.arthursegato.dev",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: "https://www.arthursegato.dev/gifs/twitter-card.gif",
    },
    {
      name: "twitter:image:alt",
      content:
        "Arthur Segato Logo, composed of a letter A cut horizontally by a letter S, with a moving coloured background.",
    },
    {
      name: "twitter:site",
      content: "https://www.arthursegato.dev",
    },
    {
      name: "twitter:image:type",
      content: "image/jpg",
    },
    {
      name: "twitter:image:width",
      content: "900",
    },
    {
      name: "twitter:image:height",
      content: "470",
    },
    {
      name: "google",
      content: "notranslate",
    },
    {
      name: "robots",
      content: "",
    },
    {
      name: "revisit-after",
      content: "1 day",
    },
    {
      name: "theme-color",
      content: "#e5e6e6",
    },
    {
      name: "color-scheme",
      content: "light dark",
    },
  ],
};
