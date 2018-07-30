<template>
  <div>
    <h1>Header</h1>
    <tabs></tabs>
    <router-view></router-view>
    <button class="btn btn-block btn-info" @click="backHome">back to home from JS</button>
  </div>
</template>
<script>
import Tabs from "./components/Tabs";
export default {
  components: {
    Tabs
  },
  methods: {
    backHome() {
      this.$router.push("/");
      //can also pushing object ({path:''}), we use push to be able to go back when clicking back
    }
  }
};
</script>
<style>
html {
  background: #4b6cb7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #182848,
    #4b6cb7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #182848,
    #4b6cb7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

body {
  height: 94vh;
  border-radius: 1rem;
  margin: 2rem;
  margin-top: 1.4rem;
  padding: 3rem;
  box-shadow: 0 9px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
