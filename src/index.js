// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 2000)
//
// }).then((data) => {
//     console.log(data, '第一次处理')
//     return new Promise(resolve => resolve(data + '111'))
// }).then(data => {
//     console.log(data, '第二次处理')
//     return Promise.resolve(data + '222')
// }).then(data => {
//     console.log(data, '第三次处理')
//     return (data + '333')
// }).then(data => console.log(data, 'end'))
let a = true

// new Promise(((resolve, reject) => {
//     if (a) {
//         resolve()
//     } else {
//         throw 'error'
//     }
// })).then(data => console.log('success1'))
//     .then(data => {
//         throw 'haha'
//     })
//     .catch(error => console.log('error1', error))
//     .catch(error => console.log('error2', error))

Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.random();
            console.log('number1', number)
            if (number < 0.5) {
                reject('失败了啊')
            } else {
                resolve('成功了啊')
            }
        }, 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.random();
            console.log('number2', number)
            if (number < 0.5) {
                reject({code: 1, msg: 'failed'})
            } else {'*'
                resolve({code: 0, msg: 'success'})
            }
        }, 2000)
    })
]).then((results => {
    console.log("results", results)
})).catch(errors => {
    console.log("errors", errors)
})