<template>
  <div class="doc">
    <div class="doc-nav">
      <ul class="main-menu">
        <li>
          <router-link :to="{path:'#base'}">基础</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#start'}">开始</router-link>
            </li>
            <li>
              <router-link :to="{path:'#dongtai'}">动态路由</router-link>
            </li>
            <li>
              <router-link :to="{path:'#qiantaoluyou'}">嵌套路由</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="{path:'#jinjie'}">进阶</router-link>
          <ul class="nav-dropdown">
            <li>
              <router-link :to="{path:'#jinjie1'}">导航钩子</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie2'}">路由元信息</router-link>
            </li>
            <li>
              <router-link :to="{path:'#jinjie3'}">过渡动效</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="doc-view">
      <doc-view></doc-view>
    </div>
  </div>
</template>

<script>
  import DocView from '@/views/backend/doc-view'
  import TWEEN from 'tween.js'
  export default {
    components: {
      DocView
    },
    beforeRouteUpdate(to,from,next){
      this.animate(to);
      next();
    },
    beforeRouteEnter(to, from, next){
      next((vm)=>{
        vm.animate(to)
      });  
    },
    methods:{
      animate(to){
        function animayeFunc(time){
            requestAnimationFrame(animayeFunc);
            TWEEN.update(time)
          }
        if(to.hash){
          var ele = document.getElementById(to.hash.slice(1));
          var doc = document.getElementsByClassName("doc")[0];
          
          if(ele){
            animayeFunc();
            new TWEEN.Tween({
              number:doc.scrollTop
            })
            .to({
              number:ele.offsetTop
            },500)
            .onUpdate(function(){
              doc.scrollTop = this.number.toFixed(0)
            }).start()
          }
        }
      }
    }
  }
</script>
<style>

</style>
