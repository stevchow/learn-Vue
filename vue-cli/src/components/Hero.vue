<template>
  <div >
    <nationality-flag v-for="nat in 5" :key="nat" class="flag"></nationality-flag>
  </div>
</template>

<script>
import nationalityFlag from "./NationalityFlag.vue";
export default {
  components: {
    "nationality-flag": nationalityFlag
  }
};
</script>

<style scoped>
.flag {
  font-size: 10px;
  color: rgb(255, 171, 68);
  border: 1px solid saddlebrown;
}

div {
  border: 2px dotted cadetblue;
}
</style>

