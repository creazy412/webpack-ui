import { Vue } from "vue";
// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 2. 手动安装 VueRouter
Vue.use(VueRouter);

// 导入 Mint-UI
import { MintUI } from 'mint-ui';
// 这里可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 将 MintUI 安装到 vue 中
Vue.use(MintUI);



// 导入 app 组件
import { app } from "./App.vue";

// 导入 自定义路由模块
import { router } from "./router.js";