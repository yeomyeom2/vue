<template>
    <div class="wrap-input">
       <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
       <button type="button" v-on:click="addTodo">Add</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo: function() { //저장
            if(this.newTodoItem !== '') { //값이 있을 때만 실행
                var obj = {complete: false, item: this.newTodoItem};
                // localStorage.setItem(this.newTodoItem, this.newTodoItem);
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj)); //JSON.stringify: object를 string으로 변환
                this.clearInput();
            }
        },
        clearInput: function() { //지우기
            this.newTodoItem = '';
        }
    }
}
</script>

<style>

</style>