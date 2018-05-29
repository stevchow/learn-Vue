<template>
  <div>
    <h1>{{flag}} {{nationality}}</h1>
    <button @click="changeNationality">Change Nationality</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag : "🇮🇩",
      nationality: "INA"
    };
  },
  methods: {
    changeNationality() {
      this.flag = "🌏"
      this.nationality = "WORLD";
    }
  }
};
</script>
