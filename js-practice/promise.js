// const promiseOne = new Promise((resolve,reject)=>{
//     //net work call 

//     setTimeout(()=>{
//      console.log("async task is complete")
//      resolve()
//     },3000)
//  })
//   promiseOne.then(()=>{
//      console.log('promise consumed ')
//   })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ name: "sagar", age: 20 })
//     }, 1000)
// })
// promiseThree.then((user) => {
//     console.log(user)
// })


// promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (!error) {
//             resolve({ name: "sagar", age: 10 })
//         }
//         else {
//             reject('Something went wrong ')
//         }
//     }, 1000)
// })

// const promiseState = promiseFour.then((user) => {
//     console.log(user)
//     return user.name
// }).then((name) => {
//     console.log(name)
// }).catch((error)=>{
// console.log(error)
// })


// console.log(promiseState)

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({ userName: "Sagar rath", password: 1234 })
//         }
//         else {
//             reject('ERROR Something went wrong ')
//         }
//     }, 1000)
// });

// async function consumePromiseFive() {
//     try {
//         let response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()


// async function getAlluser() {
//    try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)

//    } catch (error) {
//      console.log(error)
//    }
// }
// getAlluser()

//  fetch('https://jsonplaceholder.typicode.com/users').then((resposnse)=>{
//   return resposnse.json()
// }).then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//  console.log(error)
// })


