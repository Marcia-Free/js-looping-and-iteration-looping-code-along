// Code your solutions in this file



function writeCards(namesArray, event) {
    let messageArray = []

    for (let i = 0; i < namesArray.length; i++) {
        messageArray.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    return messageArray
}

function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i)
        i--
    }
}