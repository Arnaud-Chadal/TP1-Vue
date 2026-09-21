<script setup>
import {ref} from 'vue'
const searchValue = ref("")
</script>

<template>
    <input
    type="text"
    placeholder="Search article"
    @input="$emit('searching', searchValue)"
    v-model="searchValue"/>
</template>