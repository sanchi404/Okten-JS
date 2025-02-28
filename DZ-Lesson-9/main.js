
// #8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.



let blockDiv = document.createElement("div");
blockDiv.classList.add('wrap');
blockDiv.classList.add('collapse');
blockDiv.classList.add('alpha');
blockDiv.classList.add('beta');
blockDiv.textContent = "Block";
document.body.appendChild(blockDiv);
let clonNode = blockDiv.cloneNode(true);

document.body.appendChild(clonNode);
console.log(clonNode)

console.log(blockDiv);



//#OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts','asdas','asdq3easd','123123','sadqsadas'];
let blockArr = document.createElement("ul");


arr.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element;
    blockArr.appendChild(li);
});
console.log(arr);

document.body.appendChild(blockArr);
