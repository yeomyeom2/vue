<template>
  <div class="input-box">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo">Add</button>
    <span class="add-container"></span>

      <!-- use the modal component, pass in the prop -->
      <ModalPop v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">경고 !!!  <button type="button" class="btn-close" @click="showModal = false"><img src="https://hive-fn.qpyou.cn/markup/img/2018/00/btn_close.png" alt=""></button></h3>
        <p slot="body">내용을 입력하세요.</p>
        <footer slot="footer">&copy; 2023 Yeomyeom2 Corp.</footer>
       
      </ModalPop>
  </div>
</template>

<script>
import ModalPop from './common/ModalPop.vue'

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo: function() { //저장
            if(this.newTodoItem !== '') { //값이 있을 때만 실행
                // this.$emit('이벤트 이름', 인자1, 인자2, ...);
                // this.$emit('addTodoItem', this.newTodoItem);
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() { //지우기
            this.newTodoItem = '';
        }
    },
    components: {
        ModalPop: ModalPop
    }
}
</script>

<style scoped>
.input-box  {
    display: flex;
    justify-content: center;
}

button  {
    display: block;
    margin-left: 10px;
    padding: 0 10px;
    border-radius: 10px;
    /* border: 2px solid #1a2b3b; */
    border: 0;
    background-color: #fff;
    color: #1a2b3b;
    font-size: 14px;
    font-weight: bold;
    line-height: 48px;
    cursor: pointer;
    }

    .btn-close  {display: inline-block;width: 30px;height: 30px;border: 0;background-color: #000;}
    .btn-close img  {display: block;width: 100%;}
</style>