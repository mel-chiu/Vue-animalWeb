<template>
  <div id="RandomPage">
    
      <img :src="profile.urls.regular" :alt="profile.alt_description" id="profileImg"/>
     <div v-if="profile" id="content"> 
      <h1 v-if="profile.alt_description">{{profile.alt_description}}</h1>
      <p>Popularity: {{profile.likes/100}} %</p>
      <p>{{profile.user.name}}</p>
 
    </div>
    <img src="../../assets/next.png" alt="next" @click="nextToggle" id="next">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";



export default Vue.extend({
  props: ["id"],
  data() {
    return {
      profile: [] as unknown,
    };
  },
  
  methods: {
    findProfile() {
        this.profile = [];
      axios
        .get('https://api.unsplash.com/photos/random/?query=cat-and-dog', {
          headers: {
            Authorization:
              `Client-ID ${process.env.VUE_APP_MYVUE}`
          }
        })
        .then(res => {
          this.profile = res.data;
        });
    },
    nextToggle(){
        this.profile = [];
      axios
        .get('https://api.unsplash.com/photos/random/?query=cat-and-dog', {
          headers: {
            Authorization:
              `Client-ID ${process.env.VUE_APP_MYVUE}`
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

  mounted() {
    this.findProfile();
  }
});
</script>
<style scoped>
#RandomPage{
  color: #eee;
}
#profileImg{
    width: 100%;
    height: auto;
}
#related-items{
    cursor: pointer; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
.related-item{
  width: auto;
  height: 300px;
  overflow: hidden;
  margin: 0 40px;
}
#content{
  position: relative;
  text-align: right;
  right: 100px;
}
#next{
    position: relative;
    left: 45%;

}

</style>