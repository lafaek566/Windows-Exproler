<template>
  <div
    class="file-panel w-1/3 p-4 rounded-lg shadow-lg"
    v-if="selectedSubfolder"
  >
    <h4 class="text-lg font-semibold mb-4">Files</h4>
    <ul class="space-y-2">
      <li
        v-for="file in selectedSubfolder.files"
        :key="file.id"
        class="file p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition-all"
        @click="selectFile(file)"
      >
        <i class="fas fa-file-alt mr-2 text-blue-500"></i>{{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["selectedSubfolder", "selectFile"],
};
</script>

<style scoped>
.file-panel {
  background-color: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
}
.file-panel .file:hover {
  background-color: #eef1f4;
  cursor: pointer;
}
</style>
