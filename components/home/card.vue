<script setup lang="ts">
defineProps({
  path: String,
  title: String,
  description: String,
  date: Number,
  category: String,
});
</script>

<template>
  <NuxtLink :to="path" class="group">
    <div class="flex w-full items-end justify-between">
      <h2
        class="overflow-hidden break-words text-5xl font-black transition-all ease-in group-hover:tracking-wide"
      >
        # {{ title }}
      </h2>
      <div
        class="pr-2 text-right font-thin leading-tight tracking-wide transition-all ease-in group-hover:font-light"
      >
        <time :datetime="date">
          <i>
            {{ date }}
          </i>
        </time>
        <p>
          <i>
            {{ category }}
          </i>
        </p>
      </div>
    </div>
    <hr class="m-1 h-1 bg-current transition-all ease-in" />
    <div class="relative flex h-full w-full">
      <p class="line-clamp-3">{{ description }}</p>
      <div
        class="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[#eadac0] transition-all ease-in group-hover:h-2/4 dark:to-[#070d01]"
      ></div>
    </div>
    <div class="flex w-full justify-end">
      <div class="flex flex-col items-end">
        <div class="flex items-end gap-2">
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
          class="m-1 h-1 w-0 bg-current transition-all duration-200 ease-in group-hover:w-full"
        />
      </div>
    </div>
  </NuxtLink>
</template>
