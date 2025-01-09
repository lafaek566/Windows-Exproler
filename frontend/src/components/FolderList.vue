<template>
  <div v-if="folders.length" class="w-1/3 overflow-auto">
    <h3 class="text-lg font-semibold mb-2 text-gray-800">Folders</h3>
    <table class="min-w-full table-auto border-collapse">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2 text-left text-sm text-gray-700">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="folder in filteredFolders"
          :key="folder.id"
          @click="fetchSubfolders(folder.id)"
          class="cursor-pointer hover:bg-gray-50 transition-all duration-200"
        >
          <td class="px-4 py-2 text-sm text-gray-700">{{ folder.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import "../assets/styles.css";

const { folders, fetchSubfolders, searchQuery } = defineProps({
  folders: Array,
  fetchSubfolders: Function,
  searchQuery: String,
});

const filteredFolders = computed(() =>
  folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
);
</script>
