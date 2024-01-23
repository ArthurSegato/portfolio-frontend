import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const DogeMaze = component$(() => {
  return (
    <>
      <article
        class="prose rounded-2xl bg-base-100 p-4 shadow-lg"
        id="dogemaze"
      >
        <h2>Doge Maze</h2>
        <figure>
          <video
            class="w-full"
            autoplay
            muted
            loop
            title="Video showcasing a dog, adorned as a medieval warrior with sword and shield, navigating through a dungeon maze, dying upon contact with the walls"
          >
            <source src="/dogemaze.mp4" type="video/mp4" />
          </video>
          <figcaption>
            Upon further reflection, I am considering revisiting and reworking
            this project.
          </figcaption>
        </figure>
        <p>
          DogeMaze is a procedural maze generator created in Unity for a
          Computer Graphics class. Despite its simplicity, the project
          incorporates particles, lighting, and a touch of animation.
        </p>
        <h3>Technical Information</h3>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Arthur Segato</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Published</td>
              <td>02/07/2022</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>Prototype</td>
            </tr>
            <tr>
              <td>Platforms</td>
              <td>Windows</td>
            </tr>
            <tr>
              <td>Made with</td>
              <td>Unity</td>
            </tr>
            <tr>
              <td>License</td>
              <td>MIT</td>
            </tr>
            <tr>
              <td>Average session</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>Portuguese (Brazil)</td>
            </tr>
            <tr>
              <td>Accessibility</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
        <h3>Links</h3>
        <p>
          <Link href="https://arthursegato.itch.io/doge-maze">
            <code>Itch.io Page</code>
          </Link>
          {""} - {""}
          <Link href="https://github.com/ArthurSegato/DogeMaze">
            <code>Github Repo</code>
          </Link>
        </p>
        <h3>Tools</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Unity (C#)</li>
        </ul>
      </article>
    </>
  );
});
