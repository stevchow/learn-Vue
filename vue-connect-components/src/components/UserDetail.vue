<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{gogopowerrangers}}</p>
    </div>
</template>

<script>
export default {
  props: ["gogopowerrangers"]
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
