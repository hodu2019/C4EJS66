// let monAn1 = 'Bun Cha'
// let monAn2 = 'Bun dau'
// let monAn3= 'Bun Ca'

// initial array
let menu = ['Bun cha','Bun dau','Bun ca','Bun hai san','Bun Oc']


// CRUD

//Read
//1 
// console.log(menu)

//2 
// console.log(menu.length)
// for(let i = 0; i < menu.length; i++) {
//     console.log(menu[i])
// }

//3
// menu.forEach((value,index) => {
//     console.log(`${index+1}. ${value}`)
// })

// Đọc 1 phần tử trong array
// console.log(menu[3])

//Update
// menu[0] = 'Bun Bo'
// console.log(menu)

// Create
// menu.push('Phở bò')
// console.log(menu)

// let userInput = prompt("Nhap vao day C/R/U").toUpperCase()

// if(userInput === 'C'){
//     let newValue = prompt("Nhap gia tri moi di ban")
//     menu.push(newValue)
// } else if (userInput === 'R') {
//     menu.forEach(value => {
//         console.log(value)
//     })
// } else if (userInput === 'U') {
//     let userIndex = prompt("Nhap chi so index zo")
//     let userValue = prompt("Nhap gia tri moi vao")
//     menu[userIndex-1] = userValue
// }

// console.log(menu)

// Delete

// console.log(menu)
// menu.splice(0,2)
// console.log(menu)

console.log(menu.indexOf('Bun'))