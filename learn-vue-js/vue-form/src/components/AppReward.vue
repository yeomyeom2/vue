<template>
  <div>
    티켓 개수 : {{ countTicket }}
    <button v-on:click="countTicketFunc">티켓 개수 증가</button><br>
    <button v-show="this.countTicket === 5" v-on:click="getRewardFunc">보상 받기</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            countTicket: 0
        }
    },
    methods: {
        countTicketFunc: function() {
            if(this.countTicket < 5) {
                this.countTicket++;
            }
        },
        getRewardFunc: function() {
            this.countTicket = 0;
        }
    }
}
</script>

<style>

</style>