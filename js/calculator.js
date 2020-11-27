const input = document.querySelector(".calculator__input");

const equalButton = document.querySelector(".key--equal");

const inputButtons = document.querySelectorAll(".input-btn");

const deleteButtons = document.querySelector(".delete")

const addition = (x, y) =>  x + y;

const subtraction = ( x, y) => x - y;

const multiplication = (x, y) => x * y;

const division = (x, y) => x / y;

const calculate = (operator, leftOperand, rightOperand) => {
    
    if (operator === '+') {

      return addition(leftOperand, rightOperand);

    } else if (operator === '-') {

        return subtraction(leftOperand, rightOperand);

    } else if (operator === '*') {

        return multiplication(leftOperand, rightOperand);

    } else if (operator === '/') {

        return division(leftOperand, rightOperand);

    }
    
};

const equalSign = () => {
    
    const regex = /[+\-*\/]/g;
    const numbers = input.value.split(regex).filter(str => str !== "");
    console.log(numbers);

    const operators = input.value.match(regex);
    console.log(operators);

    if (numbers.length-1 !== operators.length ) {
        input.value = "Hibás bemenet!"; 
        return;
    }

    let left = Number(numbers[0]);

    for (let i = 1; i < numbers.length; i += 1) {
        left = calculate(operators[i - 1], left, Number(numbers[i]));
    }

    input.value = left;
}


equalButton.addEventListener('click', equalSign);

inputButtons.forEach(value => {
    
    value.addEventListener('click', () => {
        input.value += value.innerText
    })
})

deleteButtons.addEventListener('click', () => {
    input.value = '';
})
