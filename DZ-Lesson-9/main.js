
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


//#jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// for (let userInfo of coursesAndDurationArray) {
//     let h2 = document.createElement("h2")
//     h2.classList.add('userInfo');
//     h2.innerText = userInfo.title;
//     document.body.appendChild(h2);
//     console.log(h2);
//
//     let p = document.createElement("p");
//     p.classList.add('userInfo');
//     p.innerText = userInfo.monthDuration;
//     document.body.appendChild(p);
//
// }

for (let userInfo of coursesAndDurationArray) {
    let container = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.textContent = userInfo.title;
    p.textContent = userInfo.monthDuration;
    container.appendChild(h2); container.appendChild(p);
    document.body.appendChild(container);
}

//#Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for(const xxx of coursesAndDurationArray1) {
    let div = document.createElement("div");
    div.classList.add('item');
    let h1 = document.createElement("h1");
    h1.classList.add('heading');
    let p1 = document.createElement("p");
    p1.classList.add ('description');
    h1.textContent = xxx.title;
    p1.textContent = xxx.monthDuration;
    div.append(h1,p1);
    document.body.appendChild(div);
    console.log(div);
}