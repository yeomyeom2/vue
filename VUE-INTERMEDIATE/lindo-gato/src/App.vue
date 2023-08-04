<template>
  <div id="app" :style="this.appBg">
    <img alt="" :src="this.imgUrl">
    <div class="side-btn">
      <button type="button" class="btn-refresh" @click="refresh"></button>
      <a :href="this.imgUrl" download class="btn-download" @click="imgDownload"></a>
      <!-- <button type="button" class="btn-download" @click="imgDownload"></button> -->
    </div>
    <div class="center-btn">
      <button type="button" class="btn-audio" @click="audioPlay()">Meow ~~~</button>
      <button type="button" class="btn-mute" @click="audioMute()">Mute {{mute.text}}</button>
      <br>
      <button type="button" class="btn-prev" @click="slidePrev()" v-show="this.slideIndex >= 1">Prev</button>
      <button type="button" class="btn-next" @click="slideNext()">Next</button>
    </div>
    <div class="loading" v-show="isLoading"><img src="./assets/loading.png" alt=""></div>
  </div>
</template>

<script>
import axios from 'axios'
import ColorThief from 'colorthief'

export default {
  name: 'App',
  data: function (){
    return {
      imgAdrs: 'https://cataas.com',
      imgUrl: '',
      imgFile: '',
      imgColor: [],
      appBg: '',
      sound: 'https://www.w3schools.com/tags/horse.mp3',
      mute: {
        state: false,
        text: 'off'
      },
      isLoading: true,
      slideArr: [],
      slideBgcArr: [],
      slideIndex: 0
    }
  },
  created: function() {
    this.callAPI();
  },
  methods: {
    callAPI: function() {
      this.isLoading = true;
      axios.get('https://cataas.com/cat?json=true')
      .then(response => {
        const imgType = response.data.mimetype;
        
        this.imgFile = response.data.url.replace('/cat/', '') + imgType.replace('image/', '.');
        this.imgUrl = this.imgAdrs + response.data.url + imgType.replace('image/', '.');

        this.getColor();

        this.slideArr.push(this.imgUrl);
        console.log(this.slideIndex, this.slideArr)
      })
      .catch(error => {
        console.log(error);
      })
    },
    refresh: function() {
      this.callAPI();
      this.slideIndex++;
    },
    async imgDownload() {
      const blob = await (await fetch(this.imgUrl)).blob();
        const url = URL.createObjectURL(blob);
        Object.assign(document.createElement('a'), { href: url, download: this.imgFile }).click();
        URL.revokeObjectURL(url);
    },
    getColor: function () {
      const colorThief = new ColorThief();
      const img = new Image();

      img.addEventListener('load', () => {
        this.imgColor = colorThief.getColor(img);
        this.appBg = 'background:rgb(' + this.imgColor[0] + ',' + this.imgColor[1] + ',' + this.imgColor[2] + ')';
        this.slideBgcArr.push(this.appBg);
        console.log(this.slideBgcArr)
        this.isLoading = !this.isLoading;
      });

      img.crossOrigin = 'Anonymous';
      img.src = this.imgUrl;
    },
    audioPlay: function () {
      const audio = new Audio(this.sound);
      if(!this.mute.state) audio.play();
    },
    audioMute: function () {
      this.mute.state = !this.mute.state;
      !this.mute.state
      ? this.mute.text = 'off'
      : this.mute.text = 'on'
    },
    slidePrev: function() {

      if(this.slideIndex >= 1) {
        this.slideIndex -= 1;
        this.imgUrl = this.slideArr[this.slideIndex];
        this.appBg = this.slideBgcArr[this.slideIndex];
      }else {
        console.log('처음이었다..')
      }

       
    },
    slideNext: function() {
      this.slideIndex += 1;
      this.imgUrl = this.slideArr[this.slideIndex];
      this.appBg = this.slideBgcArr[this.slideIndex];
      
      if(this.slideIndex == this.slideArr.length) {
        this.callAPI();
        console.log('마지막이었다..')
      }

    }
  }
}
</script>

<style>
#app {overflow: hidden;margin: 0;padding: 0;width: 100vw;height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {margin:0;padding:0;}
img {width:100%;height:100%;object-fit: contain;}
.side-btn  {position:absolute;bottom:25px;right:25px;}
.btn-refresh  {width: 42px;height: 42px;border-radius: 50%;border: 0;background: #32dcc8 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M4.553 3.694a8.333 8.333 0 0 1 12.272 11.09L14.167 10h2.5A6.667 6.667 0 0 0 5.383 5.19l-.83-1.496Zm10.895 12.612A8.333 8.333 0 0 1 3.175 5.216L5.833 10h-2.5a6.667 6.667 0 0 0 11.284 4.81l.83 1.496Z'/%3E%3C/g%3E%3C/svg%3E") 50% 50% no-repeat;background-size: 20px 20px;}
.btn-download  {display: block;width: 42px;height: 42px;border-radius: 50%;border: 0;background: #32dcc8 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23f03e3e' d='M12.6 1.5c2.43 0 4.4 2.027 4.4 4.865 0 5.676-6 8.919-8 10.135-2-1.216-8-4.46-8-10.135C1 3.527 3 1.5 5.4 1.5c1.488 0 2.8.81 3.6 1.622.8-.811 2.112-1.622 3.6-1.622z'/%3E%3C/svg%3E") 50% 50% no-repeat;background-size: 20px 20px;}

.center-btn {position: fixed;left: 0;bottom:10rem;width: 100%;text-align: center;}

.loading  {position: fixed;left: 0;top: 0;display: flex;justify-content:center;align-items:center;width: 100%;height: 100%;background-color:rgba(0,0,0,0.7);}
.loading img  {width: 100px;height: 100px;}
</style>
