<template>
  <section class="py-16 bg-[#bfcada]">
    <div class="container mx-auto px-4">
      <h3
        class="text-center text-[1.5rem] md:text-[2rem] font-bold mb-10 text-[#3a4a5b] leading-snug"
      >
        Join 100,000+ amazing nonprofits,<br class="hidden md:block" />
        organizations, and fundraisers on BetterWorld
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :bgColor="testimonial.bgColor"
          :iconColor="testimonial.iconColor"
          :quote="testimonial.Quote"
          :author="testimonial.Author_name"
        />
      </div>
      <!-- Logos row -->
      <div
        class="flex flex-wrap justify-center items-center gap-x-4 gap-y-8 md:gap-8 opacity-80 md:h-[50px]"
      >
        <img
          src="/src/assets/usacycling.png"
          alt="USA"
          class="h-[54px] md:h-full"
        />
        <img src="/src/assets/fbla.png" alt="FBLA" class="h-[52px] md:h-full" />
        <img
          src="/src/assets/womensinitiative.png"
          alt="Women's Initiative"
          class="h-[50px] md:h-full"
        />
        <img
          src="/src/assets/boysandgirlsclub.png"
          alt="Boys & Girls Club"
          class="h-[46px] md:h-full"
        />
        <img
          src="/src/assets/makeawish.png"
          alt="Make A Wish"
          class="h-[31px] md:h-full"
        />
        <img
          src="/src/assets/younglife.png"
          alt="Younglife"
          class="h-[50px] md:h-full"
        />
        <img
          src="/src/assets/uvahealthsystem.png"
          alt="UVA"
          class="h-[43px] md:h-full"
        />
        <img
          src="/src/assets/smithsonian.png"
          alt="Smithsonian"
          class="h-[33px] md:h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from "./Card.vue";
defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
});
</script>
