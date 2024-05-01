<script setup>
defineProps({
  topic: String,
  text: String,
});
</script>

<template>
  <dt>
    <strong>
      {{ topic }}
    </strong>
  </dt>
  <dd class="ml-8">
    {{ text }}
  </dd>
</template>
