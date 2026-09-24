<script setup>
import { RouterView } from 'vue-router'

import Navigation from './components/Navigation.vue';
</script>

<template>
<div id="app">
    
    <Navigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>