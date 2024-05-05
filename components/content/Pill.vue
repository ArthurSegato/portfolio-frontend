<script setup lang="ts">
defineProps({
  items: Array,
});
</script>

<template>
  <ul class="flex flex-row flex-wrap gap-2">
    <li
      v-for="item in items"
      class="w-fit rounded-3xl border border-current px-2 py-1 text-sm"
    >
      {{ item }}
    </li>
  </ul>
</template>
