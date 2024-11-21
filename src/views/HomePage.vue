<template>
  <v-container>
    <v-row>
      <v-col
          v-for="recipe in recipes"
          :key="recipe.id"
          cols="12"
          md="4"
      >
        <RecipeCard :recipe="recipe" />
      </v-col>
    </v-row>
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
    };
  },
};
</script>
