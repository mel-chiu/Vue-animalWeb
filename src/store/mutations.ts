import { MutationTree } from 'vuex';
import { FIND_PHOTO, CHANGE_LOADING_STATUS, FIND_PROFILE, FIND_GALLERYITEMS, FIND_RANDOMPHOTO, TOGGLE_MENUSHOW } from './mutation-types';
import { State } from './index';


const mutations: MutationTree<State> = {
    [FIND_PHOTO](state: State, payload) {
        state.images = payload;
    },
    [FIND_PROFILE](state: State, payload) {
        state.profile = payload;
    },
    [FIND_GALLERYITEMS](state: State, payload) {
        state.galleryItems = payload;
    },
    [FIND_RANDOMPHOTO](state: State, payload) {
        state.randomPhoto = payload;
    },
    [TOGGLE_MENUSHOW](state: State){
        state.menushow = !state.menushow;
    }
}

export default mutations;