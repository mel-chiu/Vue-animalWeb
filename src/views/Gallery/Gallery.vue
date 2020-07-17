<template>
  <div id="Gallery">
    <div id="Gallery-content">
      <div id="Gallery-welcome">
        <h1>Discovery</h1>
        <p>{{welcomeGallery}}</p>
      </div>

      <div id="search">
        <input
          type="text"
          v-model="topic"
          placeholder="For example: rabbit"
          @keyup.enter="showPhoto(topic)"
        />
        <button @click="showPhoto(topic)" id="enter-btn">enter</button>
      </div>
    </div>
    <div id="Gallery-grid">
      <stack :column-min-width="300" :gutter-width="20" :gutter-height="20" monitor-images-loaded>
        <stack-item v-for="(image, id) in galleryItems" :key="id">
          <router-link :to="{name: 'DetailPage', params: {id: image.id}}">
            <img :src="image.urls.small" :alt="image.alt_description" id="grid-img" />
          </router-link>
        </stack-item>
      </stack>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { Stack, StackItem } from "vue-stack-grid";

export default Vue.extend({
  name: "Gallery",
  data() {
    return {
      galleryItems: [] as Array<object>,
      topic: "" as string,
      welcomeGallery: "Do you want to discover other interesting topics? Try to enter your favourite topic below." as string
    };
  },
  components: {
    Stack,
    StackItem
  },
  methods: {
    showPhoto() {
      this.galleryItems = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${this.topic}&per_page=30&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.galleryItems = response.data.results;
        })
        .catch(() => {
          this.galleryItems = [];
        });
    },
    showExample() {
      this.galleryItems = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=cat-and-dog&per_page=30&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.galleryItems = response.data.results;
        })
        .catch(() => {
          this.galleryItems = [];
        });
    }
  },

  beforeMount() {
    this.showExample();
  }
});
</script>
<style scoped>
#Gallery {
  color: #eee;
}
#Gallery-content {
  position: relative;
  padding: 60px;
  margin: 0px 20px;
}
#Gallery-welcome > h1 {
  font-size: 60px;
}
#Gallery-welcome > p {
  font-size: 20px;
}
#search > input {
  width: 30%;
  height: 20px;
  border-radius: 8px 0 0 8px;
  background-color: #eee;
  border: 1.5px solid rgb(134, 122, 95);
  padding: 5px;
  
}
#search > input:focus{
    outline: none !important;
}
#grid-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
#enter-btn {
  box-sizing: border-box;
  background-color: rgb(134, 122, 95);
  color: #eee;
  border-radius: 0 8px 8px 0;
  padding: 8px;
  box-shadow: burlywood;
  border: 0.2px solid rgb(134, 122, 95);
}
#enter-btn:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none  !important;
}
@media (max-width: 500px) {
  #search > input {
    width: 120px;
  }
  #Gallery-welcome > h1 {
    font-size: 50px;
  }
}
</style>