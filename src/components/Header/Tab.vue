<template>
  <li @click="handleClick">
    <a href="#" class="text-[#3A4E61] font-medium">{{ title }}</a>
  </li>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
