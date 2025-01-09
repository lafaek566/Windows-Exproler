<template>
  <div v-if="subfolders.length" class="w-1/3 overflow-auto">
    <h3 class="text-lg font-semibold mb-2 text-gray-800">Subfolders</h3>
    <table class="min-w-full table-auto border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 text-left text-sm text-gray-700">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="subfolder in filteredSubfolders"
          :key="subfolder.id"
          @click="fetchFiles(subfolder.id)"
          class="cursor-pointer hover:bg-gray-50 transition-all duration-200"
        >
          <td class="px-4 py-2 text-sm text-gray-700">{{ subfolder.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import "../assets/styles.css";

const { subfolders, fetchFiles, searchQuery } = defineProps({
  subfolders: Array,
  fetchFiles: Function,
  searchQuery: String,
});

const filteredSubfolders = computed(() =>
  subfolders.filter((subfolder) =>
    subfolder.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
);
</script>
