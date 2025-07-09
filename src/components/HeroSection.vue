<template>
  <section class="bg-[#D0DDDC] py-16">
    <div
      class="container mx-auto flex flex-col md:flex-row items-start gap-12 px-6"
    >
      <!-- Left: Webinar Info -->
      <div class="flex-1 max-w-xl">
        <div class="flex items-center mb-4">
          <span
            class="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mr-3"
            >LIVE WEBINAR</span
          >
          <span class="text-gray-500 text-sm"
            >October 10, 2024 • 2:00pm EST</span
          >
        </div>
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          Live webinar title gravida eleifend amet nostra lacus pretium
        </h1>
        <p class="mb-6 text-gray-700 text-lg">
          Short description about the webinar goes here. Highlight the value and
          what attendees will learn in a concise way.
        </p>
        <img
          src="/assets/astro.svg"
          alt="Webinar visual"
          class="w-64 h-auto rounded shadow mb-6"
        />
        <ul class="list-disc list-inside text-gray-600 text-base space-y-1">
          <li>Topic 1: Lorem ipsum dolor sit amet</li>
          <li>Topic 2: Pellentesque habitant morbi</li>
          <li>Topic 3: Etiam porta sem malesuada</li>
        </ul>
      </div>
      <!-- Right: Form -->
      <div
        class="flex-1 max-w-md bg-white rounded-xl shadow-lg p-8 mt-8 md:mt-0"
      >
        <h2 class="text-xl font-bold mb-4 text-gray-800">
          Join our free webinar
        </h2>
        <form class="space-y-4">
          <div>
            <label class="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
          >
            Reserve your seat
          </button>
        </form>
        <p class="text-xs text-gray-400 mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Add interactivity later
</script>
