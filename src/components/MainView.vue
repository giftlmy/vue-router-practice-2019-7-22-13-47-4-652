<template>

   <div id="app">
        <div class='back'>
           <button @click="backmain">返回登录</button>
           <button @click="myview">我的页面</button>
        </div>
        <div class='username'><h1>welcome  {{username}} 同学 </h1></div>
      
      
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        
        <CreateForm/>
        <TodoList/>
        <TodoListFilter/>
    </div>
  
</template>

<script>
    import CreateForm from './CreateForm.vue'
    import TodoList from './TodoList.vue'
    import TodoListFilter from './TodoListFilter.vue'
export default {
    props:['username'],
    components: {
            CreateForm,
            TodoList,
            TodoListFilter,
    },
    methods: {
        backmain: function() {
            if(confirm('确实要返回吗?')){
                this.$router.push("/");
            }
        },
        myview: function() {
            this.$router.push("/MyView/"+this.username);
             

        }
    }

}
</script>

<style>
.back {
     text-align: left;

}
.uername {
    text-align: right;
}
</style>