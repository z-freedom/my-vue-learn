<template>
  <div>
    <h2>{{ students }}</h2>
  </div>
</template>

<script>
import {request} from '@/network/request'

export default {
  name: "AxiosCreate",

  created() {
    const config = {
      url: '/student/query1',
      method: 'get',
      params: {
        size: 30,
        start: 0
      }
    }
    request(config)
        .then(res => this.students = res)
        .catch(err => console.log(err))
  },
  data() {
    return {
      students: []
    }
  }
}
</script>

<style scoped>

</style>