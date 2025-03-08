// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


const button = document.getElementsByTagName('button')[0];

button.onclick = function () {
    document.getElementById('text').remove();
}

//#j693ca8
// - створити інпут який приймає вік
// людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let divBlock = document.createElement("div");
let inputBlock = document.createElement("input");
let buttonBlock = document.createElement("button");

inputBlock.placeholder = "Enter your age";
buttonBlock.textContent = "Click Me!";

divBlock.append(inputBlock,buttonBlock);

document.body.appendChild(divBlock);

buttonBlock.onclick = function () {
    let age = Number(inputBlock.value);
    if (!age) {
        alert("Введите корректный возраст!");
        return;
    }
    if (age < 18) {
        alert('Вам нет 18 лет!')
    }else if (age >= 18) {
        alert('Доступ разрешён!')
    }
}

//#ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


let divFormBlock = document.createElement("div");
let inputFormBlock1 = document.createElement("input");
let inputFormBlock2 = document.createElement("input");
let inputFormBlock3 = document.createElement("input");
let buttonFormBlock = document.createElement("button");


inputFormBlock1.placeholder = "Enter your name";
inputFormBlock2.placeholder = "Enter your surname";
inputFormBlock3.placeholder = "Enter your age";
buttonFormBlock.textContent = "Click Here!";

divFormBlock.append(inputFormBlock1,inputFormBlock2,inputFormBlock3,buttonFormBlock);
document.body.appendChild(divFormBlock);

let resultDivBlock = document.createElement("div");

buttonFormBlock.onclick = function () {
    let name = inputFormBlock1.value;
    let surname = (inputFormBlock2.value);
    let age = Number(inputFormBlock3.value);
    resultDivBlock.textContent = `Name: ${name}, Surname: ${surname}, Age: ${age}`;

}


document.body.appendChild(resultDivBlock);


// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let lokalDivBlock = document.createElement("div");
lokalDivBlock.id = "counter";

document.body.appendChild(lokalDivBlock);

let item = +localStorage.getItem("name"); //смотрел подсказку у Сергея так как изначально поставил || 0 и оно просто мне плюсовало 1 к предыдущей единичке (01111)
item +=1;
localStorage.setItem("name", item);

lokalDivBlock.textContent = item;
document.body.appendChild(lokalDivBlock);


// #LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM



let now = new Date().toLocaleString();

let session = JSON.parse(localStorage.getItem("session")) || [];
session.push(now)
localStorage.setItem("session", JSON.stringify(session));


//створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let convert = document.createElement('div')
let inputConvert = document.createElement("input");

let resultConvert = document.createElement("div");
let resultText = document.createElement("p");

inputConvert.placeholder = "Enter Kg";

convert.appendChild(inputConvert);
convert.appendChild(resultConvert);
resultConvert.appendChild(resultText);

document.body.appendChild(convert);

inputConvert.addEventListener("input", function () {
    let kg = Number(inputConvert.value);
    let pounds = kg * 2.20462;
    resultText.textContent = `Фунты: ${pounds.toFixed(2)}`;
})




//#RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage (arrayName,objToAdd){
    let getArray = JSON.parse(localStorage.getItem(arrayName)) || {};
    getArray.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(getArray));
}

addToLocalStorage("session", { name: "Karlos", age: 18 });


