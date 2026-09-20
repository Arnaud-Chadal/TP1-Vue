<script setup>
import ArticleItem from './ArticleItem.vue'

const articles = [
  {
    name: "Chieng",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Chieng",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Chieng",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
]
</script>


<template>
    <ul v-for="(article, index) in articles" :key="index">
      <ArticleItem :name="article.name" :description="article.description" :picture="article.picture" :price="article.price"/>
    </ul>
</template>