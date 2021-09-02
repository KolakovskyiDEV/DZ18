// Вам нужно запросить у пользователя число. Добавить условие при котором число будет выводиться (через alert) с правильным словом: «год», «года» или «лет». Т.е. «29 лет» или «4 года».

// Ограничений по возрасту — нет, 0 тоже подходит.

// Также сделайте простую проверку, что пользователь ввел число.


let yearPerson = +prompt('Введите год')
// function checkValue(yearPerson)
// if (isNaN(yearPerson)) {
//     return false
// } else {
//     return true
// }
yearPerson += '';

let obj = {
    yearPerson,
}
console.log(obj.yearPerson.length);
console.log(obj.yearPerson[obj.yearPerson.length - 1]);

if (obj.yearPerson.length === 2 && obj.yearPerson[0] == 1) {
    switch (obj.yearPerson[obj.yearPerson.length - 1]) {
        case '0':
            alert(obj.yearPerson + ' лет');
            break;
        case '1':
            alert(obj.yearPerson + ' лет');

            break;
        case '2':
            alert(obj.yearPerson + ' лет');

            break;
        case '3':
            alert(obj.yearPerson + ' 13');

            break;
        case '4':
            alert(obj.yearPerson + ' 14');

            break;
        default:
            alert(obj.yearPerson + ' лет');
    }
} else {
    switch (obj.yearPerson[obj.yearPerson.length - 1]) {
        case '0':
            alert(obj.yearPerson + ' лет');
            break;
        case '1':
            alert(obj.yearPerson + ' год');

            break;
        case '2':
            alert(obj.yearPerson + ' года');

            break;
        case '3':
            alert(obj.yearPerson + ' года');

            break;
        case '4':
            alert(obj.yearPerson + ' года');

            break;
        default:
            alert(obj.yearPerson + ' лет');
    }
}







// 0 лет
// 1 год
// 2 года
// 3 года
// 4 года
// 5 лет
// 6 лет
// 7 лет
// 8 лет
// 9 лет
// 10 лет
// 11 лет
// 12 лет
// 13 лет
// 14 лет
// 15 лет
// 16 лет
// 17 лет
// 18 лет
// 19 лет
// 20 лет
// 21 год
// 22 года
// 23 года
// 24 года
// 25 лет
// 26 лет
// 27 лет
// 28 лет
// 29 лет
// 30 лет
// 31 год
// 32 года
// 33 года
// 34 года
// 35 лет
// 36 лет
// 37 лет
// 80 лет
// 81 год
// 82 года
// 83 года
// 84 года
// 85 лет
// 100 лет
// 101 год
// 102 года
// 103 года
// 104 года
// 105 лет
// 230 лет
// 231 год
// 232 года
// 233 года
// 234 года
// 235 лет

