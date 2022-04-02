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

<div class = "mainarea">
  

<textarea v-model="recipe" @keyup="submit(message)" placeholder="добавьте рецепты" rows="10" cols="30"></textarea>

<ul>
<li v-for="item in ingredients">
  {{ item.ingridient }}
</li>
</ul>
</div>

<footer>
  My footer
</footer>

</template>

<style scoped>
.mainarea {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  height: 500px;
  width: 100%;
  

}



textarea {
  flex: 2;
  background-color: #dddddd;
  color: #666666;
  padding: 1em;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  
  height: 500px;
  transition: all 0.2s;
}

textarea:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

textarea:focus {
  cursor: text;
  color: #333333;
  background-color: white;
  border-color: #333333;
}


ul {
  flex: 1;
 margin: 0;
 border: 1px solid black;
  height: 500px;
  /* width: 35%; */
  font-size: 16px;
}


  footer {
    margin-top: 50px;
  background-color: #777;
  padding: 10px;
  text-align: center;
  color: white;
  
}



</style>
