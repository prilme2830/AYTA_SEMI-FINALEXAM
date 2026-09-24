<script setup>
import { computed } from 'vue'
import { useExpense } from '../composables/useExpense'
import ExpenseItem from './ExpenseItem.vue'

const { expenses, removeExpense } = useExpense()

const total = computed(() =>
  expenses.value.reduce((sum, e) => sum + e.amount, 0)
)
</script>

<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h3 class="mb-0">Expenses</h3>
      <span class="fw-semibold">Total: ₱{{ total.toFixed(2) }}</span>
    </div>

    <p v-if="expenses.length === 0" class="text-secondary">No expenses yet.</p>

    <ul v-else class="list-group">
      <ExpenseItem
        v-for="expense in expenses"
        :key="expense.id"
        :expense="expense"
        @remove="removeExpense"
      />
    </ul>
  </div>
</template>
