import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
    menushow: false as boolean,
    images: [] as Array<object>,
    profile: [] as Array<object>,
    galleryItems: [] as Array<object>,
    randomPhoto: [] as Array<object>,
}
export type State = typeof state;

const getters = {
    menushow: (state: State) => (): boolean => {
        return state.menushow;
    },
    getImages: (state: State) => () => {
        return state.images;
    },
    getProfile: (state: State) => () => {
        return state.profile;
    },
    getGalleryItems: (state: State) => () => {
        return state.galleryItems;
    },
    getRandomPhoto: (state: State) => () => {
        return state.randomPhoto;
    }
}

export default new Vuex.Store({
    strict: true,
    state,
    getters,
    actions,
    mutations,
})