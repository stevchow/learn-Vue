<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model="user.user1.email"
                                required>
                        <!-- v-model behind the scene -> :value="user.user1.email" @input="user.user1.email = $event.target.value" -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="user.user1.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                min="17"
                                max="99"
                                v-model="user.user1.age"
                                >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="user.user1.message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="user.user1.sendMailArr"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="user.user1.sendMailArr"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="user.user1.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="user.user1.gender"> Female
                    </label>
                </div>
            </div>
            <div class="row" style="margin-bottom: 1.6rem;">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option v-for="priority in priorities" :key="priority.id">{{priority}}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <p>single : </p>
                    <app-switch v-model="dataValue"></app-switch>{{dataValue}}
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{user.user1.email}} </p>
                        <p>Password: {{user.user1.password}}</p>
                        <p>Age: {{user.user1.age}}</p>
                        <p style="white-space:pre;">Message: {{user.user1.message}}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="(item, index) in user.user1.sendMailArr" :key="index">{{item}}</li>
                        </ul>
                        <p>Gender: {{user.user1.gender }}</p>
                        <p>Priority: {{selectedPriority}}</p>
                        <p>Switched: {{dataValue}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "./Switch";

export default {
  data() {
    return {
      user: {
        user1: {
          email: "",
          password: "",
          age: 22,
          message: "",
          sendMailArr: [],
          gender: "Male"
        }
      },
      dataValue: false,
      selectedPriority: "high",
      priorities: ["high", "medium", "low"],
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>
