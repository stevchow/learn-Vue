<template>
  <div id="app">
    <h1>Filter</h1>
    <p>{{ textHello1 | toLowerCase }}</p>
    <p>{{ textHello2 | toLowerCase | to-uppercase }}</p>
    <hr>
    <h2>Please considere to use computed properties instead of filter cause of performance and complexity issue</h2>
    <input type="text" v-model="textFiltered">
    <ul>
      <li v-for="(item, index) in filteredSearch" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textHello1:
        "Hello, World. I am lowercase-ted, filter not changing the value, it only transform OUTPUT!! THIS FILTER IS FROM LOCAL FILTER, HOW ABOUT GLOBAL ONE?",
      textHello2:
        "Hello, World. I am uppercase-ted after lowercase-ted, and I am globally declared with Vue.filter()",
      textFiltered: "",
      cars: ["volvo", "bmw", "toyota", "honda", "chevy", "ford"]
    };
  },
  filters: {
    toLowerCase(val) {
      return val.toLowerCase();
    }
  },
  computed: {
    filteredSearch() {
      return this.cars.filter(a => a.match(this.textFiltered));
    }
  }
};
</script>
