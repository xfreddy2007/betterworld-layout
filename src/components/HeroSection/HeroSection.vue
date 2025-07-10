<template>
  <section class="bg-[#D0DDDC] py-16 relative overflow-hidden">
    <div
      class="bg-white w-[3359px] h-[572px] absolute bottom-[-400px] left-1/2 -translate-x-1/2 z-[1] rounded-[50%]"
    ></div>
    <div
      class="relative container mx-auto flex flex-col md:flex-row items-start md:justify-center gap-12 px-6 z-20"
    >
      <!-- Left: Webinar Info -->
      <div class="flex-1 max-w-xl">
        <div class="flex items-center mb-4">
          <span
            class="bg-red-700 w-2.5 h-2.5 rounded-full tracking-[12%]"
          ></span>
          <span class="text-[#3A4E61] text-lg px-3 py-1">LIVE WEBINAR</span>
        </div>
        <h1 class="text-[44px] leading-[117%] text-[#3A4E61] mb-4">
          Live webinar title gravida eleifend amet nostra lacus pretium
        </h1>
        <p class="mb-6 text-gray-700 text-lg">
          Live webinar description and or talking points lorem ipsum odor amet,
          consectetuer adipiscing elit. Lacus ridiculus libero nisl ligula,
          viverra per. Cras enim per sagittis mus posuere auctor.
          <br />
          <br />
          Afames posuere cursus iaculis mus blandit sit feugiat. Faucibus augue
          sem tellus ultricies by:
        </p>
        <ul class="list-disc list-inside text-gray-600 text-base space-y-1">
          <li>Maecenas consectetur euismod vivamus</li>
          <li>Afames posuere cursus iaculis</li>
          <li>Keeping more of the funds raised</li>
        </ul>
        <img
          src="/src/assets/kv-image.png"
          alt="Webinar visual"
          class="w-[324px] md:w-[375px] h-auto"
        />
      </div>
      <!-- Right: Form -->
      <div class="flex-1 max-w-md mt-8 md:mt-0 flex justify-center">
        <Form />
      </div>
    </div>
  </section>
</template>

<script setup>
import Form from "./Form.vue";
</script>
