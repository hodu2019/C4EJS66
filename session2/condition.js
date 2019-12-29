// console.log("Conditional Statement")
// let yourAge = Number(prompt("Điền tuổi vào đây"))

// let result = null
// if(yourAge <= 5){
//     result = "Baby"
// } else if (yourAge < 16 ) {
//     result ="Vị Thành niên"
// } else if (yourAge < 30) {
//     result = "Thanh niên"
// } else {
//     result = "Trung niên"
// }

// console.log(result)

let username = 'c4e'
let password = 'codethechange'
let loop = true
let i = 0
while(loop){
    let userNameInput = prompt("Nhập Username")
    let userPasswordInput = prompt("Nhập Password")
    
    let result = null
    
    if(userNameInput === username && userPasswordInput === password ){
        result = 'Đăng nhập thành công'
        loop = false
    } else {
        result = 'Bạn nhập sai username hoặc password rồi'
        i++
        if(i > 2 ){
            loop = false
        }
    }
    
    alert(result)
}