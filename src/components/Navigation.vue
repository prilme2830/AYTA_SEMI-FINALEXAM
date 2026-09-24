<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand bg-light border-bottom px-3 gap-3">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/expense">Expense</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>
