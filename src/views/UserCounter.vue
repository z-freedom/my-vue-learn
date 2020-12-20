<template>
  <div>
    <h1>子组件counter: {{ $store.state.counter }}</h1>
    <h1>子组件counter的平方: {{ $store.getters.power }}</h1>
    {{ $store.state.info }}
  </div>
</template>

<script>
export default {
  name: "UserCounter",
}

</script>

<style scoped>

</style>