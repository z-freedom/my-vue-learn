<template>
  <div>
    <div id="nav">
      <router-link to="/home" tag="button"ii>Home</router-link>
      |
      <router-link to="/about" tag="button">About</router-link>
      |
      <router-link :to="/user/+id" tag="button">User</router-link>
      |
      <router-link to="/axios/test" tag="button">Axios</router-link>
      |
      <router-link to="/axios/create" tag="button">AxiosCreate</router-link>
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
  width: 100px;
}
</style>
