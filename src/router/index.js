import Vue from "vue";
import VueRouter from "vue-router";

import { Module } from "@/views/system";
import DashBoard from "@/views/DashBoard";
import Login from '@/views/Login';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/Module",
            name: 'Module',
            component: Module
        }
        ,{
            path: "/DashBoard",
            name: "DashBoard",
            component: DashBoard
        }
        ,{
            path: "/Login",
            name: "Login",
            component: Login
        }
    ]
})

