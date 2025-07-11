<template>
  <div class="flex rounded-xl overflow-hidden shadow-lg bg-white">
    <div
      class="w-[60px] flex flex-col items-center justify-start pt-5 relative bg-[#83958C]"
      :class="backgroundColor"
    >
      <svg
        width="53"
        height="46"
        viewBox="0 0 53 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-4 left-[43px]"
      >
        <path
          d="M16.4 0.499994C10.6 4 7.2 7.79999 6.9 13.7C7.7 13.3 8.2 13.2 9.2 13.2C12.2 13.2 15 15.9 15 19.2C15 23.1 12.1 25.5 8.6 25.5C3.9 25.5 0.9 22 0.9 16.3C0.9 7.9 7 1.2 16.4 0.499994ZM18.5 16.3C18.5 7.9 24.6 1.2 34 0.499994C28.2 4 24.8 7.79999 24.5 13.7C25.3 13.3 25.8 13.2 26.8 13.2C29.8 13.2 32.6 15.9 32.6 19.2C32.6 23.1 29.7 25.5 26.2 25.5C21.5 25.5 18.5 22 18.5 16.3Z"
          :fill="iconColor"
        />
      </svg>
    </div>
    <div class="flex-1 flex flex-col justify-center px-6 py-5">
      <!-- <p
        class="text-[#3a4a5b] text-sm md:text-base mb-4 leading-relaxed"
        v-html="quote"
      ></p> -->
      <RichText :content="quote" />
      <span class="font-bold text-xs tracking-widest text-[#3a4a5b]">{{
        author
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import RichText from "../HeroSection/RichText.vue";

const props = defineProps({
  bgColor: { type: String, default: "bg-[#d6e3df]" },
  iconColor: { type: String, default: "text-[#7a9487]" },
  quote: { type: Array, required: true },
  author: { type: String, required: true },
});

const backgroundColor = computed(() => {
  return `bg-[${props.bgColor}]`;
});
</script>
