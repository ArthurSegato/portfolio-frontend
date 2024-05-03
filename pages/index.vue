<script setup lang="ts">
useHead({
  title: 'Developer',
})

defineOgImageComponent('Default', {
  image: "/img/01.jpg",
  message: "computer scientist, pt-br, EU based, fullstack && game dev, are you still reading this? really?! well then, you look cute today. Nice photo innit? its my kitchen :v"
}, {
  renderer: "chromium"
})

const { data } = await useAsyncData("home", () =>
  queryContent("/")
    .only(["title", "description", "_path", "date"])
    .sort({ date: -1, $numeric: true })
    .find(),
);
</script>

<template>
  <ul class="flex flex-col gap-4">
    <li v-for="(item, index) in data" :key="index">
      <LazyHomeCard :path="item._path" :title="item.title" :description="item.description" :date="item.date" />
    </li>
  </ul>
</template>
