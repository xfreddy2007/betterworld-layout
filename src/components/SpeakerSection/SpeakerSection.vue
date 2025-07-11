<template>
  <section class="py-16 bg-white relative z-10">
    <div class="container mx-auto flex flex-col items-center px-6">
      <img
        v-if="speaker.photo && speaker.photo.url"
        :src="speaker.photo.url"
        alt="Speaker"
        class="w-24 h-24 rounded-full mb-6 border-4 border-blue-100 shadow"
      />
      <h2 class="text-3xl text-[#3A4E61] mb-2">
        {{ speaker.name }}
      </h2>
      <p class="text-[#3A4E61] text-center max-w-2xl text-lg mt-2">
        {{ speaker.bio }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({ speaker: Object });
</script>
