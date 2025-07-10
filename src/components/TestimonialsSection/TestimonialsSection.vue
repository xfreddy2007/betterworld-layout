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
          bgColor="bg-[#D0DDDC]"
          iconColor="#83958C"
          :quote="'BetterWorld has been amazing for the needs of our small school. The customer service is phenomenal and the <span class=\'underline font-semibold\'>ease of the platform</span> is fantastic!'"
          author="STACY K"
        />
        <Card
          bgColor="bg-[#83958C]"
          iconColor="#D0DDDC"
          :quote="'Excellent – we have had no challenges using BetterWorld and the <span class=\'underline font-semibold\'>support team</span> has always been there with <span class=\'underline font-semibold\'>answers on the same day</span>.'"
          author="SUSAN P"
        />
        <Card
          bgColor="bg-[#DDA598]"
          iconColor="#F2ECE6"
          :quote="'Everything went SO smoothly – thank you again for the wonderful platform! We raised <span class=\'underline font-semibold\'>twice as much</span> as we ever raised before!'"
          author="PAMELA C"
        />
        <Card
          bgColor="bg-[#F2ECE6]"
          iconColor="#DDA598"
          :quote="'...the BetterWorld platform is the best. They have considered all of the factors required to have a <span class=\'underline font-semibold\'>successful fundraising event</span> and built that functionality into the product.'"
          author="ROSS S"
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
</script>
