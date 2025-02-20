//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'


let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';
console.log(a.length,b.length,c.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let q = 'hello world';
let w = 'lorem ipsum';
let e = 'javascript is cool';
console.log(a.toUpperCase(),b.toUpperCase(),c.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let r = 'HELLO WORLD'
let t = 'LOREM IPSUM'
let y = 'JAVASCRIPT IS COOL'
console.log(a.toLowerCase(),b.toLowerCase(),c.toLowerCase());


//#0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.replaceAll(' ',''))


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
let split = str1.split(' ');
console.log(split)

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


arrMap = [10,8,-7,55,987,-1011,0,1050,0]
let mapArr = arrMap.map(item => String(item));
console.log(mapArr);





//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];
m = nums.sort((a,b)=> a-b);
let nums2 = [11,21,3];
p = nums2.sort((a,b)=> b-a);
console.log(m,p)

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}
sortNums([1, 2, 3], 'ascending');
sortNums([1, 2, 3], 'descending');

console.log(sortNums([11, 21, 3], 'descending'));
console.log(sortNums([11, 21, 3], 'ascending'));


// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(coursesAndDurationArray);

let xxx = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(xxx);


let xxx1 = coursesAndDurationArray.map(function(item, index) {
    return {
        title: item.title,
        monthDuration: item.monthDuration,
        id: index + 1,
    };
})

console.log(xxx1)


// #bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }



// let suits = ['spade', 'diamond','heart', 'clubs']
// let values = ['6','7', '8', '9', '10', 'ace','jack','queen','king']
// let cards= []
// for (let suit of suits) {
//     for (let item of values) {
//         const card = ({cardSuit: suit, value: item});
//         if (suit === 'heart'|| suit === 'diamond') {
//             card.collor = 'red';
//         }else {
//             card.collor = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
//
// console.log(cards.find(card => card.value === 'ace'&& card.cardSuit === 'spade'));
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.collor === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));


//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }



let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards = [];

for (let suit of suits) {
    for (let item of values) {
        const card = { cardSuit: suit, value: item };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}

console.log(cards);

const groupedBySuits = cards.reduce((acc, card) => {
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'clubs':
            acc.clubs.push(card);
            break;
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedBySuits);

//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log("Courses with SASS:", coursesWithSass);

const coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log("Courses with Docker:", coursesWithDocker);