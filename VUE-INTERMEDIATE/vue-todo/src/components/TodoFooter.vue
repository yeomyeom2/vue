<template>
  <footer class="footer">
    <button type="button" class="clearAllBtn" v-on:click="clearTodo">Clear All</button>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
    // clearTodo: function() {
    //   // this.$emit('clearAll');
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>

<style scoped>
.clearAllBtn  {display: inline-block;height: 50px;}
</style>