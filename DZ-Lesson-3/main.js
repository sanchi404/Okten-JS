// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let arr =['hello','world','host','CSS','js','123', 'name', 'skills','age','id']

for (let i =0; i< arr.length; i++) {
    document.write(`<div>${arr[i]}</div>`);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>${i}</div>`);
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let a = [ "apple", "sunset", "ocean", "mountain", "cloud",
    "guitar", "pencil", "notebook", "elephant", "river",
    "coffee", "keyboard", "mirror", "window", "island",
    "cactus", "firework", "horizon", "butterfly", "diamond"]

let fRuCtIs = 0

while (fRuCtIs < a.length) {
    document.write(`<h1>${a[fRuCtIs]}</h1>`);
    fRuCtIs++
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let fRut = 0

while (fRut < 20) {
    document.write(`<h1>${fRut}</h1>`);
    fRut++
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);

for (let x = 0; x < listOfItems.length; x++) {
    document.write(`<li>${listOfItems[x]}</li>`);
}

document.write(`</ul>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту





let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOiRmmwDSbHZinKufeeBkcsv4ELJwYA1tN9D6_1SdfgGsDwRMn0yXN3dZQQ3INkT8N81g&usqp=CAU'
    },
];

for (let xx = 0; xx < products.length; xx++) {
    document.write(`<div class="product-card">
            <h3 class="product-title">${products[xx].title}. Price - ${products[xx].price}</h3>
            <img src="${products[xx].image}" alt="${products[xx].title}" class="product-image">
        </div>`);
}


//#4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

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

for (let xxx = 0; xxx < users.length; xxx++) {
    if (users[xxx].status === true){
        document.write(`${users[xxx].name} - ${users[xxx].status}<br>`);
    }
    if(users[xxx].status === false){
        document.write(`${users[xxx].name} - ${users[xxx].status}<br>`);
    }
    if (users [xxx].age > 30){
        document.write(`${users[xxx].name} - Age: ${users[xxx].age}<br>`)
    }

}
