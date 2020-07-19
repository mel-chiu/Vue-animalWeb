<template>
  <div id="Sidenav">
    <ul id="options">
      <li
        class="option"
        v-for="navOption in navOptions"
        :key="navOption.key"
        @click="TOGGLE_MENUSHOW()"
      >
        <router-link :to="navOption.href" tag="li" exact-active-class="active">{{navOption.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

export default class Sidenav extends Vue {
  private navOptions = [
    {
      name: "Home",
      key: 0,
      href: "/"
    },
    {
      name: "Discovery",
      key: 1,
      href: "/gallery"
    },
    {
      name: "Randomizer",
      key: 2,
      href: "/random"
    }
  ];

  get gMenushow() {
    return this.$store.getters.menushow;
  }
  async TOGGLE_MENUSHOW() {
    this.$store.commit("TOGGLE_MENUSHOW");
  }
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
  font-size: 150%;
  margin-top: 100px;
}
#options > li {
  margin: 50px 0px;
  list-style-type: none;
}
.option {
  padding: 0 20px;
  text-decoration: none;
  color: rgb(146, 114, 114);
  cursor: default;
}
#options > li :hover {
  color: rgb(224, 181, 181);
  transition: 0.3s ease-in;
}
</style>