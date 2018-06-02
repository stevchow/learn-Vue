<template>
  <div>
    <div class="title">
      <slot name="titlez"></slot>
      <p>zihxsd</p>
    </div>
    <div>
      <slot name="content"></slot>
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
  color: rgb(255, 154, 117);
  text-transform: uppercase;
}
</style>


<script>
export default {
  // props: {
  //   quote: String
  // }
};
</script>


