<script setup>
import Tab from "./Tab.vue";
</script>

<template>
  <header class="w-full bg-[#D0DDDC]">
    <nav
      class="container mx-auto flex justify-center items-center space-x-8 py-4 px-6"
    >
      <div class="font-extrabold text-2xl text-[#3A4E61] tracking-tight">
        betterworld
      </div>
      <ul class="flex space-x-8">
        <Tab title="Platform" />
        <Tab title="Solutions" />
        <Tab title="Pricing" />
        <Tab title="Resources" />
        <Tab title="Contact Us" />
        <Tab title="Fundraising Ideas" />
      </ul>
      <button
        class="text-[#3A4E61] px-4 py-2 rounded-md border-[1px] border-solid border-[#3A4E61] rounded-md"
      >
        Sign In
      </button>
      <button class="bg-[#3A4E61] text-white px-4 py-2 rounded-md">
        Start fundraising for free
      </button>
    </nav>
  </header>
</template>
