'use strict';
class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        if (!this.isValidOperator(znak)) {
            console.log("Неправильний оператор! Введіть один з: + - / * %");
            return;
        }

        const confirmMessage = `Ви хочете зробити дію ${znak} з числами ${X} і ${Y}? (так/ні)`;
        const confirmation = prompt(confirmMessage);

        if (confirmation.toLowerCase() === 'так') {
            const result = this.calculate(X, Y, znak);
            console.log(`Результат: ${result}`);
        } else {
            this.input();
        }
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
            default:
                return null;
        }
    }

    input() {
        const X = +prompt("Введіть число X:");
        const Y = +prompt("Введіть число Y:");
        const znak = prompt("Введіть операцію (+ - / * %):");

        const obj = { X, Y, znak };
        this.check(obj);
    }

    isValidOperator(znak) {
        const operators = ['+', '-', '/', '*', '%'];
        return operators.includes(znak);
    }
}


const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);