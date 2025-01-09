<!-- <template>
  <div class="search-bar">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search folders, subfolders, or files..."
      @input="handleSearch"
    />
    <ul>
      <li
        v-for="result in searchResults"
        :key="result.id"
        @click="handleClick(result)"
      >
        <span>{{ result.name }}</span>
        <small>{{ result.path }}</small>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// State variables
const searchQuery = ref("");
const searchResults = ref([]);
const emit = defineEmits(["result-click"]);

// Handle search input and filter results
const handleSearch = async () => {
  if (searchQuery.value.trim() === "") {
    searchResults.value = [];
    return;
  }

  try {
    const response = await axios.get("http://localhost:3000/api/search", {
      params: { query: searchQuery.value },
    });
    searchResults.value = response.data.map((result) => {
      // Menambahkan path (lokasi) berdasarkan folder/subfolder/file
      result.path = generatePath(result);
      return result;
    });

    // Setelah hasil pencarian ditemukan, pilih file pertama jika ada
    if (searchResults.value.length > 0) {
      handleClick(searchResults.value[0]);
    }
  } catch (err) {
    console.error("Error searching data:", err.message);
  }
};

// Generate path for each item
const generatePath = (item) => {
  let path = item.name; // Mulai dengan nama item (file atau subfolder)

  // Jika item adalah subfolder, tambahkan parent foldernya
  if (item.type === "subfolder") {
    path = `${item.parentFolderName}/${path}`;
  }
  // Jika item adalah file, tambahkan parent folder dan subfolder
  else if (item.type === "file") {
    path = `${item.parentFolderName}/${
      item.parentSubfolderName ? item.parentSubfolderName + "/" : ""
    }${path}`;
  }

  return path;
};

// Emit click event with result data
const handleClick = (result) => {
  emit("result-click", result); // Emit result to parent component
};
</script>

<style scoped>
.search-bar {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  margin-bottom: 16px;
}

.search-bar input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-bar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.search-bar li {
  padding: 8px;
  border: 1px solid #ddd;
  background: #fff;
  margin-top: 4px;
  border-radius: 4px;
}

.search-bar li:hover {
  background: #eaeaea;
}

.search-bar small {
  display: block;
  font-size: 0.8em;
  color: #777;
  margin-top: 4px;
}
</style> -->
