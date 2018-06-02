<template>
  <div class="container">
    <div class="jumbotron">
      <p>asdasd</p>
      <p>asdasda</p>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <!-- <app-quote quote="Life starts where fears end!"></app-quote> -->
        <app-quote>
          <h3>{{quoteHeader}}</h3>
          <p>Most of the time, All things you worry about will not happen</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/quote";
export default {
  data: function(){
    return {
      quoteHeader: "Have a good day!"
    }
  },
  components: {
    appQuote: Quote
  }
};
</script>

<style>
</style>
