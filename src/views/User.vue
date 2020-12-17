<template>
  <div>
    <h1>用户页面</h1>
    <button @click="$store.commit('inc')">+</button>
    <button @click="$store.commit('desc')">-</button>
    <h3>counter的值为:{{ $store.state.counter }}</h3>
    <user-counter></user-counter>
  </div>
</template>

<script>
import UserCounter from "@/views/UserCounter";

export default {
  name: "User",
  data() {
    return {

    }
  },
  components: {
    UserCounter
  }
}
</script>

<style scoped>

</style>