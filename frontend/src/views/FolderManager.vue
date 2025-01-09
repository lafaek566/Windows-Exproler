<!-- <template>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div
      class="finder-window bg-white rounded-lg shadow-lg w-[80vw] h-[80vh] overflow-hidden flex flex-col"
    >
      <div
        class="window-header flex items-center justify-between bg-gray-800 p-2 text-white text-sm rounded-t-lg"
      >
        <span>Finder</span>
      </div>

      <!-- Path Display -->
<!-- <div v-if="selectedItem" class="bg-gray-100 p-3 border-t">
        <p class="text-sm text-gray-600">
          <strong>Path:</strong> {{ selectedItem.path }}
        </p>
      </div>

      <div class="finder-layout flex space-x-4 p-6 overflow-hidden">
        <FolderList
          :folders="folders"
          :searchQuery="searchQuery"
          :fetchSubfolders="fetchSubfolders"
        />
        <SubfolderList
          :subfolders="subfolders"
          :searchQuery="searchQuery"
          :fetchFiles="fetchFiles"
        />
        <FileList
          :files="files"
          :searchQuery="searchQuery"
          :handleFileClick="handleFileClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import FolderList from "../components/FolderList.vue";
import SubfolderList from "../components/SubfolderList.vue";
import FileList from "../components/FileList.vue";
import "../assets/styles.css";

// State variables
const folders = ref([]);
const subfolders = ref([]);
const files = ref([]);
const selectedItem = ref(null);
const searchQuery = ref(""); // Search query state

// Fetch data on component mount
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/folders");
    folders.value = response.data;
  } catch (err) {
    console.error("Error fetching folders:", err);
  }
});

// Fetch subfolders based on folder ID
const fetchSubfolders = async (folderId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/folders/${folderId}/subfolders`
    );
    subfolders.value = response.data;
  } catch (err) {
    console.error("Error fetching subfolders:", err);
  }
};

// Fetch files based on subfolder ID
const fetchFiles = async (subfolderId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/folders/${subfolderId}/files`
    );
    files.value = response.data;
  } catch (err) {
    console.error("Error fetching files:", err);
  }
};

// Handle file click and generate the path
const handleFileClick = (fileId) => {
  const file = files.value.find((f) => f.id === fileId);
  if (file) {
    const path = generatePath(file, folders.value, subfolders.value);
    selectedItem.value = { name: file.name, path };
  }
};

// Recursive function to generate the full path
const generatePath = (file, folders, subfolders) => {
  let path = file.name; // Start with the file name

  // Find the subfolder for the file
  const subfolder = subfolders.find((s) => s.id === file.folder_id);
  if (subfolder) {
    path = `${subfolder.name} => ${path}`;
    // Now find the parent folder of the subfolder
    const parentFolder = folders.find((f) => f.id === subfolder.parent_id);
    if (parentFolder) {
      path = `${parentFolder.name} => ${path}`;
    }
  }

  return path;
};
</script>

<style scoped>
.finder-window {
  max-width: 80vw;
  max-height: 80vh;
}
</style> -->
-->
