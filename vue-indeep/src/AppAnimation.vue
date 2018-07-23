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
    <hr>
    <hr>
    <button class="btn btn-warning" @click="addItem">Add item</button>
    <br><br>
    <ul class="list-group">
      <transition-group name="slide">
        <li class="list-group-item" 
        v-for="(num, index) in nums" 
        :key="num" 
        style="cursor:pointer" 
        @click="removeItem(index)">{{num}}</li>
      </transition-group>
    </ul>
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
      toggleComponent: "app-success",
      nums: [1, 2, 3, 0]
    };
  },
  methods: {
    addItem() {
      let post = Math.floor(Math.random() * this.nums.length);
      this.nums.splice(post, 0, post);
    },
    removeItem(index) {
      this.nums.splice(index, 1);
    }
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
  position: absolute; /*for smooth leaving, for transition-group on list*/
}

.slide-move {
  transition: all 1s;
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
