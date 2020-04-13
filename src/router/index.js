import Vue from 'vue'
import VueRouter from 'vue-router'
/*Vant UI */
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import { ImagePreview } from 'vant';


/*==========*/

import UserInfo from "../components/UserInfo";
import Experience from "../components/Experience";
import Me from "../components/Me";

/*ElementUI*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/*==========*/

Vue.use(Lazyload);
Vue.use(ImagePreview);
Vue.use(VueRouter);
Vue.use(Vant);
const routes = [
  {
    path: '/',
    name: 'UserInfo',
    component: UserInfo,
    redirect:"/me"
  },{
    path: '/experience',
    name: 'Experience',
    component: Experience
  },{
    path: '/me',
    name: 'Me',
    component: Me
  }

];

const router = new VueRouter({
  routes
});

export default router
