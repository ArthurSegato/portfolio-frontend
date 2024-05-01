<template>
  <NuxtLink
    hidden
    to="/"
    class="w-full flex items-center gap-1 hover:gap-0 transition-all ease-in lg:w-fit border rounded-md px-2 my-2 select-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
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
