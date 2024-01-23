import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Form, routeAction$ } from "@builder.io/qwik-city";

import Image from "~/media/arthur-segato.jpg?jsx";

import { GraphicDesign } from "~/components/projects/graphicdesign";
import { SmartSpot } from "~/components/projects/smartspot";
import { OldWebsites } from "~/components/projects/oldwebsites";
import { LofiBlockRunner } from "~/components/projects/lofiblockrunner";
import { Sheltervr } from "~/components/projects/sheltervr";
import { DogeMaze } from "~/components/projects/dogemaze";
import { DislexiLess } from "~/components/projects/dislexiless";

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

    return { success: true };
  } catch (error) {
    return error;
  }
});

export default component$(() => {
  const sendContact = useContactAction();
  return (
    <>
      <section id="projects" class="flex w-full flex-col items-center">
        <article class="prose flex flex-col rounded-2xl bg-base-100 shadow-lg">
          <figure>
            <Image
              class="w-full rounded-t-2xl"
              alt="Arthur Segato with long hair is depicted in a blurry image at night"
              title="Arthur Segato with long hair is depicted in a blurry image at night"
            />
          </figure>
          <h1 class="px-4">🤘 Hello, I'm Arthur Segato!</h1>
          <p class="px-4">A 24yo Brazilian based in Portugal.</p>
          <p class="px-4">
            I hold a bachelor's degree in Computer Science and possess expertise
            in diverse areas such as game development, full-stack development,
            UI/UX design and video editing.
          </p>
          <p class="px-4">
            My passion lies in exploring virtual reality, cybersecurity, and
            advocating for open-source initiatives.
          </p>
          <p class="px-4 pb-4">
            Besides technology I enjoy urbex, learn about different cultures &&
            languages, large goofy dogs, F1, cozy co-op games and cooking.
          </p>
        </article>
        <div class="divider">2023</div>
        <DislexiLess />
        <div class="divider">2022</div>
        <DogeMaze />
        <div class="my-4 w-full"></div>
        <Sheltervr />
        <div class="divider">2021</div>
        <LofiBlockRunner />
        <div class="divider">2018 - 2021</div>
        <OldWebsites />
        <div class="divider">2018</div>
        <SmartSpot />
        <div class="divider">2015? - 2020?</div>
        <GraphicDesign />
      </section>
      <dialog id="contact" class="modal">
        <div class="modal-box">
          <form method="dialog">
            <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 class="text-lg font-bold">Send me a owl</h3>
          <Form
            action={sendContact}
            autocomplete="off"
            class="flex flex-col gap-2"
          >
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text">
                  Ah, my dear, in what manner should I address you?
                </span>
              </div>
              <div class="join w-full">
                <button
                  type="button"
                  class="btn btn-ghost join-item btn-active no-animation cursor-default"
                >
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
                  class="input join-item input-bordered w-full"
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
                <button
                  type="button"
                  class="btn btn-ghost join-item btn-active no-animation cursor-default"
                >
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
          {sendContact.status === 200 && contact.close()}
        </div>
      </dialog>
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
