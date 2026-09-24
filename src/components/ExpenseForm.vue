<script setup>
import { ref, watch } from 'vue'
import { useExpense } from '../composables/useExpense'

const { addExpense } = useExpense()

const DRAFT_KEY = 'expenseDraft'

const expenseName = ref('')
const amount = ref('')
const category = ref('')
const expenseDate = ref('')

// Restore an unfinished draft
try {
  const draft = JSON.parse(localStorage.getItem(DRAFT_KEY)) || {}
  expenseName.value = draft.expenseName || ''
  amount.value = draft.amount || ''
  category.value = draft.category || ''
  expenseDate.value = draft.expenseDate || ''
} catch {
  /* ignore corrupted draft */
}

watch([expenseName, amount, category, expenseDate], () => {
  localStorage.setItem(DRAFT_KEY, JSON.stringify({
    expenseName: expenseName.value,
    amount: amount.value,
    category: category.value,
    expenseDate: expenseDate.value,
  }))
})

function clearForm() {
  expenseName.value = ''
  amount.value = ''
  category.value = ''
  expenseDate.value = ''
  localStorage.removeItem(DRAFT_KEY)
}

function submitExpense() {
  addExpense({
    name: expenseName.value.trim(),
    amount: Number(amount.value),
    category: category.value.trim(),
    date: expenseDate.value,
  })
  clearForm()
}
</script>

<template>
  <div class="row g-4">
    <div class="col-lg-7">
      <form @submit.prevent="submitExpense">
        <div class="mb-3">
          <label class="form-label fw-semibold">Expense Name</label>
          <input type="text" class="form-control" v-model="expenseName"
                 placeholder="e.g. Groceries" required>
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Amount</label>
          <input type="number" min="0" step="0.01" class="form-control" v-model="amount"
                 placeholder="Enter amount" required>
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Category</label>
          <input type="text" class="form-control" v-model="category"
                 placeholder="e.g. Food" required>
        </div>

        <div class="mb-3">
          <label class="form-label fw-semibold">Date</label>
          <input type="date" class="form-control" v-model="expenseDate" required>
        </div>

        <div class="d-flex gap-2">
          <button type="submit" class="btn btn-primary">Add Expense</button>
          <button type="button" class="btn btn-outline-danger" @click="clearForm">
            Clear Form
          </button>
        </div>
      </form>
    </div>

    <div class="col-lg-5">
      <div class="card shadow-sm border-0">
        <div class="card-body p-4">
          <h3>Preview</h3>

          <div class="mb-4">
            <small class="text-secondary">Expense Name</small>
            <h5 class="mb-0">{{ expenseName || 'Data Not Provided' }}</h5>
          </div>
          <div class="mb-4">
            <small class="text-secondary">Amount</small>
            <h5 class="mb-0">{{ amount || 'Data Not Provided' }}</h5>
          </div>
          <div class="mb-4">
            <small class="text-secondary">Category</small>
            <h5 class="mb-0">{{ category || 'Data Not Provided' }}</h5>
          </div>
          <div class="mb-0">
            <small class="text-secondary">Expense Date</small>
            <h5 class="mb-0">{{ expenseDate || 'Data Not Provided' }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
