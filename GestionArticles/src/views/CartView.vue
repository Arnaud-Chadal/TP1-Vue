<script setup>
import ListeArticles from '../components/ListeArticle.vue'
import { articles } from '../stores/articles.js'
</script>

<template>
  <ListeArticles :articles="articles"/>
</template>
