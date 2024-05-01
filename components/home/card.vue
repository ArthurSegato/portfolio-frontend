<script setup lang="ts">
defineProps({
  path: String,
  title: String,
  description: String,
  date: String,
});
</script>

<template>
  <NuxtLink :to="path" class="group">
    <div class="w-full flex items-end justify-between">
      <h2
        class="break-words text-5xl font-black group-hover:tracking-wide transition-all ease-in"
      >
        # {{ title }}
      </h2>
      <time :datetime="date" class="text-lg font-thin pr-2">
        <i>
          {{ date }}
        </i>
      </time>
    </div>
    <hr class="h-1 m-1 bg-current" />
    <div class="relative flex w-full h-full">
      <p>{{ description }}</p>
      <div
        class="absolute bg-gradient-to-b from-transparent dark:to-[#070d01] to-[#eadac0] bottom-0 left-0 w-full h-full group-hover:h-2/4 transition-all ease-in"
      ></div>
    </div>
    <div class="flex justify-end w-full">
      <div class="flex flex-col items-end">
        <div class="flex gap-2 items-end">
          <p>read more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="26"
                stroke-dashoffset="26"
                d="M3 15H12C14.76142 15 17 12.7614 17 10V4"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="26;0"
                />
              </path>
              <g stroke-dasharray="8" stroke-dashoffset="8">
                <path d="M17 3L21 7" />
                <path d="M17 3L13 7" />
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="8;0"
                />
              </g>
            </g>
          </svg>
        </div>
        <hr
          class="h-1 m-1 bg-current w-0 group-hover:w-full transition-all ease-in duration-200"
        />
      </div>
    </div>
  </NuxtLink>
</template>
