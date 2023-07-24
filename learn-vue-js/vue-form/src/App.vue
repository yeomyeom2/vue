<template>
  <div>
    <form v-on:submit.prevent="loginForm" class="login-form" v-bind:class="this.loginCheck === false ? 'on' : ''">
      <div>
        <label for="username">id: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>

    <form v-on:submit.prevent="logoutForm" class="login-txt" v-bind:class="this.loginCheck === true ? 'on' : ''">
      <p>{{username}}님 로그인 완료.</p>
      <button type="submit">logout</button>
    </form>

    <app-tab></app-tab>
    <app-reward></app-reward>
  </div>
</template>

<script>
import axios from 'axios';

import AppTab from './components/AppTab.vue';
import AppReward from './components/AppReward.vue';

export default {
  data: function() {
    return {
      username: '',
      password: '',
      loginCheck: false
    }
  },
  methods: {
    loginForm: function() {
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      this.loginCheck = true;
      axios.post(url, data)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    logoutForm: function() {
      this.loginCheck = false;
      this.username = '';
    }
  },
  components: {
    'app-tab': AppTab,
    'app-reward': AppReward
  }

}
</script>

<style>
form  {display: none;}
form.on   {display: block;}
</style>