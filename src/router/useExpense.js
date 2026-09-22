import { ref } from 'vue'

 export function useExpense() {
 	const expenses = ref([])

 	function addExpense(expense) {
     	expenses.value.push(expense)
 	}

 	function removeExpense(id) {
     	expenses.value = expenses.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	expenses,
     	addExpense,
     	removeExpense
 	}
 }
