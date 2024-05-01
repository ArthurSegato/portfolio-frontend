<script setup>
defineProps({
  path: String,
  text: String,
});
</script>

<template>
  <li class="my-3">
    <NuxtLink :to="path" class="group relative flex w-fit">
      {{ text }}
      <div
        class="absolute bottom-0 left-0 h-1 w-full bg-current transition-all ease-in group-hover:translate-x-2 group-hover:translate-y-1"
      ></div>
    </NuxtLink>
  </li>
</template>
