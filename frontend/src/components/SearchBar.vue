<template>
  <div class="search-bar">
    <input
      type="text"
      :value="searchQuery"
      @input="updateSearchQuery"
      placeholder="Search files and folders..."
    />
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateSearchQuery(event) {
      this.$emit("update:searchQuery", event.target.value);
    },
  },
};
</script>

<style scoped>
/* Add styling for search bar */
</style>
