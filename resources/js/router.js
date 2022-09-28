import { createWebHistory, createRouter } from "vue-router";
import home from './pages/home.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import dashboard from './pages/dashboard.vue';
import store from './store';
const routes = [
    {
    path : '/',
    name: 'Home',
    component : home
    },
    {
        path : '/login',
        name : 'Login',
        component : login,
        meta:{
            requiresAth:false
        }
    },
    {
        path : '/register',
        name: 'Register',
        component : register,
        meta:{
            requiresAth:false
        }
    },
    {    
        path : '/dashboard',
        name: 'Dashboard',
        component : dashboard,
        meta:{
            requiresAth:true
        }
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach((to,from)=>{
    if(to.meta.requiresAuth && store.getters.getToken == 0){
        return{ name:'login'}
    }
    if(to.meta.requiresAth == false && store.getters.getToken != 0){
        return { name :'Deshboard'}
    }
})

export default router;