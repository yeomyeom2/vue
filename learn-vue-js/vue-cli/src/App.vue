<template>
  <div>
    <!-- {{ str }} -->
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
    <app-test-1 v-on:sendPropsEvent="testPropsEvent"></app-test-1>
    <app-test-2 v-bind:testProps="strTest"></app-test-2>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import TestComp1 from './components/TestComp1.vue';
import TestComp2 from './components/TestComp2.vue';

// new Vue({
//   data: {
//     str: 'H O L A !'
//   }
// })

export default {
  data: function() {
    return {
      str: 'Header',
      strTest: ''
    }
  },
  components: {
    'app-header': AppHeader,
    'app-test-1': TestComp1,
    'app-test-2': TestComp2
  },
  methods: {
    renewStr: function() {
      this.str = 'H O L A !'
    },
    testPropsEvent: function() {
      this.strTest = '냥냥냥냥'
    }
  }
}
</script>

<style>

</style>