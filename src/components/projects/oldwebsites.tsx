import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Image from "~/media/oldwebsites.png?jsx";

export const OldWebsites = component$(() => {
  return (
    <>
      <article
        class="prose rounded-2xl bg-base-100 p-4 shadow-lg"
        id="oldwebsites"
      >
        <h2>Old Websites</h2>
        <figure>
          <Image
            class="w-full"
            alt="Collage of screenshots showcasing the old websites"
            title="Collage of screenshots showcasing the old websites"
          />
          <figcaption>
            Collage of screenshots showcasing the old projects.
          </figcaption>
        </figure>
        <p>
          I've created a diverse array of websites for various purposes, ranging
          from a graduation present portfolio for my sister to a virtual
          storefront for the Kafhia bikini store. Additionally, I've developed
          landing pages, created templates for sale on Fiverr - featuring an API
          integration to fetch data from Minecraft servers - and my own past
          personal websites.
        </p>
        <p>
          As those projects are no longer in use, I have released their code
          under the MIT license on GitHub. They remain accessible solely for the
          purpose of showcasing my progression in web development.
        </p>
        <h3>Links</h3>
        <p>
          <Link href="https://github.com/ArthurSegato/TemplateFiverr">
            <code>TemplateFiverr</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/ArthurSegato/NadiaSegato">
            <code>NadiaSegato</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/ArthurSegato/Kafhia">
            <code>Kafhia</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/ArthurSegato/OldPortfolios">
            <code>Old portfolios</code>
          </Link>
        </p>
        <h3>Tools</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>HTML5, CSS, JS</li>
        </ul>
      </article>
    </>
  );
});
