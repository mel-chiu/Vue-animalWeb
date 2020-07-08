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
        <stack-item v-for="(image, id) in images" :key="id">
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
      images: [] as Array<string>,
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
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${this.topic}&per_page=30&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    },
    showExample() {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=cat-and-dog&per_page=30&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    }
  },

  beforeMount() {
    this.showExample();
  },
  mounted() {
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
  border-radius: 3px;
}
#grid-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
#enter-btn {
  background-color: rgb(134, 122, 95);
  color: #eee;
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