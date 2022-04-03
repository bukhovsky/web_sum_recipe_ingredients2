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

<div class = "topline">Рецептный граммовычислитель. Inspired by<a href="https://www.instagram.com/anna__nutritionist/" class="fa fa-instagram" target="_blank"></a></div>
<div> </div>


<div class = "mainarea">
  

<textarea v-model="recipe" @keyup="submit(message)" placeholder="Добавьте рецепты с ингридиентами в формате «продукт количество гр» и 
получите суммарный список продуктов." rows="10" cols="30"></textarea>

<ul>
<li v-for="item in ingredients">
  {{ item.ingridient }}
</li>
</ul>
</div>

</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  color: darkblue;
}

.topline {
  margin-top: 25px;
  font-size: 36px;
  
}
.mainarea {
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  height: 500px;
  width: 100%;
  

}

.fa {
  padding: 10px;
  font-size: 30px;
  width: 25px;
  text-align: center;
  text-decoration: none;
  /* margin: 5px 2px; */
  border-radius: 50%;
}


textarea {
  flex: 2;
  background-color: #dddddd;
  color: #666666;
 padding: 0.5rem;
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
  padding: 0.5rem;
  flex: 1;
 margin: 0;
  /* border: 1px solid black;  */
  height: 500px;
  /* width: 35%; */
  font-size: 16px;
}

li {
  
  list-style-type: none;
}

</style>
