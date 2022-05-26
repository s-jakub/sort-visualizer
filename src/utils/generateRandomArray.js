const fillArray = amountNumber => {
   
    let arrayToFill = [];
    for(let i = 1; i <= amountNumber; i++) {
        arrayToFill.push(i)
    }

    return arrayToFill;
}

export const generateRandomNumberArray = amountNumber => {
    let arrayToShuffle = fillArray(amountNumber);
    let array = [];

    for(let a = arrayToShuffle, i = a.length; i--; ) {
        let random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        array.push(random)
    }

    return array;
}

export const sleep = (ms) => {

    return new Promise(resolve => setTimeout(resolve, ms));
  
}