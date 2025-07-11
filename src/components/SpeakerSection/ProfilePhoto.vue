<template>
  <div
    class="relative flex items-center justify-center w-[260px] h-[260px] scale-80 md:scale-100"
  >
    <!-- Abstract background SVG or divs -->
    <div class="absolute top-16 -left-14 flex w-fit gap-1">
      <img
        src="/src/assets/rec-first.png"
        alt="abstract background"
        class="w-auto h-[14px]"
      />
      <img
        src="/src/assets/rec-second.png"
        alt="abstract background"
        class="w-auto h-[14px]"
      />
    </div>

    <img
      src="/src/assets/rec-third.png"
      alt="abstract background"
      class="absolute -left-3 top-21 w-auto h-[23px]"
    />
    <div class="absolute top-28 -left-8 flex gap-1">
      <img
        src="/src/assets/rec-fourth.png"
        alt="abstract background"
        class="w-auto h-[14px]"
      />
      <img
        src="/src/assets/rec-first.png"
        alt="abstract background"
        class="w-auto h-[14px]"
      />
    </div>
    <!-- Profile photo with border -->
    <div
      class="rounded-full border-[16px] border-[#F2ECE6] overflow-hidden w-[230px] h-[230px] flex items-center justify-center"
    >
      <img :src="img" :alt="name" class="object-cover w-full h-full" />
    </div>
    <!-- Name label -->
    <div
      class="absolute bottom-12 -right-20 bg-[#3A4E61] text-white px-6 py-2 rounded-full text-sm font-medium"
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
