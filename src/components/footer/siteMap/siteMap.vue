<template>
  <div id="siteMap">
    <h1>{{footerMsg}}</h1>
    <div id="links">
      <router-link to="/home" class="link">Home</router-link>
      <router-link to="/gallery" class="link">New idea</router-link>
      <router-link to="/detail/TA22tc6YyMw" class="link">Show selected photo</router-link>
      <router-link to="/random" class="link">Random photo</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class SiteMap extends Vue {
  private footerMsg = "Explore on our website";
}
</script>
<style scoped>
#siteMap {
  margin: 35px 10px;
}
#links {
  display: flex;
  flex-direction: column;
}
.link {
  color: #eee;
  text-decoration: none;
}
</style>