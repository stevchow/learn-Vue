<template>
  <div>
    <NationalityFlag v-for="nat in 5" :key="nat"></NationalityFlag>
  </div>
</template>

<script>
import NationalityFlag from "./NationalityFlag.vue";
export default {
  components: {
    NationalityFlag
  }
};
</script>
