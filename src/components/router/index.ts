import Vue from 'vue';
import Router from 'vue-router';
import Home from '../../views/Home/Home.vue';
import Gallery from '../../views/Gallery/Gallery.vue';
import DetailPage from '../../views/DetailPage/DetailPage.vue';
import RandomPage from '../../views/RandomPage/RandomPage.vue';

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
            path:'/detail/:id',
            name:'DetailPage',
            props:true,
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