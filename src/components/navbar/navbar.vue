<template>
  <nav id="Navbar" v-bind:class="{changeNavColor: scrollPosition > 50}">
    <router-link to="/home">
      <img src="../../../public/catIcon.png" alt="icon" id="logo-btn" />
    </router-link>
    <div>
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

        <div id="menuToggle" @click="menushow = !menushow">
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

@Component
export default class Navbar extends Vue {
  private option1 = "Home";
  private option2 = "Discovery";
  private option3 = "Randomizer";
  private menushow = false;
  private scrollPosition = 0;

  public updateScroll(): void {
    this.scrollPosition = window.scrollY;
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
#logo-btn {
  width: 50px;
  height: auto;
  margin: 3px;
  margin-left: 10px;
}
#menubars {
  display: flex;
  flex-direction: row;
  margin: 10px 30px 0 0;
}
#menubars > li {
  padding: 0 10px;
  margin: 0 5px;
  list-style-type: none;
}
#menubars > li > router-link {
  text-decoration: none;
}
.changeNavColor {
  background-color: #eee;
}
#menuToggle {
  cursor: pointer;
  display: inline-block;
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
.option {
  color: rgb(146, 114, 114);
  text-decoration: none;
  font-size: 18px;
}
</style>