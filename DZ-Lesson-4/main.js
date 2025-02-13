//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectangle(a,b) {
    let x = a*b;
    return x
}

console.log(rectangle(5,5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea(r){
    let x = r * r * Math.PI;
    return x
}
console.log(circleArea(5));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(r,h) {
    let x = 2 * Math.PI * r * (r + h);
    return x
}
console.log(cylinderArea(5,2));

//- створити функцію яка приймає масив та виводить кожен його елемент

function array(user) {
    for (let i = 0; i < user.length; i++) {
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


document.write(`<ul>`);

function nav2 (li,sum){
    for (let i = 0; i < sum; i++) {
        document.write('<li>' + li + '</li>');
    }
}

nav2("Okten",10);


document.write(`</ul>`);


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
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] < min) {
            min = elements[i];
        }
    }
    return min;
}



let result = findMinElement ([111,21,12,53,4,5,7,8,9,10]);
console.log(result);

// arr = [10,1,2,3,4,5,6,7,8,9,10];
// m = arr.sort((a, b) => a - b).shift();
// console.log(m);
