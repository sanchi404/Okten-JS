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
