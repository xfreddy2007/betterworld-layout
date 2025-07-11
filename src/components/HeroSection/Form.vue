<template>
  <div
    class="bg-[#F2ECE6] rounded-2xl shadow-md px-4 md:px-6 py-7 md:max-w-[420px] w-full mx-auto border border-[#E3EAF3]"
  >
    <h2 class="text-center text-lg font-bold text-[#3A4E61] mb-1">Join us!</h2>
    <p class="text-center text-base text-[#3A4E61] mb-4">
      Specific form description<br />goes here malesuada et faucibus
    </p>
    <div class="flex items-center justify-center mb-4">
      <div class="flex items-center gap-2 border-r-[1px] border-[#B4B4B4] px-4">
        <img src="/src/assets/date-icon.png" alt="Calendar" class="w-5 h-5" />
        <span class="text-[#3A4E61] text-sm font-medium"
          >{{ new Date(date).toLocaleString("default", { month: "long" }) }}
          {{ ordinalDate }}</span
        >
      </div>
      <div class="flex items-center gap-2 px-4">
        <img src="/src/assets/clock-icon.png" alt="Clock" class="w-5 h-5" />
        <span class="text-[#3A4E61] text-sm font-medium">{{ time }}</span>
      </div>
    </div>
    <form class="w-full relative" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <Input
          label="First name"
          required
          placeholder="Mary"
          v-model="formData.firstName.value"
          modelName="formData.firstName.name"
        />
        <Input
          label="Last name"
          required
          placeholder="Smith"
          v-model="formData.lastName.value"
          modelName="formData.lastName.name"
        />
        <div class="md:col-span-2 flex flex-col md:flex-row gap-3">
          <div class="flex-1">
            <Input
              label="Organization name"
              required
              placeholder="BetterWorld"
              v-model="formData.orgName.value"
              modelName="formData.orgName.name"
            />
          </div>
          <div class="flex-1">
            <Input
              label="Email"
              required
              placeholder="mary@gmail.com"
              type="email"
              v-model="formData.email.value"
              modelName="formData.email.name"
            />
          </div>
        </div>
        <div class="md:col-span-2 flex flex-col md:flex-row gap-3">
          <div class="flex-1">
            <Input
              label="Phone number"
              required
              placeholder="(123) 456-7890"
              v-model="formData.phone.value"
              modelName="formData.phone.name"
              isPhoneNumber
            />
          </div>
          <div class="flex-1">
            <Input
              label="Fundraising target"
              required
              placeholder="Please select"
              v-model="formData.fundraising.value"
              modelName="formData.fundraising.name"
              isFundraisingTarget
            />
          </div>
        </div>
      </div>
      <div class="mb-4">
        <div class="font-bold text-[#3A4E61] text-sm mb-2">
          What types of fundraisers do you host?
        </div>
        <div class="grid grid-cols-1 gap-1">
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Events or Galas
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Annual Giving Days / Giving Tuesday
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Online Donation Forms
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Auctions
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Raffles
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Peer-to-Peer
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Impact Giving
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            Paddle Raise
          </label>
          <label
            class="flex items-center gap-2 text-[#3A4E61] text-sm font-normal"
          >
            <input
              type="checkbox"
              class="accent-[#3A4E61]"
              v-model="formData.checked.value"
            />
            A-Thons
          </label>
        </div>
      </div>
      <button
        type="submit"
        class="w-full bg-[#3A4E61] text-white font-semibold rounded-md py-3 text-lg mt-2 hover:bg-[#DEA598] transition cursor-pointer"
      >
        Reserve your seat
      </button>
      <div class="hidden md:block absolute bottom-0 left-0 -translate-x-[80px]">
        <svg
          width="69"
          height="59"
          viewBox="0 0 69 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <rect width="69" height="59" fill="url(#pattern0_1_184)" />
          <defs>
            <pattern
              id="pattern0_1_184"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_1_184"
                transform="matrix(0.0049505 0 0 0.00578956 0 -0.00369189)"
              />
            </pattern>
            <image
              id="image0_1_184"
              width="202"
              height="174"
              preserveAspectRatio="none"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAACuCAMAAABA3mLWAAAC8VBMVEVHcEwrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIrTWIKOFeqAAAA+nRSTlMA+AXz+foEAf79BxAI/AYD++wZ9u0C8A3MCRbqiivxU/UMConuEiTkJRQ7wY/e8tDhIh/a97AY3KowPk/iNY5SqA/vPMjpFxwnyiFXmEd+zoVRVdvWDls/ES3Pi2yT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"
            />
          </defs>
        </svg>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import Input from "./Input.vue";
import { getNumberWithOrdinal } from "../../lib/getNumberWithOrdinal";

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const ordinalDate = computed(() => {
  return getNumberWithOrdinal(new Date(props.date).getDate());
});

const formData = reactive({
  firstName: {
    name: "firstName",
    value: "",
  },
  lastName: {
    name: "lastName",
    value: "",
  },
  orgName: {
    name: "orgName",
    value: "",
  },
  email: {
    name: "email",
    value: "",
  },
  phone: {
    name: "phone",
    value: "",
  },
  fundraising: {
    name: "fundraising",
    value: "",
  },
  checked: {
    name: "checked",
    value: [],
  },
});

const handleSubmit = () => {
  console.log(formData);
};
</script>
