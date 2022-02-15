import Vue from "vue";
import VueRouter from "vue-router";

import { Module } from "@/components/system";
import DashBoard from "@/components/DashBoard.vue";

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

    ]
})
