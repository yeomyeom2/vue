<template>
  <div>
     <transition-group name="list" tag="ul" class="list-todo">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
            <input type="checkbox" v-bind:class="{checkBntCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})">
            <div v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</div>
            <button class="btn-del" v-on:click="removeTodo({todoItem, index})"></button>
        </li>
     </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),

        // removeTodo: function(todoItem, index) {
        //     // this.$emit('removeItem', todoItem, index);
        //     this.$store.commit('removeOneItem', {todoItem, index});

        //     // console.log(todoItem, index);
        //     // console.log(todoItem)
        // },
        // toggleComplete: function(todoItem, index) {
        //     // this.$emit('toggleItem', todoItem, index);
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // }
    },
    computed: {
        // todoItems() {
        //     return this.$store.getters.storedTodoItems;
        // }
        ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style scoped>
ul  {list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
}
.list-todo  {
    margin-top: 20px;
}
.list-todo>li  {
    position: relative;
    display: flex;
    align-items: center;
    height: 48px;
}
.btn-del    {
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    border: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath fill='%231A2B3B' fill-rule='nonzero' d='M12 10.445 17.445 5 19 6.555 13.555 12 19 17.445 17.445 19 12 13.555 6.555 19 5 17.445 10.445 12 5 6.555 6.555 5z'/%3E%3C/g%3E%3C/svg%3E") 50% 50% no-repeat;
    background-size: 14px 14px;
    transform:translateY(-50%);
}
.textCompleted  {opacity: 0.5;text-decoration: line-through;}

/* List item transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>