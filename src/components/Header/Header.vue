<script setup>
import Tab from "./Tab.vue";
</script>

<template>
  <header class="w-full bg-[#D0DDDC]">
    <nav
      class="container mx-auto flex justify-between md:justify-center items-center gap-x-8 py-4 px-6"
    >
      <div class="font-extrabold text-2xl text-[#3A4E61] tracking-tight">
        betterworld
      </div>
      <div class="md:hidden w-[26px] h-[18px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16H27"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 8H27"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 24H27"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <ul class="hidden space-x-8 md:flex">
        <Tab title="Platform" />
        <Tab title="Solutions" />
        <Tab title="Pricing" />
        <Tab title="Resources" />
        <Tab title="Contact Us" />
        <Tab title="Fundraising Ideas" />
      </ul>
      <div class="hidden items-center space-x-2 md:flex">
        <button
          class="text-[#3A4E61] px-4 py-2 shadow-lg rounded-md border-[1px] border-solid border-[#3A4E61] rounded-md"
        >
          Sign In
        </button>
        <button class="bg-[#3A4E61] text-white px-4 py-2 rounded-md">
          Start fundraising for free
        </button>
      </div>
    </nav>
  </header>
</template>
