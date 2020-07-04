<template>
  <div id="Sidenav">
    <ul id="menubars">
      <li v-show="menushow">
        <router-link to="/" class="option">{{option1}}</router-link>
      </li>
      <li v-show="menushow">
        <router-link to="/gallery" class="option">{{option2}}</router-link>
      </li>
      <li v-show="menushow">
        <router-link to="/random" class="option">{{option3}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      option1: "Home" as string,
      option2: "Animals" as string,
      option3: "Random" as string
    };
  }
});
</script>
<style scoped>
#Sidenav{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-color: #eee;
    transition: 0.4s;
    overflow-y: hidden;
    z-index: 95;
}
.option{
    font-size: 3em;
    color: darkolivegreen;
}

</style>