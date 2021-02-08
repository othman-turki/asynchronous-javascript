// ********************************************************************************
//                          Asynchronous JavaScript
// ********************************************************************************

// ********************************************************************************
// 1.   External API Endpoint
// ********************************************************************************
// const getTodos = (callback) => {
//   const xhr = new XMLHttpRequest()
//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText)
//       callback(undefined, data)
//     } else if (xhr.readyState === 4) {
//       callback('Could not fetch the data', undefined)
//     }
//   })
//   //   xhr.open('GET', 'todos.json')
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//   xhr.send()
// }
// getTodos((err, data) => {
//   console.log('Callback fired')
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// ********************************************************************************
// 2.   Internal API Endpoint
//      Callback Hell
// ********************************************************************************
// const getTodos = (resource, callback) => {
//   const xhr = new XMLHttpRequest()
//   xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText)
//       callback(undefined, data)
//     } else if (xhr.readyState === 4) {
//       callback('Could not fetch the data', undefined)
//     }
//   })
//   xhr.open('GET', resource)
//   xhr.send()
// }
// getTodos('todos/luigi.json', (err, data) => {
//   console.log(data)
//   getTodos('todos/mario.json', (err, data) => {
//     console.log(data)
//     getTodos('todos/shaun.json', (err, data) => {
//       console.log(data)
//     })
//   })
// })

// ********************************************************************************
// 3.   Promises
// ********************************************************************************
// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//
//     xhr.addEventListener('readystatechange', () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText)
//         resolve(data)
//       } else if (xhr.readyState === 4) {
//         reject('Could not fetch the data')
//       }
//     })
//
//     xhr.open('GET', resource)
//     xhr.send()
//   })
// }
// getTodos('todos/luigi.json')
//   .then((data) => {
//     console.log('resolved', { data })
//     return getTodos('todos/mario.json')
//   })
//   .then((data) => {
//     console.log('resolved', { data })
//     return getTodos('todos/shaun.json')
//   })
//   .then((data) => {
//     console.log('resolved', { data })
//   })
//   .catch((err) => console.log('rejected', { err }))

// ********************************************************************************
// 4.   Fetch API
// ********************************************************************************
// fetch('todos/luigi.json')
//   .then((res) => {
//     return res.json()
//   })
//   .then((data) => console.log('resolved', { data }))
//   .catch((err) => console.log('rejected', { err }))

// ********************************************************************************
// 5.   Async - await (with Fetch API)
// ********************************************************************************
const getTodos = async () => {
  const res = await fetch('todos/luigis.json')

  if (res.status !== 200) {
    throw new Error('Cannot fetch the data')
  }

  const data = await res.json()
  return data
}

getTodos()
  .then((data) => console.log('resolved:', data))
  .catch((err) => console.log('rejected:', err.message))
