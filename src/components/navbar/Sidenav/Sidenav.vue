<template>
  <div id="Sidenav">
    <ul id="options">
      <li>
        <router-link to="/" class="option">{{option1}}</router-link>
      </li>
      <li>
        <router-link to="/gallery" class="option">{{option2}}</router-link>
      </li>
      <li>
        <router-link to="/random" class="option">{{option3}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
export default class Sidenav extends Vue {
  private option1 = "Home";
  private option2 = "Discovery";
  private option3 = "Randomizer";
  private menushow = true;
}
</script>
<style scoped>
#Sidenav {
  width: 100%;
  height: 100%;
  background-color: rgb(31, 23, 23);
  color: rgb(39, 3, 3);
  z-index: 99;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  transition: all 0.3s ease-out;
}
#options {
  text-align: center;
  font-size: 60px;
}
</style>