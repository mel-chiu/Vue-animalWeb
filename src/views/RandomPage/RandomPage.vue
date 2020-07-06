<template>
  <div id="RandomPage">
    <div v-if="loading">
      <Spinner/>
    </div>
    <div v-else-if="!loading">
    <img v-if="profile.urls" :src="profile.urls.regular" :alt="profile.alt_description" id="profileImg" />
    <div v-if="profile" id="content">
      <h1 v-if="profile.alt_description">{{profile.alt_description}}</h1>
      <p>{{profile.likes}} Likes</p>
      <p v-if="profile.user">{{profile.user.name}}</p>
    </div>
    <img src="../../assets/next.png" alt="next" @click="nextToggle" id="next" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner.vue";

export default Vue.extend({
  name: "RandomPage",
  props: ["id"],
  data() {
    return {
      profile: [] as unknown,
      loading:false as boolean
    };
  },
  components:{
    Spinner
  },
  methods: {
    findProfile() {
      this.profile = [];
      axios
        .get("https://api.unsplash.com/photos/random/?query=cat-and-dog", {
          headers: {
            Authorization: `Client-ID ${process.env.VUE_APP_MYVUE}`
          }
        })
        .then(res => {
          this.profile = res.data;
        });
    },
    nextToggle() {
      this.profile = [];
      axios
        .get("https://api.unsplash.com/photos/random/?query=cat-and-dog", {
          headers: {
            Authorization: `Client-ID ${process.env.VUE_APP_MYVUE}`
          }
        })
        .then(res => {
          this.profile = res.data;
        });
    }
  },
  watch: {
    $route(to, from) {
      this.findProfile();
    }
  },
  created(){
    this.loading=true;
  },

  mounted() {
    this.loading=false;
    this.findProfile();
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
  right: 70px;
}
#next {
  position: relative;
  left: 45%;
}
@media(max-width: 450px){
#content {
  position: relative;
  text-align: right;
  left: 20px;
  width: 300px;
  height: 300px;
}
#next {
  position: relative;
  left: 42%;
  width: 20%;
  height: 20%;
}
}
</style>