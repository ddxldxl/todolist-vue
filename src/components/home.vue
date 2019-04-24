<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png" alt="">
      <div class="portrait portraitLogin">
        <router-link v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img v-if="isLogin"  src="../assets/portrait.png" alt="">
      </div>
    </div>
    <div class="phrase">
      一起学习Vue-router
    </div>
    <div class="btns">
      <router-link class="trans" to="./project" tag="div">我的项目</router-link>
      <router-link class="trans" to="./doc" tag="div">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return {
        isLogin:false
      }
    },
    created(){
      var user = this.$local.fetch("miaov");
      this.isLogin = user.islogin;
    }
  }
</script>
<style>

</style>
