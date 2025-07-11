<template>
  <section class="py-16 bg-white relative z-10">
    <div class="container mx-auto flex flex-col items-center px-6">
      <!-- <img
        v-if="photoUrl"
        :src="photoUrl"
        alt="Speaker"
        class="w-24 h-24 rounded-full mb-6 border-4 border-blue-100 shadow"
      /> -->
      <ProfilePhoto :img="photoUrl" :name="name" />
      <h2
        class="text-3xl text-[#3A4E61] mb-2 flex flex-wrap items-center justify-center"
      >
        <span class="mr-2">About the speaker,</span>
        <span>{{ name }}</span>
      </h2>
      <p class="text-[#3A4E61] text-center max-w-2xl text-lg mt-2">
        <RichText :content="bio" className="text-center" />
      </p>
    </div>
  </section>
</template>

<script setup>
import RichText from "../HeroSection/RichText.vue";
import ProfilePhoto from "./ProfilePhoto.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: Array,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});
</script>
