<template>
  <div id="homepage">
    <div id="landing">
      <h1 id="landingMessage">{{landingpageMessage}}</h1>
    </div>
    <div>
      <h1 id="welcomeMessage">{{welcomeMessage}}</h1>
    </div>
    <div>
      <my-showcase />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Showcase from "../../components/Showcase/Showcase.vue";

@Component({
  components: {
    "my-showcase": Showcase
  }
})
export default class Home extends Vue {
  private landingpageMessage = "Feel loneley at home during COVID-19?";
  private welcomeMessage = "Check out our photos";
}
</script>


<style scoped>
#landing {
  background-image: url("../../assets/landingImg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  resize: inherit;
  width: 100%;
  height: 550px;
}
#landingMessage {
  color: rgb(114, 110, 91);
  position: absolute;
  top: 100px;
  left: 80px;
  word-wrap: inherit;
  width: 500px;
  font-size: 4em;
  font-family: "Montserrat Subrayada", sans-serif;
}
#welcomeMessage {
  font-family: "Barlow Semi Condensed", sans-serif;
  font-size: 200%;
  color: #eee;
  cursor: s-resize;
  padding: 10px;
  animation: bumping 0.9s ease-out forwards;
}
@keyframes bumping {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateY(-40%);
  }
  100% {
    transform: translateX(0);
  }
}
@media (max-width: 630px) {
  #landing {
    background-position: -270px 20px;
  }
  #landingMessage {
    font-size: 2.6em;
    width: 70%;
    top: 110px;
    left: 30px;
  }
}
@media (max-width: 415px) {
  #landing {
    background-position: -350px 20px;
    height: 85vh;
  }
}
@media (max-width: 376px) {
  #landing {
    background-position: -340px 20px;
    max-height: 85vh;
  }
  #landingMessage {
    font-size: 2.3em;
    width: 70%;
    top: 110px;
    left: 20px;
  }
  #welcomeMessage {
    font-family: "Barlow Semi Condensed", sans-serif;
    font-size: 160%;
  }
}
</style>
