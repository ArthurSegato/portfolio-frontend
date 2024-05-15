<script setup lang="ts">
const route = useRoute().params.slug[0];

const { data } = await useAsyncData(
  "home",
  queryContent(`/projects/${route}`).findOne,
);

defineOgImageComponent(
  "Projects",
  {
    image: data.value?.image,
    date: data.value?.date,
  },
  { renderer: "chromium" },
);
</script>

<template>
  <div>
    <NuxtLink
      hidden
      to="/"
      class="my-2 flex w-full select-none items-center gap-1 rounded-md border border-current px-4 py-2 transition-all ease-in hover:gap-0 lg:w-fit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-dasharray="10"
          stroke-dashoffset="10"
          stroke-linecap="round"
          stroke-width="2"
          d="M8 12L15 5M8 12L15 19"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="10;0"
          />
        </path>
      </svg>
      <p>back</p>
    </NuxtLink>
    <article class="w-full leading-relaxed">
      <ContentDoc>
        <template #not-found>
          <h1 class="text-5xl font-black">Awkward...</h1>
          <h2 class="text-4xl font-extrabold">Hmmmmm, well...</h2>
          <h3 class="text-3xl font-bold">that's called a error handling</h3>
          <h4 class="text-2xl font-semibold">anyway, here goes a cat</h4>
          <video
            class="w-full lg:max-w-2xl"
            autoplay
            muted
            loop
            title="cat, what did you expect?"
          >
            <source src="/vid/neko.mp4" type="video/mp4" />
          </video>
          <h5 class="text-xl font-medium">ok, go back now</h5>
          <h6 class="text-xs">please</h6>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>
