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
    <figcaption class="border-l-4 pl-4 my-4 border-current font-light">
      <i>
        <slot />
      </i>
    </figcaption>
  </figure>
</template>
