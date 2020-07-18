import { MutationTree } from 'vuex';
import { FIND_PHOTO, FIND_PROFILE, FIND_GALLERYITEMS, FIND_RANDOMPHOTO, TOGGLE_MENUSHOW, SORT_MOSTLIKES, SORT_FEWESTLIKES } from './mutation-types';
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
    [TOGGLE_MENUSHOW](state: State) {
        state.menushow = !state.menushow;
    },
    [SORT_MOSTLIKES](state: State) {
        if (state.images != undefined) {
            const mostLikes = state.images;
            mostLikes.sort((a, b) => (a as any).likes < (b as any).likes ? 1 : -1)
        }
    },
    [SORT_FEWESTLIKES](state: State) {
        if (state.images != undefined) {
            const fewestLikes = state.images;
            fewestLikes.sort((a, b) => (a as any).likes > (b as any).likes ? 1 : -1)
        }
    }
}

export default mutations;