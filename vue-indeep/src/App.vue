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
    <hr>
    <p>How to register computed properties globally? MIXINS to save. Just create the .js file with repetitive code inside it and just export it as new variable and import it wherever you want. So, no code duplication.</p>
    <list></list>
  </div>
</template>
<script>
import List from "./components/List";
import { filteredMixins } from "./mixins/filteredMixins.js";
export default {
  data() {
    return {
      textHello1:
        "Hello, World. I am lowercase-ted, filter not changing the value, it only transform OUTPUT!! THIS FILTER IS FROM LOCAL FILTER, HOW ABOUT GLOBAL ONE?",
      textHello2:
        "Hello, World. I am uppercase-ted after lowercase-ted, and I am globally declared with Vue.filter()"
    };
  },
  components: {
    List
  },
  filters: {
    toLowerCase(val) {
      return val.toLowerCase();
    }
  },
  mixins: [filteredMixins],
  created(){
    console.log('from app.vue');
  }
};
</script>
