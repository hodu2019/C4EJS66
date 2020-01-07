
// Initial
// let person = {
//     'name':'Đức Thắng',
//     'age': 18,
//     'school': 'NEU',
//     'status': false,
// }
// console.log(person)

// //Read 1
// console.log(person.name)

// //Read 2
// let userKey = 'name'
// console.log(person[userKey])

// // Create

// person.dob = 1999
// console.log(person)

//Update
// person.status = true
// console.log(person)

// person.facebook = 'ducthang.2019'

// let userKeyInput = prompt("Nhập Key đi pạn")
// let userValueInput = prompt("Nhập value đi pạn")

// person[userKeyInput] = userValueInput

// console.log(person)

//delete


// delete person.age
// console.log(person)

let person1 = {
    'name': 'Đức Thắng',
    'days': 30,
    'hours' : 8,
    'price': 50000,
}
let person2 = {
    'name': 'Chien Thắng',
    'days': 30,
    'hours' : 8,
    'price': 50000,
}
let person3 = {
    'name': 'Bach',
    'days': 30,
    'hours' : 8,
    'price': 50000,
}
let person4 = {
    'name': 'Quan',
    'days': 30,
    'hours' : 8,
    'price': 50000,
}

let employees = [
    {
        'name': 'Đức Thắng',
        'days': 30,
        'hours' : 8,
        'price': 50000,
    },
    {
        'name': 'Chien Thắng',
        'days': 30,
        'hours' : 6,
        'price': 50000,
    },
    {
        'name': 'Bach',
        'days': 25,
        'hours' : 12,
        'price': 30000,
    },
    {
        'name': 'Quan',
        'days': 20,
        'hours' : 6,
        'price': 100000,
    }
]
// console.log(employees)

for(let i = 0; i < employees.length; i++){
    let income = employees[i].days * employees[i].hours * employees[i].price 
    console.log(income)
}

