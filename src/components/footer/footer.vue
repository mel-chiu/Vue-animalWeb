<template>
  <footer id="footer">
    <my-sitemap />
    <div>
      <ul id="copyright">
        <li>{{copyright}}</li>
      </ul>
    </div>
  </footer>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SiteMap from "./siteMap/siteMap.vue";

@Component({
  components: {
    "my-sitemap": SiteMap
  }
})
export default class Footer extends Vue {
  @Prop(String) readonly copyright!: string;
}
</script>
<style>
#footer {
  width: 100%;
  height: auto;
  position: relative;
  bottom: 0;
  background: rgb(3, 2, 8);
  color: #eee;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
#copyright > li {
  list-style-type: none;
  position: relative;
  right: 10px;
}
</style>

