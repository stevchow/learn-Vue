<template>
  <div>
    <p>{{quote}}</p>
  </div>
</template>

<style scoped>
div {
  border: 1px solid salmon;
  text-align: center;
  padding: 3rem;
  margin: 2rem auto;
  box-shadow: 1px 1px 7px 1px gray;
}
</style>


<script>
export default {
  props: {
    quote: String
  }
};
</script>


