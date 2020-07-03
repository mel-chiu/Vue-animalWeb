<template>
  <div id="app">
    
      <app-nav/>
    
    <router-view/>
    
    
      <app-footer copyright="Designed by Melinda Chiu 2020"/>
    
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '../src/components/navbar/navbar.vue';
import Footer from '../src/components/footer/footer.vue';

@Component({
  components: {
    'app-nav': Navbar,
    'app-footer' : Footer
  },
})
export default class App extends Vue {}
</script>

<style scoped>
body{
  background-color: orchid;
}
#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  position: relative;
  background: rgb(107, 90, 53);
}

</style>
