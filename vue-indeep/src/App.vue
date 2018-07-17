<template>
  <div class="animate">
    <h1>Hello There</h1>
    <hr>
    <button class="btn btn-primary" @click="show = !show">Alert</button>
    <transition name="fade">
      <div class="alert alert-danger" v-if="show">Error! Please Contact administrator</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
<style scoped>
.animate {
  width: 300px;
  margin: 2em auto;
}
.alert {
  margin-top: 10px;
}

/*transition name 'fade'*/
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
