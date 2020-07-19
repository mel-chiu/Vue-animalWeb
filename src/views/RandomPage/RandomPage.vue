<template>
  <div id="RandomPage">
    <div v-show="!loading">
      <Spinner />
    </div>
    <div v-show="loading">
      <img
        v-if="randomPhoto.urls"
        :src="randomPhoto.urls.regular"
        :alt="randomPhoto.alt_description"
        id="profileImg"
      />
      <div v-if="randomPhoto" id="content">
        <h1 v-if="randomPhoto.alt_description">{{randomPhoto.alt_description}}</h1>
        <p>{{randomPhoto.likes}} Likes</p>
        <p v-if="randomPhoto.user">{{randomPhoto.user.name}}</p>
      </div>
      <div>
      <hr />
      </div>
      <div id="randomBtn" @click="findRandomPhoto">
        <img src="../../assets/next.png" alt="next" id="next" />
        <p>{{next}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Spinner from "../../components/UI/Spinner/Spinner.vue";

@Component({
  components: {
    Spinner
  }
})
export default class RandomPage extends Vue {
  @Prop() id!: string;
  private next = "Next Photo";
  get randomPhoto() {
    return this.$store.state.randomPhoto;
  }
  get loading() {
    return this.$store.state.loading;
  }
  public findRandomPhoto() {
    this.$store.dispatch("findRandomPhoto");
  }
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(to: object, from: object) {
    this.findRandomPhoto();
  }
  mounted() {
    this.findRandomPhoto();
  }
}
</script>
<style scoped>
#RandomPage {
  color: #eee;
}
#profileImg {
  width: 100%;
  height: auto;
}
#content {
  position: relative;
  text-align: right;
  right: 5px;
  width: 85%;
  margin-bottom: 40px;
}
#next {
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 5px;
}
#randomBtn {
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 2px;
  margin: 10px;
  left: 45%;
  font-size: 20px;
  align-items: center;
  width: 200px;
  -webkit-tap-highlight-color: transparent;
}
hr {
  width: 70%;
  opacity: 0.6;
  z-index: 65;
}
@media (max-width: 800px) {
  #content {
    position: relative;
    width: 85%;
    height: 100%;
    right: 10px;
  }
  #randomBtn {
    left: 35%;
    font-size: 17px;
  }
  #next {
    width: 17px;
    height: 17px;
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
  #randomBtn {
    left: 35%;
    font-size: 15px;
  }
  #next {
    width: 15px;
    height: 15px;
  }
}
</style>