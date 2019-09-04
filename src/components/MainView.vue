<template>

   <div id="app">
       <div><button>返回</button></div>
        <h1> welcome to {{username}} </h1>
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

}
</script>

<style>

</style>