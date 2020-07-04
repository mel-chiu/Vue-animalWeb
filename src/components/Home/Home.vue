<template>
    <div id="homepage">
      <div id="landing">
        <h1 id="landingMessage">{{landingpageMessage}}</h1>
      </div>
      <div>
        <h1 id="welcomeMessage">{{welcomeMessage}}</h1>
      </div>
      <div>
        <Showcase/>
      </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Showcase from '../Home/Showcase/Showcase.vue';


export default Vue.extend({
    name:'homepage',
    data(){
      return{
        landingpageMessage: 'Feel lonley at home during COVID-19?' as string,
        welcomeMessage: 'Check out our photos' as string,

      }
    },
    components:{
      Showcase
    }
})
</script>


<style scoped>
#landing{
  background-image: url("../../assets/landingImg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  resize: inherit;
  width: 100%;
  height: 550px;
}
#landingMessage{
 color: rgb(114, 110, 91);
 position: absolute;
 top: 100px;
 left: 80px;
 word-wrap: inherit;
 width: 500px;
 font-size: 4em;
 font-family: 'Montserrat Subrayada', sans-serif;
}
#welcomeMessage{
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 30px;
  color: #eee;
  cursor: s-resize;
  padding: 10px;
}

@media(max-width: 769px){
  #landingMessage{
    font-size: 2em;
    width: 50%;
  }
}
</style>
