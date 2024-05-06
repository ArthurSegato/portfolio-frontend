<script setup lang="ts">
defineProps({
  title: String,
  date: String,
});
</script>

<template>
  <div class="my-4">
    <div class="flex w-full items-end justify-between">
      <h1 class="w-full break-words break-all text-5xl font-black transition-all ease-in">
        {{ title }}
      </h1>
      <time :datetime="date" class="border-r-4 border-current pr-2 text-lg font-thin">
        <i>
          {{ date }}
        </i>
      </time>
    </div>
    <hr class="m-1 h-1 w-1/4 bg-current" />
  </div>
</template>
