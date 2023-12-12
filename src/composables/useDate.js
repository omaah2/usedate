import { ref } from 'vue'

// Custom composable to manipulate dates
export function useDate(initialDate) {
  const currentDate = ref(new Date(initialDate))

  // Function to add days to the date
  const addDays = (daysToAdd) => {
    const newDate = new Date(currentDate.value.getTime() + daysToAdd * 86400000) // 86400000 milliseconds in a day
    currentDate.value = newDate
  }

  // Function to add months to the date
  const addMonths = (monthsToAdd) => {
    const newDate = new Date(currentDate.value)
    newDate.setMonth(currentDate.value.getMonth() + monthsToAdd)
    currentDate.value = newDate
  }

  return {
    currentDate,
    addDays,
    addMonths
  }
}
