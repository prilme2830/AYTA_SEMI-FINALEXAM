<script setup>
import ExpenseForm from '../components/ExpenseForm.vue'
import ExpenseList from '../components/ExpenseList.vue'
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">Expenses</h1>
    <ExpenseForm /><br>
    <ExpenseList />
  </div>
</template>
