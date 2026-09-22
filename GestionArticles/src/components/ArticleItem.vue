<script setup>
defineProps({
    id:Number,
    name:String,
    description:String,
    price:Number,
    canBeDeleted:Boolean
})
</script>

<template>
  <div class="article-item">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p>Price: ${{ price.toFixed(2) }}</p>
  </div>
</template>