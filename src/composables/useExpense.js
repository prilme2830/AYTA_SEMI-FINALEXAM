import { ref, watch } from 'vue'

const STORAGE_KEY = 'expenses'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

// Defined outside the function so every component shares the same list
const expenses = ref(load())

watch(expenses, (value) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}, { deep: true })

export function useExpense() {
  function addExpense(expense) {
    expenses.value.push({ id: Date.now(), ...expense })
  }

  function removeExpense(id) {
    expenses.value = expenses.value.filter((record) => record.id !== id)
  }

  return { expenses, addExpense, removeExpense }
}
