<template>
  <div id="Showcase">
    <h1>Especially for you</h1>
    <p>Which one is your favourite ?</p>
    <button
      type="submit"
      :class="{active: activeBtn === 'btnCat'}"
      @click.prevent="findPhoto('cat')"
      @click="activeBtn = 'btnCat'"
    >Cat</button>
    <button
      type="submit"
      :class="{active: activeBtn === 'btnDog'}"
      @click.prevent="findPhoto('dog')"
      @click="activeBtn = 'btnDog'"
    >Dog</button>
    <button
      type="submit"
      :class="{active: activeBtn === 'btnBoth'}"
      @click.prevent="findPhoto('cat-and-dog')"
      @click="activeBtn = 'btnBoth'"
    >Both</button>

    <div class="pic-row">
      <stack :column-min-width="300" :gutter-width="15" :gutter-height="15" monitor-images-loaded>
        <stack-item v-for="(image, id) in images" :key="id" style="transition: transform 300ms">
          <router-link :to="{name: 'DetailPage', params: {id: image.id}}">
            <img :src="image.urls.small" :alt="image.alt_description" />
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
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: "Showcase",

  data() {
    return {
      images: [] as Array<object>,
      activeBtn: "" as string
    };
  },

  components: {
    Stack,
    StackItem
  },
  computed:{
   ...mapGetters([
      'getImages']),
  },
  methods: {
   
    findPhoto(topic?: string) {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=10&page=1&order_by=oldest&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    },
    showPhoto(): void {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=cat&per_page=10&page=1&order_by=oldest&client_id=${process.env.VUE_APP_MYVUE}`
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
    this.showPhoto();
  }
});
</script>
<style scoped>
#Showcase {
  text-align: center;
  color: #eee;
  font-size: 2em;
  overflow-x: hidden;
  overflow-wrap: hidden;
}
.pic-row {
  display: flex;
  flex-direction: row;
}
#Showcase > h1 {
  font-family: "Cantarell", sans-serif;
}
img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
img:hover{
  width: 90%;
  box-shadow: 0px 8px 23px -2px rgba(238, 238, 238, 0.8);
}
#Showcase > button {
  background-color: rgb(134, 122, 95);
  border: 1px solid rgb(53, 43, 11);
  width: 100px;
  border-radius: 8px;
  color: #eee;
  font-size: 20px;
  padding: 4px;
  margin: 0 3px 20px 3px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
#Showcase > button:focus {
  outline: none !important;
  outline-offset: none !important;
}
#Showcase > button:hover {
  background-color: rgb(36, 32, 25);
}
.active {
  background-color: rgb(36, 32, 25) !important;
}
</style>