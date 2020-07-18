<template>
  <div id="detailPage">
    <img
      v-if="profile.urls"
      :src="profile.urls.regular"
      :alt="profile.alt_description"
      id="profileImg"
    />
    <div v-if="profile" id="content">
      <h1 v-if="profile.alt_description">{{profile.alt_description}}</h1>
      <p>{{profile.likes}} {{Likes}}</p>
      <p v-if="profile.user">{{profile.user.name}}</p>
    </div>
    <div id="related-items">
      <div class="related-item">
        <router-link
          v-if="profile.related_collections"
          :to="{name: 'DetailPage', params: {id: profile.related_collections.results[0].cover_photo.id}}"
          tag="img"
          :src="profile.related_collections.results[0].cover_photo.urls.thumb"
        />
      </div>
      <div class="related-item">
        <router-link
          v-if="profile.related_collections"
          :to="{name: 'DetailPage', params: {id: profile.related_collections.results[1].cover_photo.id}}"
          tag="img"
          :src="profile.related_collections.results[1].cover_photo.urls.thumb"
        />
      </div>
      <div class="related-item">
        <router-link
          v-if="profile.related_collections"
          :to="{name: 'DetailPage', params: {id: profile.related_collections.results[2].cover_photo.id}}"
          tag="img"
          :src="profile.related_collections.results[2].cover_photo.urls.thumb"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DetailPage",
  props: ["id"],
  data() {
    return {
      Likes: "Likes"
 
    };
  },
  computed:{
    profile(){
    return  this.$store.state.profile
    }
  },
  methods: {
     findProfile(id?: string){
      this.$store.dispatch('findProfile', id)
    }
  },
  watch: {
    $route(to: string, from: string) {
      this.findProfile(this.id);
    }
  },
  beforeMount() {
    this.findProfile(this.id);
  }
});
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
}
.related-item {
  width: auto;
  height: 300px;
  overflow: hidden;
  margin: 30px 40px;
}
#content {
  position: relative;
  text-align: right;
  right: 5px;
  width: 85%;
}
@media (max-width: 800px) {
  #content {
    position: relative;
    width: 85%;
    height: 100%;
    right: 10px;
  }
  .related-item {
    width: auto;
    height: 300px;
    overflow: hidden;
    margin: 0 20px;
  }
  .related-item > router-link {
    padding: 30px;
  }
  img {
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
    width: auto;
    height: 300px;
    overflow: hidden;
    margin: 0 20px;
  }
  .related-item > router-link {
    padding: 30px;
  }
  img {
    width: 85px;
  }
}
</style>