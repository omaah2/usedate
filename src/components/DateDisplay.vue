<template>
<div class="flex flex-col items-center justify-center mx-auto max-w-screen-md">
  <h1 class="text-3xl font-semibold mb-3">Date Manipulation</h1>

  <div>
    <p>Current Date: {{ currentDate }}</p>
  </div>

  <div class="mt-3 flex justify-center">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-3"
      @click="incrementDay"
    >
      Add A Day
    </button>
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      @click="incrementMonth"
    >
      Add A Month
    </button>
  </div>
</div>

</template>

<script>
import { useDate } from '@/composables/useDate';
import { computed } from 'vue';

export default {
  setup() {
    const { currentDate, addDays, addMonths } = useDate(new Date());

    const incrementDay = () => {
      addDays(1);
    };

    const incrementMonth = () => {
      addMonths(1);
    };

    const formattedDate = computed(() => currentDate.value.toDateString());

    return {
      currentDate: formattedDate,
      incrementDay,
      incrementMonth,
    };
  },
};
</script>


