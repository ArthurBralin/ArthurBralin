// Задание 1: Ввод данных пользователя

let user = {};
user.name = prompt("Как вас зовут?");
user.age = +prompt("Сколько вам лет?");
user.isMale = confirm("Вы мужчина? Нажмите 'ОК', если да, или 'Отмена', если нет.");
console.log("Задание 1: " + user.name + ", возраст: " + user.age + ", мужчина: " + (user.isMale ? "да" : "нет")); 

// Задание 2: Работа с числами и if..else

let num = +prompt("Введите число:");
if (num === 0) {
    alert(0);
} else if (num === 1) {
    alert(1);
} else if (num === 2 || num === 3) {
    alert("2,3");
} else {
    alert("Число не входит в диапазон задач.");
}

// Задание 3: Переписанный if на switch

let a = +prompt("Введите число a?");
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2,3");
        break;
    default:
        alert("Число не входит в диапазон задач.");
}

// Задание 4: Сумма четных чисел от 1 до 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Задание 4: Сумма четных чисел от 1 до 100 = " + sum);

// Задание 5: Переписанный цикл for на while

let i = 0;
while (i < 3) {
    alert("number " + i + "!");
    i++;
}