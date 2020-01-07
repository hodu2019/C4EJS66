let dictionary = {
    'any': 'Anh người yêu',
    'ons': 'One Night Stand',
    'fwb': 'Friend with benefit',
    '419': 'For one Night',
}

while(true){
    Object.keys(dictionary).forEach((value,index)=> {
        console.log(`${index + 1}. ${value}`)
    })
    let userWordInput = prompt("Nhập từ mà bạn muốn tra ân E để exit hihi").toLowerCase()
    if(userWordInput === 'e'){
        break
    }
    if(userWordInput in dictionary){
        console.log(dictionary[userWordInput])
    } else {
        let userInput = prompt("Bạn muốn nhập từ mới không Y/N").toLowerCase()
        if(userInput === 'y'){
            let newValue = prompt("Nhập ý nghĩa của từ")
            dictionary[userWordInput] = newValue
        } else if(userInput === 'n'){
            console.log("Cảm ơn bạn")
        } else {
            alert("Bạn nhập sai rồi")
        }
    }
}

