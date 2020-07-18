<template>
  <div id="Showcase">
    <h1>Especially for you</h1>
    <p>Which one is your favourite ?</p>
    <button
      v-for="optionBtn in optionBtns"
      :key="optionBtn.key"
      type="submit"
      :class="{active: activeBtn === optionBtn.name}"
      @click.prevent="findPhoto(optionBtn.topic)"
      @click="activeBtn = optionBtn.name"
    >{{optionBtn.text}}</button>

    <div id="sort-buttons">
      <button
        id="mostLikesBtn"
        :class="{sorting: activeSortBtn === 'mostLikes'}"
        @click.prevent="sortMostLikes"
        @click="activeSortBtn = 'mostLikes'"
      >Most Likes</button>
      <button
        id="fewestLikesBtn"
        :class="{sorting: activeSortBtn === 'fewestLikes'}"
        @click.prevent="sortFewestLikes"
        @click="activeSortBtn = 'fewestLikes'"
      >Fewest Likes</button>
    </div>
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
import { Stack, StackItem } from "vue-stack-grid";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Stack,
    StackItem
  }
})
export default class Showcase extends Vue {
  private activeBtn = "";
  private activeSortBtn = "";
  private optionBtns = [
    {
      key: "cat",
      name: "btnCat",
      topic: "cat",
      text: "Cat"
    },
    {
      key: "dog",
      name: "btnDog",
      topic: "dog",
      text: "Dog"
    },
    {
      key: "both",
      name: "btnBoth",
      topic: "cat-and-dog",
      text: "Both"
    }
  ];
  get images() {
    return this.$store.state.images;
  }
  public findPhoto(topic?: string) {
    this.$store.dispatch("findPhoto", topic);
  }
  public sortMostLikes() {
    this.$store.commit("SORT_MOSTLIKES");
  }
  public sortFewestLikes() {
    this.$store.commit("SORT_FEWESTLIKES");
  }
  beforeMount() {
    this.findPhoto("pet");
  }
}
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
img:hover {
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
#sort-buttons {
  text-align: end;
  margin-bottom: 10px;
  margin-right: 10px;
}
#sort-buttons > button {
  background-color: rgba(238, 238, 238, 0.8);
  -webkit-tap-highlight-color: transparent;
  padding: 6px;
  box-shadow: inset 3px 1px 24px -10px rgb(97, 88, 68);
  color: #eee;
  border: 1px solid rgb(36, 32, 25);
  font-size: 11px;
  cursor: pointer;
  text-shadow: rgb(63, 52, 14) 2px 0 10px;
}
.sorting {
  background-color: rgb(36, 32, 25) !important;
  box-shadow: none !important;
}
#sort-buttons > button {
  outline: none !important;
  outline-offset: none !important;
}
#mostLikesBtn {
  border-radius: 10px 0 0 10px;
}
#fewestLikesBtn {
  border-radius: 0 10px 10px 0;
}
</style>