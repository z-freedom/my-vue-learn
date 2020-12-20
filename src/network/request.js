import Axios from "axios";

export function request(config) {
    const instance = Axios.create({
        baseURL: 'http://127.0.0.1:8080',
        timeout: 5000,
    });
    instance.interceptors.request.use(config=>{
        console.log('拦截到请求',config)
        return config
    },error => {
        console.log('拦截到请求失败',error)
        return error
    })

    instance.interceptors.response.use(config=>{
        console.log('拦截到响应',config)
        return config.data
    },error => {
        console.log('拦截到响应失败',error)
        return error
    })
    return instance(config)
}

// export function request(config) {
//     return new Promise(((resolve, reject) => {
//         const instance = Axios.create({
//             baseURL: 'http://127.0.0.1:8080',
//             timeout: 5000,
//         });
//         instance(config)
//             .then(res => resolve(res))
//             .catch(err => reject(err))
//     }))
// }