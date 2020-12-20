<template>
  <div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AxiosTest"
}
axios.defaults.baseURL = 'http://127.0.0.1:8080'
axios.defaults.timeout = 5000
axios.defaults.transformResponse = data => data

axios({
  url: '/student/query1',
  params: {
    size: 30,
    start: 0
  },
  method: 'get'
}).then(data => {
  console.log(data)
})

axios.all([
  axios({
    url: '/student/query1',
    params: {
      size: 30,
      start: 0
    },
    method: 'get'
  }),
  axios({
    url: 'http://127.0.0.1:8080/student/query2',
    params: {
      size: 30,
      start: 0
    },
    method: 'get'
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
}))
</script>

<style scoped>

</style>