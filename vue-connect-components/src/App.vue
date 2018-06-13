<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
                <quote-gen></quote-gen>
            </div>
        </div>
    </div>
</template>

<script>
import User from "./components/User.vue";
import QuoteGen from "./components/QuoteGen.vue";

export default {
  components: {
    appUser: User,
    QuoteGen
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
