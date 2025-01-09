<template>
  <div class="file-management-container">
    <h1 class="text-3xl font-semibold text-center mb-6">File Management</h1>

    <!-- Search Bar -->
    <div class="search-bar mb-6">
      <input
        type="text"
        v-model="searchQuery"
        @input="filterFolders"
        class="search-input"
        placeholder="Search files, folders..."
      />
      <select v-model="searchType" @change="filterFolders" class="search-type">
        <option value="both">Both</option>
        <option value="folders">Folders</option>
        <option value="files">Files</option>
      </select>
    </div>

    <!-- Path Navigation -->
    <PathNavigation :path="path" :navigateToPath="navigateToPath" />

    <!-- Layout with Three Panels: Left for Folders, Center for Subfolders, Right for Files -->
    <div class="file-management">
      <!-- Left Panel: Folders -->
      <FolderPanel
        :filteredFolders="filteredFolders"
        :toggleFolder="toggleFolder"
      />

      <!-- Center Panel: Subfolders -->
      <SubfolderPanel
        :selectedFolder="selectedFolder"
        :toggleSubfolder="toggleSubfolder"
      />

      <!-- Right Panel: Files -->
      <FilePanel
        :selectedSubfolder="selectedSubfolder"
        :selectFile="selectFile"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FolderPanel from "./components/FolderPanel.vue";
import SubfolderPanel from "./components/SubfolderPanel.vue";
import FilePanel from "./components/FilePanel.vue";
import PathNavigation from "./components/PathNavigation.vue";

// Import the external CSS file
import "./assets/styles1.css";

export default {
  components: {
    FolderPanel,
    SubfolderPanel,
    FilePanel,
    PathNavigation,
  },
  data() {
    return {
      folders: [],
      searchQuery: "",
      searchType: "both",
      path: [{ name: "Home", type: "folder" }],
      filteredFolders: [],
      selectedFolder: null,
      selectedSubfolder: null,
      selectedFile: null,
    };
  },
  created() {
    this.fetchFolders();
  },
  methods: {
    async fetchFolders() {
      try {
        const response = await axios.get("http://localhost:3000/api/folders");
        this.folders = response.data;
        this.filteredFolders = this.folders;
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    },
    toggleFolder(folder) {
      this.selectedFolder = this.selectedFolder === folder ? null : folder;
      this.selectedSubfolder = null;
      this.updatePath(folder);
    },
    toggleSubfolder(subfolder) {
      this.selectedSubfolder =
        this.selectedSubfolder === subfolder ? null : subfolder;
    },
    selectFile(file) {
      this.selectedFile = file;
      this.updatePath(file);
    },
    filterFolders() {
      this.filteredFolders = this.searchFoldersRecursive(this.folders);
    },
    searchFoldersRecursive(folders) {
      return folders.reduce((matches, folder) => {
        if (this.searchItem(folder.name)) {
          matches.push(folder);
        }
        if (folder.subfolders) {
          const subfolderMatches = this.searchFoldersRecursive(
            folder.subfolders
          );
          if (subfolderMatches.length > 0) {
            folder.subfolders = subfolderMatches;
            matches.push(folder);
          }
        }
        if (folder.files && this.searchType !== "folders") {
          const fileMatches = folder.files.filter((file) =>
            this.searchItem(file.name)
          );
          if (fileMatches.length > 0) {
            folder.files = fileMatches;
            matches.push(folder);
          }
        }
        return matches;
      }, []);
    },
    searchItem(name) {
      const query = this.searchQuery.trim().toLowerCase();
      return query === "" || name.toLowerCase().includes(query);
    },
    updatePath(item) {
      const pathPart = {
        name: item.name,
        type: item.files ? "file" : "folder",
      };
      if (!this.path.some((part) => part.name === pathPart.name)) {
        this.path.push(pathPart);
      }
    },
    navigateToPath(index) {
      this.path = this.path.slice(0, index + 1);
      this.updateFilteredFolders();
      this.updateSelectedFolder();
    },
    updateFilteredFolders() {
      let currentFolders = this.folders;
      this.path.forEach((part) => {
        if (part.type === "folder") {
          currentFolders =
            currentFolders.find((folder) => folder.name === part.name)
              ?.subfolders || [];
        }
      });
      this.filteredFolders = currentFolders || [];
    },
    updateSelectedFolder() {
      const lastPath = this.path[this.path.length - 1];
      if (lastPath.type === "folder") {
        this.selectedFolder = this.folders.find(
          (folder) => folder.name === lastPath.name
        );
        this.selectedSubfolder = null;
      } else if (lastPath.type === "file") {
        this.selectedFile = this.selectedSubfolder?.files.find(
          (file) => file.name === lastPath.name
        );
        this.selectedSubfolder = this.selectedSubfolder;
      }
    },
  },
};
</script>
