<template>
  <div>
    <h1>用户页面</h1>
    <button @click="$store.commit('inc')">+</button>
    <button @click="btnClick">updateLater</button>
    <button @click="updateCount(5)">+5</button>
    <button @click="updateCount(10)">+10</button>
    <button @click="$store.commit('desc')">-</button>
    <h3>counter的值为:{{ $store.state.counter }}</h3>
    <user-counter></user-counter>
  </div>
</template>

<script>
import UserCounter from "@/views/UserCounter";
import {incByCount} from '@/store/mutations-type'

export default {
  name: "User",
  data() {
    return {}
  },
  components: {
    UserCounter
  },
  methods: {
    updateCount(count) {
      // this.$store.commit('incByCount', count);
      // this.$store.commit(incByCount, count)
       this.$store.commit(incByCount, {
         count:5
       })
    },
    btnClick(){
      this.$store.dispatch('updateLater','hahahahhaah').then((res)=>{console.log('你好!你好呀!',res)})
    }
  }
}
</script>

<style scoped>

</style>