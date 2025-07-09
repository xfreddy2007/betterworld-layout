<template>
  <footer class="bg-[#3A4E61] text-white pt-10 pb-6 border-t border-[#bfcada]">
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0"
      >
        <!-- CTA Column -->
        <div class="md:w-1/4 flex flex-col items-start mb-8 md:mb-0">
          <div class="font-bold text-base md:text-lg mb-3">
            It's easy to get started, and it's Free
          </div>
          <button
            class="w-full md:w-[220px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-2 text-base"
          >
            Sign up for free
          </button>
          <button
            class="w-full md:w-[220px] bg-[#C3CEDA] text-[#3A4361] font-semibold rounded-md py-2 mb-3 text-base"
          >
            Request a demo
          </button>
          <p class="text-xs text-[#e3eaf3] leading-snug max-w-xs">
            BetterWorld is a social impact venture built to support the
            individuals, businesses, and nonprofits that serve their
            communities.
          </p>
        </div>
        <!-- Platform Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Platform</div>
          <ul class="space-y-1 text-sm">
            <li>Auctions</li>
            <li>Giveaways</li>
            <li>Ticketing</li>
            <li>Donations</li>
            <li>Crowdfunding</li>
            <li>Impact Giving</li>
          </ul>
        </div>
        <!-- Solutions Links -->
        <div class="md:w-1/4 mb-8 md:mb-0">
          <div class="font-bold mb-2">Solutions</div>
          <ul class="space-y-1 text-sm">
            <li>Charities & Nonprofits</li>
            <li>Fundraising</li>
            <li>Donor Engagement</li>
            <li>Alumni Engagement</li>
            <li>Schools & PTOs</li>
            <li>Sports Teams & Clubs</li>
            <li>Hybrid Events</li>
          </ul>
        </div>
        <!-- Learn & Sign In -->
        <div class="md:w-1/4 flex flex-col items-start">
          <div class="font-bold mb-2">Learn</div>
          <ul class="space-y-1 text-sm mb-4">
            <li>Mission</li>
            <li>Help Center</li>
            <li>Blog</li>
          </ul>
          <button
            class="w-[120px] bg-[#DDA598] text-white font-semibold rounded-md py-2 mb-4 text-base"
          >
            Sign in
          </button>
        </div>
      </div>
      <!-- Bottom Row -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center mt-8 border-t border-[#bfcada] pt-4 gap-4 md:gap-0"
      >
        <div class="text-xs text-[#e3eaf3]">© 2024 BetterWorld</div>
        <div class="flex space-x-6 text-xs text-[#e3eaf3]">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div class="flex space-x-4">
          <span class="inline-block">
            <img
              src="/src/assets/facebook.png"
              alt="Facebook"
              class="w-5 h-5"
            />
          </span>
          <span class="inline-block">
            <img
              src="/src/assets/instagram.png"
              alt="Instagram"
              class="w-5 h-5"
            />
          </span>
          <span class="inline-block">
            <img src="/src/assets/twitter.png" alt="Twitter" class="w-5 h-5" />
          </span>
          <span class="inline-block">
            <img
              src="/src/assets/linkedin.png"
              alt="LinkedIn"
              class="w-5 h-5"
            />
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>
