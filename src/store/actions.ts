import axios from 'axios';
import { ActionTree } from 'vuex';


const actions: ActionTree<any, any> = {
    findPhoto({ commit }, topic: string) {
        axios
            .get(`https://api.unsplash.com/search/photos?query=${topic}&per_page=10&page=1&order_by=oldest&client_id=${process.env.VUE_APP_MYVUE}`)
            .then((res) => {
                commit("FIND_PHOTO", res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    },
    findProfile({ commit }, id: string) {
        axios
            .get("https://api.unsplash.com/photos/" + id, {
                headers: {
                    Authorization: `Client-ID ${process.env.VUE_APP_MYVUE}`
                }
            })
            .then((res) => {
                commit("FIND_PROFILE", res.data)
                commit("CLOSE_LOADING")
            })
            .catch(err => {
                console.log(err)
            })
    },
    findGalleryItems({ commit }, topic: string) {
        axios
            .get(
                `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&client_id=${process.env.VUE_APP_MYVUE}`
            )
            .then((res) => {
                commit("FIND_GALLERYITEMS", res.data.results)
                commit("CLOSE_LOADING")
            })
            .catch(err => {
                console.log(err)
            })
    },
    findRandomPhoto({ commit }) {
        axios
            .get("https://api.unsplash.com/photos/random/?query=cat-and-dog", {
                headers: {
                    Authorization: `Client-ID ${process.env.VUE_APP_MYVUE}`
                }
            })
            .then((res) => {
                commit("FIND_RANDOMPHOTO", res.data)
                commit("CLOSE_LOADING")
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export default actions;