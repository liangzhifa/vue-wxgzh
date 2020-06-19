import Vue from 'vue'
import VueRouter from 'vue-router'
/*Vant UI */
import Vant, {ImagePreview, Lazyload, Uploader} from 'vant';
import 'vant/lib/index.css';
import UserInfo from "../components/UserInfo";
import Experience from "../components/Experience";
import Me from "../components/Me";
/*ElementUI*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AnimeImg from "../components/AnimeImg";
import Main from "../views/Main";


/*==========*/
Vue.use(ElementUI);
/*==========*/

Vue.use(Lazyload);
Vue.use(ImagePreview);
Vue.use(VueRouter);
Vue.use(Vant);
Vue.use(Uploader);
const routes = [
  {
    path: '/',
    name: 'main',
    redirect: "/img",
    component: Main,
    children:[
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: UserInfo,
        redirect: "/me"
      }, {
        path: '/experience',
        name: 'Experience',
        component: Experience
      }, {
        path: '/me',
        name: 'Me',
        component: Me
      }
    ]
  },
  {
    path: '/img',
    name: 'AnimeImg',
    component: AnimeImg
  }
];

const router = new VueRouter({
    routes
});

export default router
