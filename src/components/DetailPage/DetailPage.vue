<template>
  <div id="detailPage">
    
      <img :src="profile.urls.regular" :alt="profile.alt_description" id="profileImg"/>
     <div v-if="profile" id="content"> 
      <h1 v-if="profile.alt_description">{{profile.alt_description}}</h1>
      <p>Popularity: {{profile.likes/100}} %</p>
      <p>{{profile.user.name}}</p>
 
    </div>
    <div id="related-items">
      <div class="related-item">
        <router-link :to="{name: 'DetailPage', params: {id: profile.related_collections.results[0].cover_photo.id}}"
        tag="img" :src="profile.related_collections.results[0].cover_photo.urls.thumb" />        
      </div>
      <div class="related-item">
        <router-link :to="{name: 'DetailPage', params: {id: profile.related_collections.results[1].cover_photo.id}}"
         tag="img" :src="profile.related_collections.results[1].cover_photo.urls.thumb"/>
      </div>
      <div class="related-item">
        <router-link :to="{name: 'DetailPage', params: {id: profile.related_collections.results[2].cover_photo.id}}"
         tag="img" :src="profile.related_collections.results[2].cover_photo.urls.thumb" />
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";


export default Vue.extend({
  name:"DetailPage",
  props: ["id"],
  data() {
    return {
      profile: [] as unknown,
    };
  },
  
  methods: {
    findProfile(id: string) {
        this.profile = [];
      axios
        .get('https://api.unsplash.com/photos/'+ this.id, {
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
#detailPage{
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

</style>