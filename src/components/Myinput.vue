<script setup>
import { ref } from 'vue'
import { recipeanalyzer } from './recipeanalyzer.js'


const ingredients = ref('')
const recipe = ref('')

function submit() {
   ingredients.value = recipeanalyzer(recipe.value)
}

</script>

<template>

<h1>{{ ingredients }}</h1>


<textarea v-model="recipe" @keyup="submit(message)" placeholder="add multiple lines" rows="10" cols="30"></textarea>

<li v-for="item in ingredients">
  {{ item.ingridient }}
</li>


</template>

<style scoped>
a {
  color: #42b983;
}
</style>
