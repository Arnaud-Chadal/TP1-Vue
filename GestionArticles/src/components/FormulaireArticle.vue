<script setup>
import { ref } from 'vue';

const name = ref('');
const description = ref('');
const price = ref(0);
const listeArticles = ref([])

function ajouterArticle()
{
    if (!name.value || !description.value) {return}
    listeArticles.value.push({
    name: name.value,
    description: description.value,
    price: price.value})

    name.value = ''
    description.value = ''
    price.value = 0
}
</script>


<template>
    <main>
        <input type="text" placeholder="Nom de l'article" v-model="name"/>
        <input type="text" placeholder="Description de l'article" v-model="description"/>
        <input type="number" placeholder="Prix de l'article" v-model="price"/>
        <button @click="ajouterArticle()">Ajouter l'article</button>
    </main>
</template>