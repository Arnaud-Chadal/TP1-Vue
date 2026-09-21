<script setup>
import {ref} from "vue"
import ArticleItem from './ArticleItem.vue'

defineProps({articles:Array})

const pageNumber = ref(1)
function previousButtonCheck()
{
  console.log(articles)
  if (pageNumber == 0) return 0
  else return 1
}

function nextButtonCheck()
{
  if (pageNumber == articlesSliced[pageNumber].length-1) return 0
  else return 1
}
</script>


<template>
    <ul v-for="(article, index) in articles[pageNumber]" :key="index">
      <ArticleItem :name="article.name" :description="article.description" :picture="article.picture" :price="article.price"/>
    </ul>
    <button @click="pageNumber-=previousButtonCheck()">Previous</button>
    <button @click="pageNumber+=nextButtonCheck()">Next</button>
</template>