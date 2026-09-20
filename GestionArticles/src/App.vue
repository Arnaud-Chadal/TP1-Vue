<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/ajouter">Ajouter</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
      <RouterLink to="/articles">Articles</RouterLink>
      <RouterLink to="/panier">Panier</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>