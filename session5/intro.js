// // let x = Number(prompt("Nhập số X"))
// // let y = Number(prompt("Nhập số y"))
// // let op = prompt("Nhập phép tính")

// // let result
// // switch(op) {
// //     case "+":
// //          result = x + y
// //          break
// //     case "-":
// //         result = x - y
// //         break
// //     case "*":
// //         result = x * y
// //         break
// //     case "/":
// //         result = Math.floor(x / y)
// //         break
    
// // }

// // console.log(result)

// let x = Math.floor(Math.random() * 10)
// let y = Math.floor(Math.random() * 10)
// let errors = [-2,-1,0,1,2]
// let errorNumber = errors[Math.floor(Math.random()*errors.length)]
// let ops = ["+", "-"]
// let op = ops[Math.floor(Math.random()*ops.length)]
// let check
// let result
// console.log(errorNumber)


// if(op === "+"){
//     result = x + y + errorNumber
// } else {
//     result = x - y + errorNumber
// }
// console.log(`${x} ${op} ${y} = ${result}`)


// // if(errorNumber === 0) {
// //     if(userInput === "t"){
// //         check = true
// //     } else if(userInput === 'f') {
// //         check = false
// //     }
// // } else if (userInput === "f") {
// //     if(userInput === "t"){
// //         check = false
// //     } else {
// //         check = true
// //     }
// // }

// // if(check){
// //     console.log("Được điểm rùi")
// // } else{
// //     console.log("wrong")
// // }





function hello (name) {
    console.log("Hello", name)
}

let tenNguoi = "Tran Duc Nam"

hello("Duc")
hello("Nam")
hello("Viet")
hello(tenNguoi)

function calc (x,y){
    return x + y
}

// let result = calc(5,6)

// if (calc(10,20) < 20){
//     console.log("Tuoi nho")
// } else {
//     console.log("Tuoi Lon")
// }

console.log(result)

const SayByeBye = (name) => {
    return `Say bye bye ${name}`
}

// console.log(SayByeBye("Duc"))

// setTimeout(() => {
//     console.log("hihi")
// },1000)
// console.log("haha")

