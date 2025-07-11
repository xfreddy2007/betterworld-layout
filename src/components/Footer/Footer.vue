<script setup>
defineProps({ footer: Object });
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
            {{ footer.cta }}
          </div>
          <button
            v-if="footer.signupText"
            class="w-full md:w-[220px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-2 text-base"
          >
            {{ footer.signupText }}
          </button>
          <button
            v-if="footer.demoText"
            class="w-full md:w-[220px] bg-[#C3CEDA] text-[#3A4361] font-semibold rounded-md py-2 mb-3 text-base"
          >
            {{ footer.demoText }}
          </button>
          <p class="text-xs text-[#e3eaf3] leading-snug max-w-xs">
            {{ footer.description }}
          </p>
        </div>
        <!-- Platform Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Platform</div>
          <ul class="space-y-1 text-sm">
            <li v-for="item in footer.platformLinks" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- Solutions Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Solutions</div>
          <ul class="space-y-1 text-sm">
            <li v-for="item in footer.solutionsLinks" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
        <!-- Learn & Sign In -->
        <div class="md:w-1/4 flex flex-col items-start">
          <div class="font-bold mb-2">Learn</div>
          <ul class="space-y-1 text-sm mb-4">
            <li v-for="item in footer.learnLinks" :key="item">{{ item }}</li>
          </ul>
          <button
            v-if="footer.signinText"
            class="w-[120px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-4 text-base"
          >
            {{ footer.signinText }}
          </button>
        </div>
      </div>
      <!-- Bottom Row -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center mt-8 border-t border-[#bfcada] pt-4 gap-4 md:gap-0"
      >
        <div class="text-xs text-[#e3eaf3]">{{ footer.copyright }}</div>
        <div class="flex space-x-6 text-xs text-[#e3eaf3]">
          <span v-for="item in footer.legalLinks" :key="item">{{ item }}</span>
        </div>
        <div class="flex space-x-4">
          <a
            v-for="social in footer.socials"
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
