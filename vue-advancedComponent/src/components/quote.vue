<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span><slot name="placeholder">Loading ...</slot></span>
    </div>
    <div>
      <!-- default slow because we not define both name="" and slot="" -->
      <slot></slot>
    </div>
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

h3 {
  color: rgb(255, 78, 78);
}

.title {
  color: rgb(143, 128, 122);
  text-transform: capitalize;
}
</style>


<script>
export default {
  // props: {
  //   quote: String
  // }
};
</script>


