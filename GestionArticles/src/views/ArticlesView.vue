<script setup>
import {ref} from "vue"

import BarreRecherche from '@/components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticle.vue'
import { useArticles } from '../stores/articles.js'
const { articles, addArticle, removeArticle } = useArticles()

const searchValue = ref('')

</script>

<template>
  <main>
    <h1>Articles Disponibles</h1>
    <BarreRecherche @searching="(value) => searchValue = value"/>
    <ListeArticles :articles="articles" :searchValue="searchValue"/>
  </main>
</template>
