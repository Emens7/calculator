
const calculator = document.querySelector('.calculator');

const keys = document.querySelector('.calculator__keys');

const display = document.querySelector('.calculator__input');


keys.addEventListener('click', e => {

    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        const calculate = (n1, operator, n2) => {
            let result = ''
            
            if (operator === 'add') {
              result = parseFloat(n1) + parseFloat(n2)
            } else if (operator === 'subtract') {
              result = parseFloat(n1) - parseFloat(n2)
            } else if (operator === 'multiply') {
              result = parseFloat(n1) * parseFloat(n2)
            } else if (operator === 'divide') {
              result = parseFloat(n1) / parseFloat(n2)
            }
            
            return result
          }

        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }
            


        if (!action) {
            console.log('number key!')
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed');
            
            calculator.dataset.previousKeyType = 'operator';

            const previousKeyType = calculator.dataset.previousKeyType

                if (!action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
                }

                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action   

            console.log('operator key!')
          }

          if (action === 'decimal') {
            console.log('decimal key!')
          }
          
          if (action === 'clear') {
            console.log('clear key!')
          }
          
          if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            display.textContent = calculate(firstValue, operator, secondValue)
            

            console.log('equal key!')
          }
    }
})

// Műveletek

const addition = (x, y) =>  x + y;

const subtraction = ( x, y) => x - y;

const multiplication = (x, y) => x * y;

const division = (x, y) => x / y;