<template>
  <v-container>
    <v-img :src="`/images/${recipe.image}`" height="200px" />
    <h1>{{ recipe.naam }}</h1>
    <p>Porties: {{ recipe.porties }}</p>
    <h2>Ingrediënten</h2>
    <ul>
      <li v-for="ing in recipe.ingrediënten" :key="ing.item">
        {{ ing.hoeveelheid }} {{ ing.eenheid }} {{ ing.item }}
      </li>
    </ul>
    <h2>Instructies</h2>
    <ol>
      <li v-for="step in recipe.instructies" :key="step.stap">
        {{ step.beschrijving }}
      </li>
    </ol>
  </v-container>
</template>

<script>
import recipes from '../data/recipes.json';

export default {
  props: {
    id: String,
  },
  data() {
    return {
      recipe: recipes.find((r) => r.id === this.id),
    };
  },
};
</script>
