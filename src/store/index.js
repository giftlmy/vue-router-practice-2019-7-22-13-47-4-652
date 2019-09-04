import axios from 'axios'
export default {
    strict: true,
    state: {
        todoList: [
            {status: 'completed', content: '吃饭'},
            {status: 'completed', content: '睡觉'},
            {status: 'completed', content: '打豆豆'}
        ],
        currentFilter: 'all'
    },
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    mutations: {
        handleCreateTodo:function(state,inputtingItem){
            state.todoList.push({
                status: 'active',
                content:inputtingItem
            })
        },
        handleToggleActive: function(state,index){
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        handleFilter: function(state,currentFilter){
           state.currentFilter = currentFilter;
        },
        initTodos: function(state,todos){
            state.todoList = todos;
        }

    },
    actions:{
        fetchTodos(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function(response){
                console.log(response);
               context.commit('initTodos',response.data);
            }).catch(function(error){
                console.log(error.response);
            });
           
        },
        createTodo(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                content: "lmy",
                status: "active"    
            }).then(function(response){
                context.dispatch('fetchTodos');
            }).catch(function(error){
                console.log(error.response);
            });
        },
        updateTodos(context){
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/112";
            axios.put(url,{
                id:112,
                content: "lmy",
                status: "active"    
            }).then(function(response){
                context.dispatch('createTodo');
            }).catch(function(error){
                console.log(error.response);
            });
        }

        
        
    }
} 