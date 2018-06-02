<template>
  <div>
    <h1>The Author</h1>
    <p>Welcome!</p>
    <p>Medals count: {{counter}} </p>
    <button @click="counter++">increase medals</button>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("I am destroyed");
  }
};
</script>
