<template>
  <div class="w-full rounded-xl bg-white flex">
    <div
      v-if="isPhoneNumber"
      class="flex space-x-1 items-center px-3 py-2 border-r-[1px] border-[#E5E5E5]"
    >
      <img src="/src/assets/usa-flag.png" alt="USA" class="w-5 h-auto" />
      <div>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.81088 4.8764C4.41175 5.42946 3.58825 5.42946 3.18911 4.8764L0.813897 1.58521C0.336598 0.923842 0.809173 2.37609e-07 1.62478 3.08912e-07L6.37522 7.24208e-07C7.19083 7.95511e-07 7.6634 0.923842 7.1861 1.58521L4.81088 4.8764Z"
            fill="#3A4E61"
          />
        </svg>
      </div>
    </div>
    <div class="px-3 py-2 flex-1 relative">
      <label
        class="block text-xs font-semibold text-[#3A4E61] mb-1 flex space-x-0.5"
      >
        <span>{{ label }}</span>
        <span v-if="required" class="text-[#DDA598]">*</span>
      </label>
      <input
        v-if="!isFundraisingTarget"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full text-sm text-[#B0B7BC] placeholder-[#B0B7BC] focus:outline-none transition bg-transparent"
      />
      <div v-else class="relative">
        <select
          :required="required"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
          class="w-full appearance-none rounded-xl border border-transparent bg-white text-sm text-[#B0B7BC] placeholder-[#B0B7BC] pr-8 pl-0"
        >
          <option disabled value="">Please select</option>
          <option>$1,000</option>
          <option>$5,000</option>
          <option>$10,000+</option>
        </select>
        <svg
          class="w-4 h-4 text-[#3A4E61] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  required: { type: Boolean, default: false },
  placeholder: { type: String, default: "" },
  type: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
  isPhoneNumber: { type: Boolean, default: false },
  isFundraisingTarget: { type: Boolean, default: false },
});
</script>
