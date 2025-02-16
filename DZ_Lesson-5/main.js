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
