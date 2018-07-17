<template>
  <div id="app">
    <input type="text" v-model="textFiltered">
    <ul>
      <li v-for="(item, index) in filteredSearch" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { filteredMixins } from "../mixins/filteredMixins.js";
export default {
  mixins: [filteredMixins],
  created(){
    console.log('from list.vue');
  }
};
</script>
