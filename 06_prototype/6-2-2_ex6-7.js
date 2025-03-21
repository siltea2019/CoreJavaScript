var arr = [1, 2]

arr.push(3)
// arr(.__proto__).push(3)

arr.hasOwnProperty(2) // true
// arr(.__proto__)(.__proto__).hasOwnProperty(2)

