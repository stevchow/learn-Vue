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
    <h1 v-local-highlight:colorText.delayedx.blink="{mainColor:colorHighlight, secondColor: 'white', delay:100}">local - CHANGE MY HIGHLIGHT {{colorHighlight}}</h1>
    <h1 v-highlightInput:colorText.delayed="colorHighlight">CHANGE MY text color with argument pass through custom v-directive:arg="value" {{colorHighlight}} - with 1s delay time</h1>
  </div>
</template>

<script>
//@ts-check
export default {
  name: "app",
  data() {
    return {
      cool: "asdasz222d",
      email: "asd@asd.com",
      colorHighlight: "magenta"
    };
  },
  directives: {
    "local-highlight": {
      componentUpdated(el, binding, vnode) {
        let delayTime = 0;
        if (binding.modifiers["delayedx"]) {
          delayTime = 2000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let curColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              curColor === secondColor
                ? (curColor = mainColor)
                : (curColor = secondColor);
              if (binding.arg === "colorText") {
                el.style.color = curColor;
              } else {
                el.style.backgroundColor = curColor;
              }
            }, binding.value.delay);
          }, delayTime);
        } else {
          setTimeout(() => {
            if (binding.arg == "colorText") {
              el.style.color = binding.value.mainColor;
            } else {
              el.style.backgroundColor = binding.value.mainColor;
            }
          }, delayTime);
        }
      }
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
