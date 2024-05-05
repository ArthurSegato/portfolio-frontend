<script setup lang="ts">
defineOgImageComponent("Projects", {}, { renderer: "chromium" });
</script>

<template>
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
    <ContentDoc />
  </article>
</template>
