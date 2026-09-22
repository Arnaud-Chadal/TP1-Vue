<script setup>
import {ref} from "vue"
import ArticleItem from './ArticleItem.vue'

defineProps({articles:Array, searchValue:String})



function sliceResults(articles2)
{
  let articlesSliced = []
  for (let index = 0; index < articles2.length-3; index+=3)
  {
    articlesSliced.push(articles2.slice(index, index+3));
  }
  if (articles2.length % 3 != 0) {
    articlesSliced.push(articles2.slice(articles2.length - (articles2.length % 3), articles2.length));
  }
  return articlesSliced
}

function filterSearch(articles, searchValue)
{
  let articles2 = articles
  articles2 = articles.filter((article) => article.name.toLowerCase().includes(searchValue.toLowerCase()))
  return sliceResults(articles2)
}



const pageNumber = ref(0)

function previousButtonCheck()
{
  if (pageNumber.value == 0)
  {
    return 0
  }else return 1
}

function nextButtonCheck(articles)
{
  if (pageNumber.value == articles.length-1)
  {
    return 0
  }else return 1
}
</script>


<template>
    <ul v-for="(article, index) in filterSearch(articles, searchValue)[pageNumber]" :key="index">
      <ArticleItem :name="article.name" :description="article.description" :picture="article.picture" :price="article.price"/>
    </ul>
    <button @click="pageNumber-=previousButtonCheck()">Previous</button>
    <button @click="pageNumber+=nextButtonCheck(articles)">Next</button>
</template>