<template>
  <div class="path mb-4">
    <span
      v-for="(part, index) in path"
      :key="index"
      @click="navigateToPath(index)"
      class="cursor-pointer text-blue-600 hover:text-blue-800"
    >
      <span>{{ part.name }}</span>
      <span v-if="index < path.length - 1" class="mx-2">/</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["path", "navigateToPath"],
};
</script>
