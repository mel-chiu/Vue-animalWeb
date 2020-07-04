<template>
    <footer id="footer">
        <h1>sitemap</h1>
        <div>
            <ul id="copyright">
                <li>{{copyright}}</li>         
            </ul>
        </div>
    </footer>

</template>
<script lang="ts">
import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class Footer extends Vue{
 @Prop(String) readonly copyright!: string
}
</script>
<style>
#footer{
    width: 100%;
    height: 200px;
    position: relative;
    bottom: 0;
    background: rgb(3, 2, 8);
    color: #eee;
    z-index: 99;
}
#copyright>li{
    list-style-type: none;
}
</style>

