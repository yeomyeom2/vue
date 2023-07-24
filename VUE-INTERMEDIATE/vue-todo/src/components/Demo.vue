<template>
  <div id="root">
    <div>{{ originalPrice }}</div>
    <div>{{ doublePrice }}</div>
    <div>{{ triplePrice }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // }
    }
}
</script>

<style>

</style>