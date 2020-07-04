<template>
  <div id="Showcase">
    <h1>Especially for you</h1>
    <p>What do you like?</p>
    <button type="submit" class="btn" @click.prevent="findPhoto('Cat')">Cat</button>
    <button type="submit" class="btn" @click.prevent="findPhoto('Dog')">Dog</button>
    <button type="submit" class="btn" @click.prevent="findPhoto('Cat and Dog')">Both</button>
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
//@ts-ignore
 import { Stack, StackItem } from "vue-stack-grid";

export default Vue.extend({
  name: "Showcase",

  data() {
    return {
      images: [] as Array<string>,
    };
  },

  components: {
    Stack,
    StackItem
  },
  methods: {
    findPhoto(topic: string) {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=10&client_id=${process.env.VUE_APP_MYVUE}`
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    }
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
  border-radius: 15px;
}
.btn{
  background-color: rgb(134, 122, 95);
  border: 1px solid rgb(53, 43, 11);
  width: 100px;
  border-radius: 8px;
  color: #eee;
  font-size: 20px;
  padding: 4px;
  margin: 0 3px 20px 3px;
  cursor: pointer;
}
.btn:hover{
  background-color: rgb(36, 32, 25);
}
</style>