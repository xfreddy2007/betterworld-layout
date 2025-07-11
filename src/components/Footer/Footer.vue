<script setup>
defineProps({
  cta: {
    type: String,
    required: true,
  },
  signupText: {
    type: String,
    required: true,
  },
  demoText: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  platformLinks: {
    type: Array,
    required: true,
  },
  solutionsLinks: {
    type: Array,
    required: true,
  },
  learnLinks: {
    type: Array,
    required: true,
  },
  signinText: {
    type: String,
    required: true,
  },
  copyright: {
    type: String,
    required: true,
  },
  socials: {
    type: Array,
    required: true,
  },
  legalLinks: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <footer class="bg-[#3A4E61] text-white pt-10 pb-6 border-t border-[#bfcada]">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0"
      >
        <!-- CTA Column -->
        <div class="md:w-1/4 flex flex-col items-start mb-8 md:mb-0">
          <div class="font-bold text-base md:text-lg mb-3">
            {{ cta }}
          </div>
          <button
            v-if="signupText"
            class="w-full md:w-[220px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-2 text-base"
          >
            {{ signupText }}
          </button>
          <button
            v-if="demoText"
            class="w-full md:w-[220px] bg-[#C3CEDA] text-[#3A4361] font-semibold rounded-md py-2 mb-3 text-base"
          >
            {{ demoText }}
          </button>
          <p class="text-xs text-[#e3eaf3] leading-snug max-w-xs">
            {{ description }}
          </p>
        </div>
        <!-- Platform Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Platform</div>
          <ul class="space-y-1 text-sm">
            <li v-for="item in platformLinks" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- Solutions Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Solutions</div>
          <ul class="space-y-1 text-sm">
            <li v-for="item in solutionsLinks" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <!-- Learn & Sign In -->
        <div class="md:w-1/4 flex flex-col items-start">
          <div class="font-bold mb-2">Learn</div>
          <ul class="space-y-1 text-sm mb-4">
            <li v-for="item in learnLinks" :key="item">{{ item }}</li>
          </ul>
          <button
            v-if="signinText"
            class="w-[120px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-4 text-base"
          >
            {{ signinText }}
          </button>
        </div>
      </div>
      <!-- Bottom Row -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center mt-8 border-t border-[#bfcada] pt-4 gap-4 md:gap-0"
      >
        <div class="text-xs text-[#e3eaf3]">{{ copyright }}</div>
        <div class="flex space-x-6 text-xs text-[#e3eaf3]">
          <span v-for="item in legalLinks" :key="item">{{ item }}</span>
        </div>
        <div class="flex space-x-4">
          <a
            v-for="social in socials"
            :key="social.url"
            :href="social.url"
            target="_blank"
            rel="noopener"
          >
            <img :src="social.icon" :alt="social.label" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
