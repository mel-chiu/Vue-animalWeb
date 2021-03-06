<template>
  <div id="detailPage">
    <div v-show="!loading">
      <Spinner />
    </div>
    <div v-show="loading">
    <img
      v-if="profile.urls"
      :src="profile.urls.regular"
      :alt="profile.alt_description"
      id="profileImg"
    />
    <div v-if="profile" id="content">
      <h1 v-if="profile.alt_description">{{profile.alt_description}}</h1>
      <p>{{profile.likes}} Likes</p>
      <p v-if="profile.user">{{profile.user.name}}</p>
    </div>

    <div id="related-items">
      <div class="related-item" v-for="relatedItem in relatedItems" :key="relatedItem.key">
        <router-link
          v-if="profile.related_collections"
          :to="{name: 'DetailPage', params: {id:profile.related_collections.results[relatedItem.key].cover_photo.id}}"
          class="realted-item-link"
        >
          <div>
          <img :src="profile.related_collections.results[relatedItem.key].cover_photo.urls.thumb" class="related-img"/>
          </div>
          <p
            class="related-item-text"
          >{{profile.related_collections.results[relatedItem.key].title}}</p>
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import Spinner from '../../components/UI/Spinner/Spinner.vue';

@Component({
  components:{
    Spinner
  }
})
export default class DetailPage extends Vue {
  @Prop() id!: string;
  private relatedItems = [
    {
      key: 0 as number
    },
    {
      key: 1 as number
    },
    {
      key: 2 as number
    }
  ];
  get profile() {
    return this.$store.state.profile;
  }
  get getProfile() {
    return this.$store.getters.getProfile;
  }
  get loading() {
    return this.$store.state.loading;
  }
  public findProfile(id?: string) {
    this.$store.dispatch("findProfile", id);
  }
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(to: object, from: object) {
    this.findProfile(this.id);
  }
  beforeMount() {
    this.findProfile(this.id);
  }
}
</script>

<style scoped>
#detailPage {
  color: #eee;
}
#profileImg {
  width: 100%;
  height: auto;
}
#related-items {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  -webkit-tap-highlight-color: transparent;
}
.related-item {
  width: auto;
  max-height: 500px;
  margin: 30px 40px;
  background-color: #eee;
  padding: 8px;
  border-radius: 2px;
  box-shadow: 2px 13px 31px 12px rgba(36, 21, 3, 0.75);
  -webkit-tap-highlight-color: transparent;
}
.related-item:hover {
  background-color: rgb(202, 199, 199);
  animation: shake 0.8s forwards;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.related-item > a {
  text-decoration: none;
}
.related-item-text {
  color: black;
  font-family: "Kalam", cursive;
  font-style: bold;
  text-align: center;
}
#content {
  position: relative;
  text-align: right;
  right: 5px;
  width: 85%;
}
.related-img {
  opacity: 0.85;
  z-index: 20;
}
.related-item:hover .related-img{
  opacity: 1;
}
.related-img:hover {
  opacity: 1;
}
@media (max-width: 800px) {
  #content {
    position: relative;
    width: 85%;
    height: 100%;
    right: 10px;
  }
  .related-item {
    max-width: 100px;
    max-height: auto;
    overflow: hidden;
    margin: 0 20px;
    word-wrap: inherit;
    font-size: 15px;
  }
  .related-img {
    width: 100px;
  }
}
@media (max-width: 450px) {
  #content {
    position: relative;
    text-align: right;
    left: 18px;
    width: 85%;
    height: 100%;
  }
  .related-item {
    max-width: 90px;
    word-wrap: inherit;
    overflow: hidden;
    margin: 0 5px;
    padding: 3px;
    font-size: 10px;
  }

  .related-img {
    width: 85px;
  }
}
</style>