<script setup>
import {ref} from "vue"

import BarreRecherche from '@/components/BarreRecherche.vue';
import ListeArticles from '../components/ListeArticle.vue'

const searchValue = ref("")
const articles = ref([
  {
    name: "Chieng",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Chat",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Oiseau",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Cochon",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Mouton",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Serpent",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
  {
    name: "Lémurien",
    description: "a good boi",
    picture: "../components/pictures/images.webp",
    price: 19.99
  },
])
const articles2 = ref(articles.value)
const articlesSliced = ref([])

function filterSearch(searchValue)
{
  articles2.value = articles.value.filter((article) => article.name.toLowerCase().includes(searchValue.toLowerCase()))
  for (let index = 0; index < articles.length; index++)
  {
    if (index%3 == 0)
    {
      articlesSliced[index] = articles.slice(index-3, index);
    }
  }
}


</script>

<template>
  <main>
    <h1>Articles Disponibles</h1>
    <BarreRecherche @searching="(value) => filterSearch(value)"/>
    <ListeArticles :articles="articlesSliced"/>
  </main>
</template>
