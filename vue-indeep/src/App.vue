<template>
  <div class="animate">
    <h1>Hello There</h1>
    <hr>
    <button class="btn btn-primary" @click="show = !show">Alert</button>
    <transition name="fade">
      <div class="alert alert-danger" v-if="show">Error! Please Contact administrator</div>
    </transition>
    <transition name="slide">
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
  transition: opacity 1s;
  opacity: 0;
}

/*transition name 'slide'*/
.slide-enter {
  /* transform: translateY(50px); */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
