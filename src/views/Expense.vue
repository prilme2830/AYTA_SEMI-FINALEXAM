<script setup>
import {ref} from 'vue';

const expenseName = ref('');
const amount = ref('');
const category = ref('');
const expenseDate = ref('');

const emit = defineEmits(['change'])

function Change(){
    emit('change', {
        expenseName: expenseName.value,
        amount: amount.value,
        category: category.value,

    })
}


</script>
<template>
    <div>
        <form @submit.prevent="expenseButton">
            <input v-model="expenseName" type="text" placeholder="Expense Name">
            <input v-model="amount" type="number" placeholder="Amount">
            <select v-model="category">
                <option>Food</option>
                <option>Transportation</option>
                <option>School Supplies</option>
                <option>Others</option>                
            </select>
            <input v-model="expenseDate" type="date" placeholder="Enter the Date">


      
        <button @click="Change">ADD EXPENSE</button>

        </form>
    </div>

</template>
