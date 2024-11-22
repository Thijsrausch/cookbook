<template>
  <v-card :to="'/recipe/' + recipe.id" class="hover-card">
    <v-img :src="imageSrc" height="200px" />
    <v-card-title>{{ recipe.naam }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
  computed: {
    imageSrc() {
      return `${import.meta.env.BASE_URL}images/${this.recipe.image}`;
    },
  },
};
</script>

<style>
.hover-card {
  cursor: pointer;
}
</style>
