<template>
  <section class="bg-[#D0DDDC] py-16 relative z-[-1] overflow-hidden">
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
