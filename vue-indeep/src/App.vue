<template>
  <div class="animate">
    <h1>Hello There</h1>
    <hr>
       <transition name="slide" type="animation" mode="out-in" appear>
        <div class="alert alert-danger" v-if="show" key="danger">Error! Please Contact administrator</div>
        <div class="alert alert-success" v-else key="success" >Welcome</div>
      </transition>
    <hr>
    <select v-model="animateCSS" class="form-control">
      <option value="animated hinge">hinge</option>
      <option value="animated rollIn">roll in</option>
      <option value="animated rollOut">roll out</option>
      <option value="animated swing">swing</option>
    </select>
    <hr>
    <button class="btn btn-primary" @click="show = !show">Alert</button>
    <transition name="fade" appear>
      <div class="alert alert-danger" v-if="show">Error! Please Contact administrator</div>
    </transition>
    <transition 
        :enter-active-class="animateCSS"
        leave-active-class="animated zoomOutDown"
        appear
    >
      <div class="alert alert-danger" v-if="show">Error! Please Contact administrator</div>
    </transition>
    <transition 
        enter-active-class="animated slideInDown"
        :leave-active-class="animateCSS"
        appear
    >
      <div class="alert alert-danger" v-if="show">Error! Please Contact administrator</div>
    </transition>
    <hr>
    <button class="btn btn-info" @click="toggleComponent === 'app-success' ? toggleComponent = 'app-alert' : toggleComponent = 'app-success'">Toggle Component with transition</button>
    <transition name="fade" mode="out-in">
    <component :is="toggleComponent"></component>
    </transition>
  </div>
</template>
<script>
import AppSuccess from "./components/Success";
import AppAlert from "./components/Alert";
export default {
  data() {
    return {
      show: false,
      animateCSS: "animated pulse",
      toggleComponent: "app-success"
    };
  },
  components: {
    AppSuccess,
    AppAlert
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
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
    /* opacity: 0; */
  }
  to {
    transform: translateY(0px);
    /* opacity: 1; */
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
    /* opacity: 1; */
  }
  to {
    transform: translateY(20px);
    /* opacity: 0; */
  }
}
</style>
