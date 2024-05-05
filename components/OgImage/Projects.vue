<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description: string;
    image: string;
  }>(),
  {
    title: "",
    description: "",
    image: "",
  },
);
</script>

<template>
  <div class="h-full w-full bg-[#070d01] text-[#eadac0]">
    <div
      class="fixed inset-0 z-20 flex h-full w-full flex-row gap-10 bg-gradient-to-b from-transparent to-[#070d01] to-70% p-10"
    >
      <div class="relative w-full rounded-xl shadow">
        <img :src="image" class="h-full w-full rounded-xl object-cover" />
      </div>
      <div class="h-full w-full justify-end">
        <div class="font-['Inter'] text-5xl font-thin italic">{{ title }}</div>
        <div class="text-7xl font-black">Arthur Segato</div>
        <div class="flex flex-row gap-4 pt-4">
          <div class="flex h-full w-2 bg-current"></div>
          <div class="text-xl">{{ description }}</div>
        </div>
      </div>
    </div>
    <div class="fixed inset-0 z-10 h-full w-full bg-black/30"></div>
    <div class="fixed h-[100%] w-[110%] -translate-x-[5%] -translate-y-[5%]">
      <img :src="image" class="h-full w-full object-cover object-center blur" />
    </div>
  </div>
</template>
