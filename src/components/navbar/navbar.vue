<template>
  <nav id="Navbar" v-bind:class="{changeNavColor: scrollPosition > 50}">
    <router-link to="/home" class="logo-btn">
      <img src="../../../public/catIcon.png" alt="icon" class="logo-btn" />
    </router-link>
    <my-sidenav :class="{open: menushow, closed: !menushow}" />
    <div>
      <ul id="menubars">
        <div id="menuToggle" @click="TOGGLE_MENUSHOW">
          <div class="bar" id="bar1" :class="{change1: menushow}"></div>
          <div class="bar" id="bar2" :class="{change2: menushow}"></div>
          <div class="bar" id="bar3" :class="{change3: menushow}"></div>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidenav from "./Sidenav/Sidenav.vue";

@Component({
  components: {
    "my-sidenav": Sidenav
  }
})
export default class Navbar extends Vue {
  private scrollPosition = 0;

  public updateScroll(): void {
    this.scrollPosition = window.scrollY;
  }
  public TOGGLE_MENUSHOW() {
    this.$store.commit("TOGGLE_MENUSHOW");
  }
  get menushow() {
    return this.$store.state.menushow;
  }
  get gMenushow() {
    return this.$store.getters.menushow;
  }
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
}
</script>

<style>
#Navbar {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 0;
}
.logo-btn {
  width: 50px;
  height: auto;
  margin: 3px;
  margin-left: 10px;
  z-index: 400;
  -webkit-tap-highlight-color: transparent;
}
#menubars {
  display: flex;
  flex-direction: row;
  margin: 10px 30px 0 0;
  -webkit-tap-highlight-color: transparent;
}

.changeNavColor {
  background-color: #eee;
}
#menuToggle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  z-index: 500;
}
.bar {
  width: 40px;
  height: 5px;
  background-color: rgb(146, 114, 114);
  margin: 5px 0;
  transition: 0.5s;
  border-radius: 20px;
}
#bar1.change1 {
  transform: rotate(135deg) translate(8px, -5px);
}
#bar2.change2 {
  opacity: 0;
}
#bar3.change3 {
  transform: rotate(45deg) translate(-8px, -7px);
}

.open {
  transform: translateY(0);
}
.closed {
  height: 0;
  transform: translateY(-100%);
}
</style>