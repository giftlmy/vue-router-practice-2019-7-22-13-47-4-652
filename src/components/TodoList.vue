<template>
    <ul class="items">
        <template v-for="(item,index) in filteredTodoList">
            <li :key="index" :class="item.status">
                <input name="status-toggle" :checked="item.status === 'completed'" type="checkbox"
                       @change="handleToggleActive(index)">
                <a href="" class="content">{{item.content}}</a>
            </li>
        </template>
    </ul>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "todo-list",
        computed: {
            filteredTodoList: function () {
                return this.$store.getters.filteredTodoList;
            }
        },
        methods: {
            handleToggleActive: function (index) {
               this.$store.commit("handleToggleActive",index);
               // this.$store.state.todoList[index].status = this.$store.state.todoList[index].status === 'completed' ? 'active' : 'completed';
            }
        }
    }
</script>

<style scoped>

</style>
