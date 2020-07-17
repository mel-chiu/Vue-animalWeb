<template>
  <div id="RandomPage">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else-if="!loading">
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
      <hr/>
      <div id="randomBtn" @click="nextToggle" >
      <img src="../../assets/next.png" alt="next"  id="next"/>
      <p>Next photo</p>
      </div>
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
      profile: [] as Array<object>,
      loading: false as boolean
    };
  },
  components: {
    Spinner
  },
  methods: {
    findProfile(): void{
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
    nextToggle(): void{
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
    $route(to: string, from: string) {
      this.findProfile();
    }
  },
  created() {
    this.loading = true;
  },

  mounted() {
    this.loading = false;
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