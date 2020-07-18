<template>
  <div id="RandomPage">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else-if="!loading">
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
      <hr/>
      <div id="randomBtn" @click="findRandomPhoto" >
      <img src="../../assets/next.png" alt="next"  id="next"/>
      <p>Next photo</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Spinner from "../../components/UI/Spinner/Spinner.vue";

export default Vue.extend({
  name: "RandomPage",
  props: ["id"],
  data() {
    return {
      loading: false as boolean
    };
  },
  components: {
    Spinner
  },
  computed:{
    randomPhoto(){
      return this.$store.state.randomPhoto
    }
  },
  methods: {
    findRandomPhoto(){
      this.$store.dispatch('findRandomPhoto')
    }
  },
  watch: {
    $route(to: string, from: string) {
      this.findRandomPhoto();
    }
  },
  created() {
    this.loading = true;
  },

  mounted() {
    this.loading = false;
    this.findRandomPhoto();
  }
});
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
#randomBtn{
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 2px;
  margin: 10px;
  left: 45%;
  font-size: 20px;
  align-items: center;
  width:200px;
  -webkit-tap-highlight-color: transparent;
}
hr{
  width: 70%;
  opacity: 60%;
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