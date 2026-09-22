<script setup>
import {ref} from "vue"
import ListeArticles from '../components/ListeArticle.vue'
import BarreRecherche from '../components/BarreRecherche.vue'
import { useArticles } from '../stores/articles.js'
const { articles, addArticle, removeArticle } = useArticles()

const searchValue = ref('')
</script>

<template>
  <main>
    <BarreRecherche @searching="(value) => searchValue = value"/>
    <ListeArticles :articles="articles" :searchValue="searchValue"/>
  </main>
</template>



