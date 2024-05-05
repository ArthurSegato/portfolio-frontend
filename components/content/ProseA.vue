<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <NuxtLink :href="href" :target="target" class="group relative flex w-fit">
    <slot />
    <div
      class="absolute bottom-0 left-0 h-1 w-full bg-current transition-all ease-in group-hover:translate-x-2 group-hover:translate-y-1"
    ></div>
  </NuxtLink>
</template>
