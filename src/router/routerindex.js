import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../components/Welcome.vue'
import MainView from '../components/MainView.vue'
import User from '../components/User.vue'
// import CounterGroup from '../components/CounterGroup.vue'
// import User from '../components/User.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: "/weclome/:username",
        //     name: "Welcome",
        //     component: Welcome,
        //     props: true,
        //     children: [
        //         {
        //             path: 'counter',
        //             component: CounterGroup
        //         }
        //     ]
        // },
        // {
        //     path: 'TodoList',
        //     redirect: '/'
        // },
        {
            path: '/',
            name: "Welcome",
            component: Welcome
        },
        {
            path: '/MainView/:username',
            name: "main",
            component: MainView,
            props: true,
        },
        {
            path: '/MyView/:username',
            name: "user",
            component: User,
            props: true,
        }
    ]
})
