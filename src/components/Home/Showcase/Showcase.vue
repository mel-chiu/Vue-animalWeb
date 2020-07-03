<template>
  <div id="Showcase">
    <div class="pic-row">
      <a :href="link" alt="img" ><img :src="url"/></a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from 'axios';

export default Vue.extend({
  name:'Showcase',
  data(){
    return{
       url:'' as string,
       link:'' as string
      }


  },
  mounted(){
    axios.get('')
  }
});
</script>
<style scoped>
</style>