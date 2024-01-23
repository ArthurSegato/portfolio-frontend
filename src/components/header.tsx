import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

declare const contact: any;

export const Header = component$(() => {
  return (
    <>
      <header class="fixed flex w-full p-4">
        <nav class="navbar z-30 rounded-box bg-base-100 bg-opacity-50 shadow-xl backdrop-blur-2xl backdrop-saturate-200">
          <ul class="menu menu-horizontal flex w-full justify-center px-1">
            <li>
              <Link href="/">about</Link>
            </li>
            <li>
              <details>
                <summary>projects</summary>
                <ul class="rounded-t-none bg-base-200 bg-opacity-70 p-2 shadow-xl backdrop-blur-2xl backdrop-saturate-200">
                  <li>
                    <Link href="/#dislexiless">DislexiLess</Link>
                  </li>
                  <li>
                    <Link href="/#dogemaze">Doge Maze</Link>
                  </li>
                  <li>
                    <Link href="/#sheltervr">SHELTERVR</Link>
                  </li>
                  <li>
                    <Link href="/#lofiblockrunner">LofiBlockRunner</Link>
                  </li>
                  <li>
                    <Link href="/#oldwebsites">Old Websites</Link>
                  </li>
                  <li>
                    <Link href="/#smartspot">Smart Spot</Link>
                  </li>
                  <li>
                    <Link href="/#graphicdesign">Graphic Design</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button onClick$={() => contact.showModal()}>contact</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
});
