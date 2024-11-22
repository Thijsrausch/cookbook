<template>
  <v-container>
    <!-- Search Bar -->
    <v-text-field
        v-model="searchTerm"
        label="Search Recipes"
        outlined
        clearable
        class="mb-4"
    />

    <!-- Recipes Grid -->
    <v-row>
      <v-col
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          cols="12"
          md="4"
      >
        <RecipeCard :recipe="recipe" />
      </v-col>
    </v-row>

    <!-- No Recipes Found Message -->
    <div v-if="filteredRecipes.length === 0" class="text-center">
      <p>No recipes found.</p>
    </div>
  </v-container>
</template>


<script>
import recipes from '../data/recipes.json';
import RecipeCard from '../components/RecipeCard.vue';

export default {
  components: { RecipeCard },
  data() {
    return {
      recipes,
      searchTerm: '', // Bind search input
    };
  },
  computed: {
    // Filter recipes based on search term
    filteredRecipes() {
      if (!this.searchTerm) {
        return this.recipes;
      }
      const search = this.searchTerm.toLowerCase();
      return this.recipes.filter(
          (recipe) =>
              recipe.name.toLowerCase().includes(search) ||
              recipe.description.toLowerCase().includes(search)
      );
    },
  },
};
</script>
