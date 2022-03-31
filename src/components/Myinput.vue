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

<h1>Рецептный граммовычислитель</h1>


<textarea v-model="recipe" @keyup="submit(message)" placeholder="добавьте рецепты" rows="10" cols="30"></textarea>
<ul>
<li v-for="item in ingredients">
  {{ item.ingridient }}
</li>
</ul>

</template>

<style scoped>
textarea {
  float: left;
  width: 60%;
  height: 500px;
  padding: 15px;
  font-size: 16px;
  

    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

ul {
  padding: 30px;
  float: left;
  font-size: 16px;
}
</style>
