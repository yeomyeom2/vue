<template>
  <div>
    <div class="tab-btn">
        <button type="button" class="tab-1" v-on:click="tabFunc">Tab 1</button>
        <button type="button" class="tab-2" v-on:click="tabFunc">Tab 2</button>
        <button type="button" class="tab-3" v-on:click="tabFunc">Tab 3</button>
    </div>
    <div class="tab-cont">
        <div class="tab-1" v-show="tabIndex == 1">Cont 1</div>
        <div class="tab-2" v-show="tabIndex == 2">Cont 2</div>
        <div class="tab-3" v-show="tabIndex == 3">Cont 3</div>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            tabIndex: 1
        }
    },
    methods: {
        tabFunc: function(e) {
            var tabClass = e.target.className;
            this.tabIndex = tabClass.charAt(tabClass.length - 1);
        }
    }
}
</script>

<style>

</style>