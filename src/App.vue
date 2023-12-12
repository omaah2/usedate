<template>
<div class=" my-14">
    <div id="app" class="bg-gradient-to-r from-gray-700 to-gray-200 rounded-lg   min-h-screen min-w-full  flex items-center justify-self-center">
    <DateDisplay />
  </div>
</div>
</template>

<script>
import DateDisplay from './components/DateDisplay.vue'; // Path to your DateDisplay component

export default {
  name: 'App',
  components: {
    DateDisplay,
  },
};
</script>

<style>
/* Add global styles or overrides here */
</style>
