<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{reversePRanger()}}</p>
        <button @click="resetName">reset Name</button>
        <button title="with no custom event, but using parent function that executed in child component using props." @click="resetFnParent()">resetName (Parents function)</button>
        <p>Age : {{userAge}}</p>
    </div>
</template>

<script>
export default {
  props: {
    gogopowerrangers: {
      type: String
    },
    resetFnParent: Function,
    userAge: Number
  },
  methods: {
    reversePRanger() {
      return this.gogopowerrangers
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.gogopowerrangers = "cuxrtuv";
      this.$emit("resetingName", this.gogopowerrangers);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
