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
    <div id="Gallery-grid" >
      <stack :column-min-width="300" :gutter-width="20" :gutter-height="20" monitor-images-loaded>
        <stack-item v-for="(item, id) in galleryItems" :key="id">
          <router-link :to="{name: 'DetailPage', params: {id: item.id}}">
            <img :src="item.urls.small" :alt="item.alt_description" id="grid-img" />
          </router-link>
        </stack-item>
      </stack>
    </div>
  </div>
</template>
<script lang="ts">
import { Stack, StackItem } from "vue-stack-grid";
import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {
    Stack,
    StackItem
  }
})
export default class Gallery extends Vue{
  private topic = ""
  private welcomeGallery = "Do you want to discover other interesting topics? Try to enter your favourite topic below." 
  get galleryItems(){
      return this.$store.state.galleryItems;
    }
  public findGalleryItems(topic: string){
      this.$store.dispatch('findGalleryItems', topic)
    }
  beforeMount(){
    this.findGalleryItems('cat-and-dog');
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