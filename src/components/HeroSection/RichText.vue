<template>
  <div class="rich-text">
    <template v-for="(block, index) in parsedContent" :key="index">
      <!-- Paragraph -->
      <p v-if="block.type === 'paragraph'" class="mb-2">
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <span v-if="child.type === 'text'">{{ child.text }}</span>
        </template>
      </p>

      <!-- Unordered List -->
      <ul
        v-else-if="block.type === 'list' && block.format === 'unordered'"
        class="list-disc list-inside mb-2 ml-4"
      >
        <template v-for="(item, itemIndex) in block.children" :key="itemIndex">
          <li v-if="item.type === 'list-item'">
            <template
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
            >
              <span v-if="child.type === 'text'">{{ child.text }}</span>
            </template>
          </li>
        </template>
      </ul>

      <!-- Ordered List -->
      <ol
        v-else-if="block.type === 'list' && block.format === 'ordered'"
        class="list-decimal list-inside mb-2 ml-4"
      >
        <template v-for="(item, itemIndex) in block.children" :key="itemIndex">
          <li v-if="item.type === 'list-item'">
            <template
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
            >
              <span v-if="child.type === 'text'">{{ child.text }}</span>
            </template>
          </li>
        </template>
      </ol>

      <!-- Heading -->
      <h1
        v-else-if="block.type === 'heading' && block.level === 1"
        class="text-2xl font-bold mb-2"
      >
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <span v-if="child.type === 'text'">{{ child.text }}</span>
        </template>
      </h1>
      <h2
        v-else-if="block.type === 'heading' && block.level === 2"
        class="text-xl font-bold mb-2"
      >
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <span v-if="child.type === 'text'">{{ child.text }}</span>
        </template>
      </h2>
      <h3
        v-else-if="block.type === 'heading' && block.level === 3"
        class="text-lg font-bold mb-2"
      >
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <span v-if="child.type === 'text'">{{ child.text }}</span>
        </template>
      </h3>

      <!-- Quote -->
      <blockquote
        v-else-if="block.type === 'quote'"
        class="border-l-4 border-gray-300 pl-4 italic mb-2"
      >
        <template
          v-for="(child, childIndex) in block.children"
          :key="childIndex"
        >
          <span v-if="child.type === 'text'">{{ child.text }}</span>
        </template>
      </blockquote>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  content: {
    type: [String, Array, Object],
    required: true,
  },
});

const parsedContent = computed(() => {
  if (!props.content) return [];

  // If content is already an array, use it directly
  if (Array.isArray(props.content)) {
    return props.content;
  }

  // If content is a string, try to parse it as JSON
  if (typeof props.content === "string") {
    try {
      return JSON.parse(props.content);
    } catch (error) {
      console.error("Failed to parse rich text content:", error);
      return [];
    }
  }

  // If content is an object, try to extract the data
  if (typeof props.content === "object") {
    // Handle Strapi response format
    if (props.content.data?.attributes) {
      return props.content.data.attributes;
    }
    return [props.content];
  }

  return [];
});
</script>

<style scoped>
.rich-text {
  line-height: 1.6;
}

.rich-text p {
  margin-bottom: 0.5rem;
}

.rich-text ul,
.rich-text ol {
  margin-bottom: 0.5rem;
}

.rich-text li {
  margin-bottom: 0.25rem;
}

.rich-text blockquote {
  margin-bottom: 0.5rem;
}
</style>
