// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій

//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a,b) => a*b
console.log(rectangleArea(5,2));


//- створити функцію яка обчислює та повертає площу кола з радіусом r

const circleArea = (r) => r * r * Math.PI
console.log(circleArea(2));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderArea = (r,h) => 2 * Math.PI * r * (r + h)
console.log(cylinderArea(5,1));


////- створити функцію яка приймає масив та виводить кожен його елемент

const arryArea = (user) => {
    for (let i = 0; i < user.length; i++) {
        console.log(user[i])
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

arryArea(users);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text) => {
    document.write('<p>' + text + '</p>')
}
paragraph("Hello World!");


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let element = (li) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write('<li>' + li + '</li>');
    }
    document.write('</ul>');
}

element('Привет');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let elements2 = (li,num) => {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write('<li>' + li + '</li>');
    }
    document.write('</ul>');
}

elements2("Hello World!", 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2 = (elements) => {
    document.write('<ul>');
    for (let i = 0; i < elements.length; i++) {
        document.write(`<li>${elements[i]}</li>`);
    }
    document.write('</ul>');
}

array2([10,"hello","world",true,false,223]);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let array3 = (elements) => {
    document.write('<ul>');
    for (let i = 0; i < elements.length; i++) {
        document.write(`<div>id: ${elements[i].id}, name: ${elements[i].name}, age: ${elements[i].age}</div>`);
    }
    document.write('</ul>');
}

array3([
    {id: 1, name: 'Vasya', age: 25},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Olya', age: 28}
]);


//- створити функцію яка повертає найменьше число з масиву

let array4 = (elements) => {
    let min= elements[0]
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] < min) {
            min = elements[i];
        }
    }
    return min;
}

let rusult = array4([1,21,15,263,1,2,5,9,0,112]);
console.log(rusult);

//- створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let result2 = sum([1,2,10])
console.log(result2);

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


let swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x
}

let arr = [11, 22, 33, 44];
swap(arr, 0, 3);
console.log(arr);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let choseCurrency;
    for (let item of currencyValues) {
        if(item.currency === exchangeCurrency){
            choseCurrency = item;
        }
    }
    return sumUAH / choseCurrency.value;
}
console.log(exchange(1000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'USD'));

