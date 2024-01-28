<template>
    <section id="about" class="flex w-full flex-col items-center">
        <article class="prose flex flex-col rounded-2xl bg-base-100 shadow-lg">
            <figure>
                <NuxtImg src="/img/arthur-segato.jpg" class="w-full rounded-t-2xl"
                    alt="Arthur Segato with long hair is depicted in a blurry image at night"
                    title="Arthur Segato with long hair is depicted in a blurry image at night" placeholder />
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
    </section>
    <section id="projects">
        <div class="divider">2023</div>
        <LazyProjectsDislexiLess />
        <div class="divider">2022</div>
        <LazyProjectsDogeMaze />
        <div class="my-4 w-full"></div>
        <LazyProjectsShelterVr />
        <div class="divider">2021</div>
        <LazyProjectsLofiBlockRunner />
        <div class="divider">2018 - 2021</div>
        <LazyProjectsOldWebsites />
        <div class="divider">2018</div>
        <LazyProjectsSmartSpot />
        <div class="divider">2015? - 2020?</div>
        <LazyProjectsGraphicDesign />
    </section>
</template>