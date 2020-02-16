// let p = document.getElementById('text')

// // console.log(p)
// console.dir(p)
// console.log(p.innerText)

// p.innerText = 'Duc dep zai'
// console.log(p.innerText)
// // let number = document.getElementsByClassName('number')
// // console.log(number)

// let button = document.getElementById('push')

// button.addEventListener('click', () => {
//     console.log('click em roi em do')
// })

let menu = document.getElementById('menu')
let userInput = document.getElementById('user-input')
let button = document.getElementById('button')
let del = document.getElementById('delete')
console.dir(menu)
console.dir(userInput)
console.dir(button)

button.addEventListener('click', ()=>{
    console.dir(userInput.value)
    console.dir(menu)
    menu.innerHTML += `<li>${userInput.value}</li>`
    userInput.value =''
})

del.addEventListener('click',()=>{
    
    // console.dir(menu)
    // menu.removeChild(menu.children[menu.children.length-1])
    // menu.removeChild(menu.lastElementChild)
    for(let i = 0; i< menu.children.length; i++){
        if(userInput.value == menu.children[i].innerText){
            menu.removeChild(menu.children[i])
        }
    }
    // (menu.children[0].innerText)
    // console.log()
})