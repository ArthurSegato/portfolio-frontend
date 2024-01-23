import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const GraphicDesign = component$(() => {
  return (
    <>
      <article
        class="prose rounded-2xl bg-base-100 p-4 shadow-lg"
        id="graphicdesign"
      >
        <h2>Graphic design and video editing</h2>
        <figure>
          <iframe
            src="https://www.youtube.com/embed/OYDhGj6FH5g?si=PASiV8BTfPzpPtfh"
            title="YouTube video player"
            class="aspect-video w-full"
          ></iframe>
          <figcaption>
            In my defense, I had no control over the quality of the footage or
            the thumbnail of this video, only the editing.
          </figcaption>
        </figure>
        <p>
          In high school, I began studying graphic design and video editing,
          even taking on some freelance projects. I created visual identities,
          logos, and artwork for YouTube channels and social media pages. This
          experience provided me with a solid grasp of design principles like
          color psychology, typography, balance and so on.
        </p>
        <p>
          I've been applying these concepts to the games and frontends I
          develop, whenever I'm in charge of UI/UX.
        </p>
        <h3>Links</h3>
        <p>
          <Link href="https://www.youtube.com/watch?v=mjTTIlpIbg4">
            <code>young bragi x slag - apenas eu</code>
          </Link>
          {""} - {""}
          <Link href="https://www.youtube.com/watch?v=iLubku1d93Y">
            <code>MEU PRIMEIRO VLOG/ MARI RESPONDE</code>
          </Link>
          {""} - {""}
          <Link href="https://www.youtube.com/watch?v=DfuMBxI2rQE">
            <code>DANDO UMA DE CONSELHEIRA</code>
          </Link>
          {""} - {""}
          <Link href="https://www.youtube.com/watch?v=latwjS0Vw0E">
            <code>QUASE 50 FATOS SOBRE MIM!</code>
          </Link>
        </p>
        <h3>Tools</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe Premiere</li>
          <li>Adobe After Effects</li>
        </ul>
      </article>
    </>
  );
});
