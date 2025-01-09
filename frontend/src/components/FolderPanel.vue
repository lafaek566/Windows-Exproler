<template>
  <div class="folder-panel w-1/4 bg-gray-50 p-4 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4">Folders</h2>
    <div
      v-for="folder in filteredFolders"
      :key="folder.id"
      class="folder p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all"
      @click="toggleFolder(folder)"
    >
      <i class="fas fa-folder mr-2 text-yellow-500"></i>{{ folder.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["filteredFolders", "toggleFolder"],
};
</script>

<style scoped>
.folder-panel {
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
}
.folder-panel .folder:hover {
  background-color: #eef1f4;
  cursor: pointer;
}
</style>
