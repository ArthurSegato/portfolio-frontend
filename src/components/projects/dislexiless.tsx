import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Image from "~/media/dislexiless.jpg?jsx";

export const DislexiLess = component$(() => {
  return (
    <>
      <article
        class="prose rounded-2xl bg-base-100 p-4 shadow-lg"
        id="dislexiless"
      >
        <h2>DislexiLess</h2>
        <figure>
          <Image
            class="w-full"
            alt="Screenshot of the Dyslexiless homepage"
            title="Screenshot of the Dyslexiless homepage"
          />
          <figcaption>Looks familiar, uh?</figcaption>
        </figure>
        <p>
          DislexiLess is a solution composed of a web platform (Vue 3/Nest.js)
          and a mobile application (Flutter) that aims to facilitate the reading
          process for people with dyslexia and assist healthcare and education
          professionals in the treatment of individuals with dyslexia.
        </p>
        <p>
          This tool was developed over a period of 4 months for my Computer
          Science thesis at Universidade Vila Velha. I was responsible for the
          development of the web platform, while{" "}
          <Link href="https://github.com/OmptOsu">Eduardo</Link> was responsible
          for the mobile application.
        </p>
        <p>
          The full thesis can be found{" "}
          <Link href="https://github.com/ArthurSegato/DislexiLess/blob/main/.github/assets/DISLEXILESS_TCC-2_ARTHUR_EDUARDO.pdf">
            on the DislexiLess github repo
          </Link>
          .
        </p>
        <h3>Links</h3>
        <p>
          <Link href="https://dislexiless.vercel.app/">
            <code>dislexiless.vercel.app</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/arthurSegato/dislexiless">
            <code>Github Repo</code>
          </Link>
        </p>
        <h3>Tools</h3>
        <ul>
          <li>Figma</li>
          <li>Tailwind CSS, daisyUI</li>
          <li>Vue 3, Nuxt 3</li>
          <li>Nest.js</li>
          <li>Prisma, PostgreSQL</li>
          <li>Bun, Vercel</li>
          <li>Dart, Flutter</li>
        </ul>
        <h3>Contributors</h3>
        <ul>
          <li>
            <Link href="https://github.com/ArthurSegato">@ArthurSegato</Link>
          </li>
          <li>
            <Link href="https://github.com/OmptOsu">@OmptOsu</Link>
          </li>
        </ul>
      </article>
    </>
  );
});
