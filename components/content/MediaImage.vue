<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <figure>
    <NuxtImg :src="path" :alt="alt" :title="alt" class="w-full lg:max-w-2xl" />
    <figcaption class="my-4 border-l-4 border-current pl-4 font-light">
      <i>
        <slot />
      </i>
    </figcaption>
  </figure>
</template>
