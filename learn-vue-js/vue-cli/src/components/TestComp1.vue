<template>
  <div>
    Component 1<br>
    <button v-on:click="sendProps">Click !</button>
  </div>
</template>

<script>
export default {
    methods: {
        sendProps: function() {
            this.$emit('sendPropsEvent');
        }
    }
}
</script>

<style>

</style>