function fibo (firstNumber, secondNumber, position){
    if (position === 1){
        return firstNumber;
    } if (position === 2){
        return secondNumber;
    } if (position <= 0){
        let f1 = firstNumber, f2 = secondNumber, fi;
        for (let i=0; i >= position; i--) {
            fi = f2 - f1;
            f2 = f1;
            f1 = fi;
        }
        return fi;
    } if (position > 2){
        let f1 = firstNumber, f2 = secondNumber, fj;
        for (let i=2; i < position; i++) {
            fj = f1 + f2;
            f1 = f2;
            f2 = fj;
        }
        return fj;
    }
}

let firstNumber = +prompt('Введите Первое число последовательности Фибоначчи (любое целое число):');
    while((firstNumber.toFixed()!=firstNumber) || isNaN(firstNumber) || firstNumber == "") {
        firstNumber = +prompt('Корректно введите Первое чиисло последовательности Фибоначчи (любое целое число):');
    }
let secondNumber = +prompt('Введите Второе чиисло последовательности Фибоначчи (любое целое число):');
    while((secondNumber.toFixed()!=secondNumber) || isNaN(secondNumber) || secondNumber == "") {
        secondNumber = +prompt('Корректно введите Второе чиисло последовательности Фибоначчи (любое целое число):');
    }
let position = +prompt('Введите порядковый номер числа Фибоначчи, которое надо найти (любое целое число):');
    while((position.toFixed()!=position) || isNaN(position) || position == "") {
        position = +prompt('Корректно введите порядковый номер числа Фибоначчи, которое надо найти (любое целое число):');
    }
        
alert(`${position}-ое по порядку число в данном ряду Фибоначчи: ${fibo(firstNumber, secondNumber, position)}`);

