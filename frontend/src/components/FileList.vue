<template>
  <div v-if="files.length" class="w-1/3 overflow-auto">
    <h3 class="text-lg font-semibold mb-2 text-gray-800">Files</h3>
    <table class="min-w-full table-auto border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 text-left text-sm text-gray-700">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="file in filteredFiles"
          :key="file.id"
          @click="handleFileClick(file.id)"
          class="cursor-pointer hover:bg-gray-50 transition-all duration-200"
        >
          <td class="px-4 py-2 text-sm text-gray-700">{{ file.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { generatePath } from "../utils/PathUtils"; // Import path generation function
import "../assets/styles.css";

const { files, handleFileClick, searchQuery } = defineProps({
  files: Array,
  handleFileClick: Function,
  searchQuery: String,
});

const filteredFiles = computed(() =>
  files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
);
</script>
