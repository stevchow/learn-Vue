<template>
  <div @click="switchedOn">
    <mt-switch style="margin-top:1.6rem;"></mt-switch>
  </div>
</template>

<script>
export default {
  //using value as props and input for $emit name here because -> we use v-model in our parent.
  //e.g ->  v-model="dataValue" is shorthand for :value="dataValue" @input="dataValue = $event.target.value"
  props: ["value"],
  methods: {
    switchedOn() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style scoped>
</style>
