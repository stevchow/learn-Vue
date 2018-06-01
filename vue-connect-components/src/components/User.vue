<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        {{name}}
        <button @click="changeName">Change name</button>
        <p>{{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :gogopowerrangers="name" @resetingName="name = $event"
                :resetFnParent="resetName"
                :userAge="age"
                >

                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :userAge="age"
                @userAgeChanged="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "cuxrtuv",
      age: 99
    };
  },
  methods: {
    changeName() {
      this.name = "YOMAN";
    },
    resetName() {
      this.name = "cuxrtuv";
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
