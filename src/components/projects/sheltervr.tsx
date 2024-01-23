import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Image from "~/media/sheltervr.jpg?jsx";

export const Sheltervr = component$(() => {
  return (
    <>
      <article
        class="prose rounded-2xl bg-base-100 p-4 shadow-lg"
        id="sheltervr"
      >
        <h2>SHELTERNET.CLUB</h2>
        <figure>
          <Image
            class="w-full"
            alt="A concrete wall embellished with an underground rave poster adhered to its surface, complemented by graffiti providing instructions to join the ShelterVR Discord"
            title="A concrete wall embellished with an underground rave poster adhered to its surface, complemented by graffiti providing instructions to join the ShelterVR Discord"
          />
          <figcaption>SEEK. SHELTER. NOW.</figcaption>
        </figure>
        <p>
          Just a small rewrite of the old SHELTERVR.CLUB website for a lighter,
          faster, and more responsive experience. It's now accessible and
          features a pixel-perfect clickable area.
        </p>
        <h3>Links</h3>
        <p>
          <Link href="https://sheltervr.club/">
            <code>SHELTERVR.CLUB</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/ArthurSegato/SHELTERVR">
            <code>Github Repo</code>
          </Link>
        </p>
        <h3>Tools</h3>
        <ul>
          <li>Adobe Illustrator</li>
          <li>HTML5, CSS, JS</li>
        </ul>
      </article>
    </>
  );
});
