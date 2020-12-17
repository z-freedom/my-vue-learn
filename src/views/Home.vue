<template>
  <div>
    <h1>这是首页</h1>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <img src="~assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>

</style>
