<script setup>
defineProps({
  path: String,
  alt: String,
});
</script>

<template>
  <figure>
    <NuxtImg :src="path" :alt="alt" :title="alt" class="w-full lg:max-w-2xl" v-if="path" />
    <div class="texture group flex aspect-video w-full items-center justify-center border-0 p-0 text-inherit lg:w-2/4"
      v-else>
      <div class="m-2 select-none bg-[#eadac0] p-2 text-current dark:bg-[#070d01]">
        <i class="flex gap-0">
          <div class="group-hover:-translate-y-1 transition-all ease-out">¯\_</div>
          (ツ)
          <div class="group-hover:-translate-y-1 transition-all ease-out">_/¯</div>
        </i>
      </div>
    </div>
    <figcaption class="my-4 border-l-4 border-current pl-4 font-light">
      <i>
        <slot />
      </i>
    </figcaption>
  </figure>
</template>

<style>
.texture {
  background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 8px,
      currentcolor 8px,
      currentcolor 10px);
}
</style>