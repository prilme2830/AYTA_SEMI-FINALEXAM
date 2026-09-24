<script setup>
defineProps({
  expense: { type: Object, required: true },
})
defineEmits(['remove'])
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <div class="fw-semibold">{{ expense.name }}</div>
      <small class="text-secondary">{{ expense.category }} &middot; {{ expense.date }}</small>
    </div>
    <div class="d-flex align-items-center gap-3">
      <span class="fw-semibold">₱{{ expense.amount.toFixed(2) }}</span>
      <button class="btn btn-sm btn-outline-danger" @click="$emit('remove', expense.id)">
        Delete
      </button>
    </div>
  </li>
</template>
