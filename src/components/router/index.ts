import Vue from 'vue';
import Router from 'vue-router';
import Home from '../Home/Home.vue';
import Gallery from '../Gallery/Gallery.vue';
import DetailPage from '../DetailPage/DetailPage.vue';
import RandomPage from '../RandomPage/RandomPage.vue';

Vue.use(Router);

export default new Router ({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/gallery',
            name:'Gallery',
            component:Gallery
        },
        {
            path:'/detail',
            name:'DetailPage',
            component:DetailPage
        },
        {
            path:'/random',
            name:'RandomPage',
            component:RandomPage
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})