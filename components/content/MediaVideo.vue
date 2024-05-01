<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <figure>
    <video class="w-full lg:max-w-2xl" autoplay muted loop :title="alt">
      <source :src="path" type="video/mp4" />
    </video>
    <figcaption class="my-4 border-l-4 border-current pl-4 font-light">
      <i>
        <slot />
      </i>
    </figcaption>
  </figure>
</template>
