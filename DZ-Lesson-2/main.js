// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


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