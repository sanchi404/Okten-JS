// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

//
let arr = [1, 2, 3, 4, "Js", 3.14, "oct", 12, 13, 14]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj  ={title: "Gary Potter", pageCount: 100, genre: "Fantastic"}
let obj1 ={title: "Woe of the Mind", pageCount: 220, genre: "Comedy"}
let obj2 ={title: "Human destiny", pageCount: 30, genre: "Psychological drama"}

console.log(obj,obj1,obj2);

//- Створити 3 об'єкти які описують книги. Поля об'єкту
// : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let object = { title: "Gary Potter", pageCount: 100, genre: "Fantastic", authors:[{name: "J.K. Rowling", age: 58}]}
let object1 = { title: "Woe of the Mind", pageCount:220, genre: "Comedy", authors:[{name: "John Doe", age: 45 }]}
let object2 = { title: "Human destiny", pageCount: 30, genre: "Psychological drama", authors:[{name: "Jane Smith", age: 38 }]}
console.log(object,object1, object2);


//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr1 =[{name:"Gary", username:"Potter", password:"123"}];
let arr2 =[{name:"Genre", username:"Star", password:"456"}];
let arr3 =[{name:"Lukas", username:"Tramp", password:"789"}];
let arr4 =[{name:"Alex", username:"Golden", password:"101112"}];
let arr5 =[{name:"Gary", username:"Fix", password:"131415"}];
let arr6 =[{name:"Nic", username:"Project", password:"161718"}];
let arr7 =[{name:"Timo", username:"Wood", password:"192021"}];
let arr8 =[{name:"Samir", username:"Killer", password:"222324"}];
let arr9 =[{name:"Tanas", username:"Hand", password:"252627"}];
let arr10 =[{name:"Graves", username:"Gun", password:"282930"}];

console.log(arr1[0].password);
console.log(arr2[0].password);
console.log(arr3[0].password);
console.log(arr4[0].password);
console.log(arr5[0].password);
console.log(arr6[0].password);
console.log(arr7[0].password);
console.log(arr8[0].password);
console.log(arr9[0].password);
console.log(arr10[0].password);

//- описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів

let weather =[
    {day:"Monday",morningTemp: 5, dayTemp: 7, eveningTemp: 1},
    {day: "Tuesday",morningTemp: 6, dayTemp: 8, eveningTemp: 2},
    { day: "Wednesday", morningTemp: 7, dayTemp: 9, eveningTemp: 3 },
    { day: "Thursday", morningTemp: 8, dayTemp: 10, eveningTemp: 4 },
    { day: "Friday", morningTemp: 9, dayTemp: 11, eveningTemp: 5 },
    { day: "Saturday", morningTemp: 10, dayTemp: 12, eveningTemp: 6 },
    { day: "Sunday", morningTemp: 11, dayTemp: 13, eveningTemp: 7 }
]


//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
// інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = Number(prompt("Enter any number"));

if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


debugger
let time = Number(prompt("Введите число от 0 до 59"));

if (time >= 0 && time <= 14) {
    console.log("Первая четверть");
} else if (time >= 15 && time <= 29) {
    console.log("Вторая четверть");
} else if (time >= 30 && time <= 44) {
    console.log("Третья четверть");
} else if (time >= 45 && time <= 59) {
    console.log("Четвертая четверть");
} else {
    console.log("Ошибка: введите число от 0 до 59!");
}

//- У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = Number(prompt("Введите число от 0 до 31"))

if (day >= 0 && day <= 10) {
    console.log("Первая половина декады")
} else if (day >= 11 && day <= 20) {
    console.log("Вторая половина декады")
} else if (day >= 21 && day <= 31) {
    console.log("Третья половина декады")
}

//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let shadow = prompt("Введите день недели")
switch (shadow) {
    case "Monday":
        console.log("There's a 19:00 study session at the OKTEN school.")
        break;
    case "Tuesday":
        console.log("Doing homework and watching courses today.")
        break;
    case "Wednesday":
        console.log("There's a 19:00 study session at the OKTEN school.")
        break;
    case "Thursday":
        console.log("Doing homework and watching courses today.")
        break;
    case "Friday":
        console.log("There's a 19:00 study session at the OKTEN school.");
        break;
    case "Saturday":
        console.log("For the 10:00 a.m. English class")
        break;
    case "Sunday":
        console.log("We can rest and do homework in the evening")
        break;
}


//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let user1 = Number(prompt("Enter number"))
let user2 = Number(prompt("Enter number"))
if (user1 > user2) {
    console.log("Число от user1 больше, чем от user2:", user1);
} else if (user1 < user2) {
    console.log("Число от user2 больше, чем от user1:", user2);
} else {
    console.log("Числа от user1 и user2 равны между собой:", user1, user2);
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"
//  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xxx = prompt("Введите любое значение")
if (!xxx || xxx === "0") {
    xxx = "default";
}

console.log(x);


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
debugger
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер")
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер")
}