import axios from 'axios';
import { Action, ActionTree} from 'vuex';


 const actions: ActionTree<any, any> = {
    async findPhoto({ commit }, topic?: string) {
        const images = await axios({ url: `https://api.unsplash.com/search/photos?query=${topic}&per_page=10&page=1&order_by=oldest&client_id=${process.env.VUE_APP_MYVUE}` })
        .then((res) => res.data)
        .catch((err) => console.log(err));
        commit("FIND_PHOTO", images)
    }
}

export default actions;