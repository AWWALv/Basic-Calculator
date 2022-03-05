let num1 = 8
let num2 = 10
let num3 = 12

document.getElementById("number1").textContent = num1
document.getElementById("number2").textContent = num2
document.getElementById("number3").textContent = num3

let sumEL = document.getElementById("sum-el")

function add(){
    let result = num1 + num2 + num3
    sumEL.textContent = "SUM :"+ " " + result

}
function subtract(){
    let result = num1 - num2 - num3
    sumEL.textContent = "SUM :"+ " " + result

}
function divide(){
    let result = num1 / num2 / num3
    sumEL.textContent = "SUM :"+ " " + result

}
function multiply(){
    let result = num1 * num2 * num3
    sumEL.textContent = "SUM :"+ " " + result

}