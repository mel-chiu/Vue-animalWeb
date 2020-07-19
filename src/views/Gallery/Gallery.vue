<template>
  <div id="Gallery" v-if="galleryItems">
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
          @keyup.enter="findGalleryItems(topic)"
        />
        <button @click="findGalleryItems(topic)" id="enter-btn">enter</button>
      </div>
    </div>
    <div v-show="!loading">
      <Spinner/>
    </div>
    <div id="Gallery-grid" v-show="loading">
      <stack :column-min-width="300" :gutter-width="20" :gutter-height="20" monitor-images-loaded>
        <stack-item v-for="(item, id) in galleryItems" :key="id">
          <router-link :to="{name: 'DetailPage', params: {id: item.id}}" id="grid-img-link">
            <img :src="item.urls.small" :alt="item.alt_description" id="grid-img" />
            <div class="cover">
              <div class="gallery-grid-text">{{item.alt_description}}</div>
            </div>
          </router-link>
        </stack-item>
      </stack>
    </div>
  </div>
</template>
<script lang="ts">
import { Stack, StackItem } from "vue-stack-grid";
import { Component, Vue } from "vue-property-decorator";
import Spinner from '../../components/UI/Spinner/Spinner.vue'

@Component({
  components: {
    Stack,
    StackItem,
    Spinner
  }
})
export default class Gallery extends Vue {
  private topic = "";
  private welcomeGallery =
    "Do you want to discover other interesting topics? Try to enter your favourite topic below.";
  get galleryItems() {
    return this.$store.state.galleryItems;
  }
  get loading(){
      return this.$store.state.loading
  }
  public findGalleryItems(topic: string) {
    this.$store.dispatch("findGalleryItems", topic);
  }
  beforeMount() {
    this.findGalleryItems("cat-and-dog");
  }
}
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
  color:rgb(99, 83, 49);
}
#search > input:focus {
  outline: none !important;
}
#grid-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: -2px 15px 41px -10px rgba(0, 0, 0, 0.7);
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
  box-shadow: none !important;
}
.cover {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in;
  transform: translate(-50%, -50%);
  text-align: center;
}
#grid-img-link:hover #grid-img {
  opacity: 0.4;
}
#grid-img-link:hover .cover {
  opacity: 1;
}
.gallery-grid-text {
  color: #eee;
  font-size: 15px;
  padding: 18px;
  z-index: 20;
}
@media(max-width: 500px){
  #search > input {
     width: 120px;
  }
  #Gallery-welcome > h1 {
    font-size: 50px;
  }
  #Gallery-welcome > p {
    font-size: 18px;
  }
}
@media (max-width: 350px) {
  #search > input {
     width: 90px;
  }
  #Gallery-welcome > h1 {
    font-size: 40px;
  }
  #Gallery-welcome > p {
    font-size: 15px;
  }
}
</style>