<template>
  <div id="app">
    <p>Loaded ID : {{id}}</p>
    <input type="text" v-model="textFiltered">
    <ul>
      <li v-for="(item, index) in filteredSearch" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
import { filteredMixins } from "../mixins/filteredMixins.js";
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  mixins: [filteredMixins],
  created(){
    console.log('from list.vue');
  }
};
</script>
