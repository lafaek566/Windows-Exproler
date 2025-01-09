<template>
  <div
    class="subfolder-panel w-1/3 p-4 rounded-lg shadow-lg"
    v-if="selectedFolder"
  >
    <h3 class="text-lg font-semibold mb-4">Subfolders</h3>
    <div
      v-for="subfolder in selectedFolder.subfolders"
      :key="subfolder.id"
      class="subfolder p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all"
      @click="toggleSubfolder(subfolder)"
    >
      <i class="fas fa-folder mr-2 text-yellow-500"></i>{{ subfolder.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedFolder", "toggleSubfolder"],
};
</script>

<style scoped>
.subfolder-panel {
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
}
.subfolder-panel .subfolder:hover {
  background-color: #eef1f4;
  cursor: pointer;
}
</style>
