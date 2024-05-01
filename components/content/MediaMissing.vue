<template>
  <figure>
    <div
      class="flex justify-center items-center aspect-video p-0 group border-0 text-inherit texture w-full lg:w-2/4"
    >
      <div class="m-2 p-2 dark:bg-black text-current select-none">
        <i class="flex gap-0">
          <div class="group-hover:-translate-y-1">¯\_</div>
          (ツ)
          <div class="group-hover:-translate-y-1">_/¯</div>
        </i>
      </div>
    </div>
    <figcaption class="border-l-4 pl-4 my-4 border-current font-light">
      <i>
        <slot />
      </i>
    </figcaption>
  </figure>
</template>

<style>
.texture {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 8px,
    currentcolor 8px,
    currentcolor 10px
  );
}
</style>
