<template>
  <div class="container">
    <div class="jumbotron">
      <button @click="selectedComponent='appQuote'">new Quote</button>
      <button @click="selectedComponent='appAuthor'">new Author</button>
      <button @click="selectedComponent='appNowDate'">new Date</button>
      <p>{{selectedComponent}}</p>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <!-- <app-quote quote="Life starts where fears end!"></app-quote> -->

        <!-- dynamic render component, very fcking usefull for SPA, just set a flag variable and change it base on event and <component></component> tag will render for you-->

        <!-- keep-alive caching the component, keep them alive not destroyed them, make web page faster -->
        <div>
          <button @click="selectedColorComponent ='appBlueTemp'">Blue</button>
          <button @click="selectedColorComponent ='appOrangeTemp'">Orange</button>
          <button @click="selectedColorComponent ='appGreenTemp'">Green</button>
        </div>
        <keep-alive>
          <component :is="selectedColorComponent">
            <p>Default render</p>
          </component>
        </keep-alive>
        
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default render</p>
          </component>
        </keep-alive>
        
        <!-- <app-quote>
          <h3 slot="title">{{quoteHeader}}</h3> -->
          <!-- <p slot="placeholder">Ready 3,2,1! GO!</p> -->
          <!-- <p>Most of the time, All things you worry about will not happen</p>
          <p style="text-align:right;">~ somebody</p> 
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import appQuote from "./components/quote";
import appAuthor from "./components/author";
import appNowDate from "./components/date";
import appBlueTemp from "./components/colorTemp/blueTmp";
import appOrangeTemp from "./components/colorTemp/orangeTmp";
import appGreenTemp from "./components/colorTemp/greenTmp";

export default {
  data: function() {
    return {
      quoteHeader: "Have a good day!",
      selectedComponent: "appQuote",
      selectedColorComponent: "appBlueTemp"
    };
  },
  components: {
    appQuote,
    appAuthor,
    appNowDate,
    appGreenTemp,
    appOrangeTemp,
    appBlueTemp
  }
};
</script>

<style>
div button {
  padding: 1rem;
  margin-bottom: 1.4rem;
}
</style>
