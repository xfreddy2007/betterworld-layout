<template>
  <section class="bg-[#D0DDDC] py-16 relative overflow-hidden">
    <div
      class="bg-white w-[460px] h-[53px] md:w-[3359px] md:h-[572px] absolute bottom-[-40px] md:bottom-[-400px] left-1/2 -translate-x-1/2 z-[1] rounded-[50%]"
    ></div>
    <div
      class="relative container mx-auto flex flex-col md:flex-row items-start md:justify-center gap-12 px-6 z-20"
    >
      <!-- Left: Webinar Info -->
      <div class="flex-1 max-w-xl text-[#3A4E61]">
        <div class="flex items-center mb-4">
          <span
            class="bg-red-500 w-2.5 h-2.5 rounded-full tracking-[12%] shine-animation"
          ></span>
          <span class="text-lg px-3 py-1">{{ badge || "LIVE WEBINAR" }}</span>
        </div>
        <h1 class="text-[44px] leading-[117%] text-[#3A4E61] mb-4">
          {{ title }}
        </h1>
        <p class="mb-4 text-lg flex flex-col space-y-2">
          <RichText :content="description" />
        </p>
        <img
          src="/src/assets/kv-image.png"
          alt="Webinar visual"
          class="w-[324px] md:w-[375px] h-auto mx-auto md:mx-0"
        />
      </div>
      <!-- Right: Form -->
      <div
        class="flex-1 max-w-xl mt-8 md:mt-0 flex justify-center mx-auto md:mx-0"
      >
        <Form :date="date" :time="time" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.shine-animation {
  animation: shine 1s infinite linear;
}

@keyframes shine {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>

<script setup>
import Form from "./Form.vue";
import RichText from "./RichText.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
});
</script>
