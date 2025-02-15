//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a,b) {
    return a * b
}

console.log(rectangle(5,5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r){
    return r * r * Math.PI
}
console.log(circleArea(5));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r,h) {
    return 2 * Math.PI * r * (r + h)
}
console.log(cylinderArea(5,2));

//- створити функцію яка приймає масив та виводить кожен його елемент

function array(user) {
    for (let i = 0; i < users.length; i++) {
       console.log(user[i]);
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

array(users);


//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraph (text) {
    document.write('<p>' + text + '</p>');
}

paragraph("Привет – это мой код");

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

document.write(`<ul>`)

function nav (li){
    for (let i = 0; i < 3; i++) {
        document.write('<li>' + li + '</li>');
    }
}

nav("hello")
document.write(`</ul>`);

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write




function nav2 (li,sum){
    document.write(`<ul>`);
    for (let i = 0; i < sum; i++) {
        document.write('<li>' + li + '</li>');
    }
    document.write(`</ul>`);
}

nav2("Okten",10);




//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write




function array2 (elements){
    document.write(`<ul>`);
    for (let i = 0; i < elements.length; i++) {
        document.write(`<li>${elements[i]}</li>`);
    }
    document.write(`</ul>`);
}

array2([1, 'hello', true, 42, 'world']);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function array3 (elements){
    for (let i = 0; i < elements.length; i++) {
        document.write(`<div>id: ${elements[i].id}, name: ${elements[i].name}, age: ${elements[i].age}</div>`);
    }
}

array3([
    {id: 1, name: 'Vasya', age: 25},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Olya', age: 28}
]);

//- створити функцію яка повертає найменьше число з масиву


function findMinElement(elements){
    let min = elements[0];
    for (let i = 1; i < elements.length; i++) {
        if (elements[i] < min) {
            min = elements[i];
        }
    }
    return min;
}



let result = findMinElement ([111,21,12,53,4,5,7,8,9,10]);
console.log(result);


//- створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}




let num = sum([1,2,10,2])
console.log(num)

//- створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr,index1,index2){
    let x = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = x

}

let arr = [11, 22, 33, 44];
swap(arr, 0, 1);
console.log(arr);


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,
// [{currency:'USD',value:25},{currency:'EUR',value:42}],
// 'USD') // => 400


function exchange(sumUAH,currencyValues,exchangeCurrency){
    let choseCurrency;
    for (let item of currencyValues ){
        if (item.currency === exchangeCurrency){
            choseCurrency = item;
        }
    }
    return sumUAH / choseCurrency.value;
}

console.log(exchange(1000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'USD'));
