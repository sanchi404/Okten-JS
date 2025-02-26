// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function xxx (Users) {

    let tempObject = {};
    let NewFunction = {} // Тут была подсказка так как надо был создать пустой обьект для функции

    for (let user in Users) {
        if (Users[user] === undefined) {
            tempObject[user] = "undefined";
        } else if (isNaN(Users[user]) && typeof Users[user] === "number") {  // тут тоже была подсказка от Gpt что typeof Users[user] === "number" гарантирует, что isNaN() проверяет только числа.
            tempObject[user] = null;
        }else if (typeof Users[user] === "function") {     //тут подсказал Gpt потому что забыл указать за функцию
            NewFunction[user] = Users[user];
        }else {
            tempObject[user] = Users[user];
        }
    }



    let copyUsers = JSON.stringify(Users);
    let newUsers = JSON.parse(copyUsers);

    for (let key in NewFunction) {
        newUsers[key] = NewFunction[key];
    }

    return newUsers;
}

let Users = {
    name: 'John',
    email: 'john@example.com',
    password: 'password',
    phone: 'phone',
    skills:['js','css'],
    age: null,
    address: undefined,
    balance: NaN,
    sayHello: function () {
        console.log('Hello');
    }
}

let copiedUsers = xxx(Users);
console.log(copiedUsers)
copiedUsers.sayHello();
console.log("Address:", copiedUsers.address);
console.log("Balance:", copiedUsers.balance);


// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newCourses = coursesAndDurationArray.map((mas, index) => ({ ...mas, id: index }));
console.log(newCourses)

// тут все понятно было просто забыл как присвоить корректно id значения по этому пришлось еще раз пересмотреть урок про Map =)