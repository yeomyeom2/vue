<template>
    <ul class="list-todo">
       <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
            <input type="checkbox" v-on:click="toggleComplete">
            <div class="todo-txt">{{ todoItem }}</div>
            <button type="button" class="btn-del" v-on:click="removeTodo(todoItem, index)">X</button>
       </li>
    </ul>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    created: function() { //생성 되자마자 실행
        if(localStorage.length > 0) {
            for(var i=0 ; i < localStorage.length ; i++) {
                this.todoItems.push(localStorage.key(i));
            }

        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            // console.log(todoItem, index); //내장 index가 노출, 0부터 시작.
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1); //이걸 써야 x를 눌렀을 때 해당 아이템이 지워짐
        },
        toggleComplete: function() {
            
        }
    }
}
</script>

<style scope>
.list-todo  {width: 200px;margin: 0 auto;}
.list-todo>li   {display: flex;}
.list-todo .todo-txt {flex:1;}
.list-todo .btn-del {width: 20px;height: 20px;}
</style>