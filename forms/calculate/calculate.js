function calcAvgSquare(num1,num2,num3) {
    let functionAverage = (num1 + num2 + num3)/3
    let functionSquared = Math.pow(num1, 2)
    let Answer = functionAverage * functionSquared
    return Answer
}

let number1 = Number(prompt('Enter in your first number')
let number2 = Number(prompt('Enter in your second number')
let number3 = Number(prompt('Enter in your third number')

let answer = calcAvgSquare (number1, number2, number3)
console.log(`The answer is ${answer}.`)