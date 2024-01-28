<template>
    <article class="prose rounded-2xl bg-base-100 p-4 shadow-lg" id="dislexiless">
        <h2>DislexiLess</h2>
        <figure>
            <NuxtImg src="/img/dislexiless.jpg" class="w-full" alt="Screenshot of the Dyslexiless homepage"
                title="Screenshot of the Dyslexiless homepage" placeholder />
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
            development of the web platform, while
            <NuxtLink href="https://github.com/OmptOsu">Eduardo</NuxtLink> was responsible
            for the mobile application.
        </p>
        <p>
            The full thesis can be found
            <NuxtLink
                href="https://github.com/ArthurSegato/DislexiLess/blob/main/.github/assets/DISLEXILESS_TCC-2_ARTHUR_EDUARDO.pdf">
                on the DislexiLess github repo
            </NuxtLink>
            .
        </p>
        <h3>Links</h3>
        <p>
            <NuxtLink href="https://dislexiless.vercel.app/">
                <code>dislexiless.vercel.app</code>
            </NuxtLink>
            -
            <NuxtLink href="https://github.com/arthurSegato/dislexiless">
                <code>Github Repo</code>
            </NuxtLink>
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
                <NuxtLink href="https://github.com/ArthurSegato">@ArthurSegato</NuxtLink>
            </li>
            <li>
                <NuxtLink href="https://github.com/OmptOsu">@OmptOsu</NuxtLink>
            </li>
        </ul>
    </article>
</template>