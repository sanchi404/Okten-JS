// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    // Вивести кожну змінну за допомогою: console.log
let a = "hello"
let b = "owu"
let c = "com"
let d = "ua"
let e = 1
let f = 10
let j = -999
let h = 123
let k = 3.14
let l = 2.7
let m = 16
let n = true
let o = false

console.log(a, b, c, d, e, f, j, h, k, l, m, n, o)


//  - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Nikita";
let middleName = "Mukhanov";
let lastName = "Andreevich";

let person = firstName + ' ' + middleName + ' ' + lastName ;
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let A = 100
console.log(typeof A);
let B = '100'
console.log(typeof B);
let C = true
console.log(typeof C);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('What is your name?');
let surname = prompt('What is your surname?');
let age = prompt('What is your age?');
console.log("User: " + name + " " + surname + ", Age: " + age);
