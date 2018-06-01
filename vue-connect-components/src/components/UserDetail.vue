<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{reversePRanger()}}</p>
    </div>
</template>

<script>
export default {
  props: ["gogopowerrangers"],
  methods: {
    reversePRanger() {
      return this.gogopowerrangers
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
