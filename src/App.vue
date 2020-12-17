<template>
  <div>
    <div id="nav">
      <router-link to="/home" tag="button" replace>Home</router-link>
      |
      <router-link to="/about" tag="button" replace>About</router-link>
      |
      <router-link :to="/user/+id" tag="button" replace>User</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id: 123,
    }
  }
}
</script>


<style>
.router-link-active {
  color: red;
  background-color: green;
  height: 40px;
  width: 60px;
}
</style>
