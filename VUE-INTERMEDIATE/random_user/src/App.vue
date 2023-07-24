<template>
  <div id="app">
    <div class="user">
      <img :src="userData.picture.large" alt="">
      <p>Hi! My name is {{ userData.name.title }} {{ userData.name.first }}  {{ userData.name.last }}!</p>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  data: function() {
    return {
      userItem: [],
      userData: ''
    }
  },
  components: {
    
  },
  created: function() {
    axios.get('https://randomuser.me/api/')
    .then(response => {
      // console.log(this)
      this.userItem = response;
      // console.log(this.userItem.data.results[0])
      this.userData = this.userItem.data.results[0];
    })
    .catch(error => {
      console.log(error);
    });
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
