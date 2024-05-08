<template>
  <main
    class="flex min-h-screen w-full flex-col bg-[#eadac0] text-[#070d01] lg:h-screen lg:flex-row dark:bg-[#070d01] dark:text-[#eadac0]">
    <section hidden class="m-4 flex items-center justify-center rounded-xl border border-current p-4 lg:w-1/4">
      <header class="flex flex-col items-center gap-2">
        <figure
          class="flex aspect-square w-full max-w-52 items-center justify-center rounded-full border-2 border-current">
          <svg width="100" height="100" viewBox="0 0 250 250" class="w-1/2" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M183.594 125L158.086 73.9844C145.078 84.1406 140.117 105.937 134.648 128.555L154.297 174.219L169.531 209.57C180.352 195.195 192.578 177.266 201.445 160.742L183.594 125ZM74.6094 176.797C87.1875 176.797 95.4297 170.664 101.367 161.055L109.727 141.719C119.258 111.523 122.617 70.1953 147.813 53.4375L125 7.8125L66.4062 125L47.2656 163.242C50.4073 167.523 54.53 170.989 59.2879 173.347C64.0457 175.706 69.2998 176.889 74.6094 176.797ZM211.133 180.078C200.664 197.656 188.242 215.391 177.813 228.828L183.594 242.188H242.188L211.133 180.078ZM75.1953 198.945C60.9375 198.945 47.5781 193.906 37.2266 183.32L7.8125 242.188H66.4062L85.3906 198.164C82.2266 198.672 78.8281 198.945 75.1953 198.945Z"
              stroke="currentColor" stroke-width="2" stroke-dasharray="1141" stroke-dashoffset="1141" fill-opacity="0">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="2s" values="1141;0" />
              <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.8s" values="0;1" />
            </path>
          </svg>
        </figure>
        <div class="my-4 w-full border-l-4 border-current pl-8">
          <p class="text-xl font-black">Arthur Segato</p>
          <p class="font-light"><i>near you</i></p>
        </div>
        <p>
          computer scientist, pt-br, EU based, fullstack && game dev, hire me
          below.
        </p>
        <ul class="my-4 flex justify-evenly gap-4">
          <li>
            <NuxtLink to="mailto:hello@arthursegato.dev" title="Email" aria-label="Email" class="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                class="transition-transform ease-in group-hover:-translate-y-1 group-focus:-translate-y-1">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                  <rect width="18" height="14" x="3" y="5" stroke-dasharray="64" stroke-dashoffset="64" rx="1">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                  </rect>
                  <path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5L12 12L21 6.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.4s" values="24;0" />
                  </path>
                </g>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://www.linkedin.com/in/arthur-segato/" title="LinkedIn" aria-label="LinkedIn"
              class="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                class="transition-transform ease-in group-hover:-translate-y-1 group-focus:-translate-y-1">
                <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                  <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="0;1" />
                </circle>
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4">
                  <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0" />
                  </path>
                  <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" />
                  </path>
                  <path stroke-dasharray="24" stroke-dashoffset="24"
                    d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="24;0" />
                  </path>
                </g>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://github.com/ArthurSegato/" title="Github" aria-label="Github" class="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                class="transition-transform ease-in group-hover:-translate-y-1 group-focus:-translate-y-1">
                <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
                  <g fill="#fff">
                    <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
                    <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
                  </g>
                </mask>
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="30" stroke-dashoffset="30"
                    d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" />
                  </path>
                  <path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0" />
                    <animate attributeName="d" dur="3s" repeatCount="indefinite"
                      values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
                  </path>
                </g>
                <rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)">
                  <animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite"
                    values="11;11;7;7;11;11" />
                </rect>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://github.com/arthursegato.gpg" title="GPG Key" aria-label="GPG Key" class="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                class="transition-transform ease-in group-hover:-translate-y-1 group-focus:-translate-y-1">
                <g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round"
                  stroke-width="2">
                  <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0" />
                  </path>
                  <path
                    d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0" />
                  </path>
                </g>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://arthursegato.itch.io/" title="Itch.io" aria-label="Itch.io" class="group">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                class="transition-transform ease-in group-hover:-translate-y-1 group-focus:-translate-y-1">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path stroke-dasharray="50" stroke-dashoffset="50" d="M12 17H5V7H19V17Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="50;0" />
                  </path>
                  <path stroke-dasharray="20" stroke-dashoffset="20" d="M3 19H21">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="20;0" />
                  </path>
                </g>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </header>
    </section>
    <section class="m-4 overflow-y-auto p-4 lg:w-full">
      <slot />
    </section>
  </main>
</template>
