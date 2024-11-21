<template>
  <v-card :to="'/recipe/' + recipe.id" class="hover-card">
    <v-img :src="`/images/${recipe.image}`" height="200px" />
    <v-card-title>{{ recipe.naam }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>

<style>
.hover-card {
  cursor: pointer;
}
</style>
