<template>
  <div id="app">
    <h1>Custom Directive</h1>
    <p v-highlight> The directive we made by our own. By using (in main.js, as global directive) vue.directive('yourdirectivename', hooks example --> bind(el,binding,vnode){el.style....=''})</p>
    <p v-highlight>highlight with v-highlight</p>
    <form>
      <fieldset>
        <legend>Default Directive:</legend>
        Name: <input type="text" size="30" :value="cool" ><br>
        Email: <input type="text" size="30" :value="email"><br>
        Date of birth: <input type="text" size="22" placeholder="DD/MM/YYYY">
      </fieldset>
    </form>
    <hr>
    <h1>Change the input with color name, and it will change the hightlight color</h1>
    <input type="string" v-model="colorHighlight">
    <h1 v-highlightInput="colorHighlight">CHANGE MY HIGHLIGHT {{colorHighlight}}</h1>
    <h1 v-highlightInput:colorText="colorHighlight">CHANGE MY text color with argument pass through custom v-directive:arg="value" {{colorHighlight}}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      cool: "asdasz222d",
      email: "asd@asd.com",
      colorHighlight: "magenta"
    };
  },
  methods: {
    changedColor(x) {
      this.colorHighlight = x;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
