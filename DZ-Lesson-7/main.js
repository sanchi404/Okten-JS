//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Petya", "Koks", "koksik@gmail.com", "777"),
    new User(2, "Nikita", "Shram", "shram@gmail.com", "666"),
    new User(3, "Vova", "Bash", "ebashvova@gmail.com", "111"),
    new User(4, "Sveta", "Light", "svetlana@gmail.com", "123"),
    new User(5, "Kostya", "Garash", "kostyagar@gmail.com", "101"),
    new User(6, "Samir", "Chan", "samirchan@gmail.com", "999"),
    new User(7, "Lera", "Gur", "gur@gmail.com", "321"),
    new User(8, "Ira", "Prihod", "prihod@gmail.com", "555"),
    new User(9, "Alesha", "Slyga", "Pismootknyazya@gmail.com", "876"),
    new User(10, "Iliya", "Bras", "barsik@gmail.com", "707")
];

console.log(users);


//#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)


let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let filteredUsers2 = users.sort((a, b) => b.id - a.id);
console.log(filteredUsers2);

//#nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


function Client (id, name, surname , email, phone,order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
        new Client(1, "Petya", "Koks", "koksik@gmail.com", "777", ["Laptop", "Mouse"]),
        new Client(2, "Nikita", "Shram", "shram@gmail.com", "666", ["Phone"]),
        new Client(3, "Vova", "Bash", "ebashvova@gmail.com", "111", ["Headphones", "Charger"]),
        new Client(4, "Sveta", "Light", "svetlana@gmail.com", "123", ["Keyboard"]),
        new Client(5, "Kostya", "Garash", "kostyagar@gmail.com", "101", ["Monitor", "Cable"]),
        new Client(6, "Samir", "Chan", "samirchan@gmail.com", "999", ["Tablet"]),
        new Client(7, "Lera", "Gur", "gur@gmail.com", "321", ["Mouse", "USB Drive"]),
        new Client(8, "Ira", "Prihod", "prihod@gmail.com", "555", ["Smartwatch"]),
        new Client(9, "Alesha", "Slyga", "Pismootknyazya@gmail.com", "876", ["Powerbank", "Earbuds"]),
        new Client(10, "Iliya", "Bras", "barsik@gmail.com", "707", ["Speakers", "Webcam"])
];

console.log(clients);


//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);


//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, made_in, year, max_speed, engine_displacement) {
    this.model = model;
    this.made_in = made_in;
    this.year = year;
    this.max_speed = max_speed;
    this.engine_displacement = engine_displacement;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
    };

    this.info = function() {
        console.log(`model - ${this.model}, made_in - ${this.made_in}, year - ${this.year}, max_speed - ${this.max_speed}, engine_displacement - ${this.engine_displacement}`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.max_speed = this.max_speed + newSpeed;
        console.log(`Нова максимальна швидкість: ${this.max_speed} км/год`);
    }

    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`${this.year} – рік автомобіля`)

    }

    this.addDriver = function(driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля.`);
    };
}

let myCar = new Car("BMW", "Germany", 2020, 200, 2.0);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(50);
myCar.changeYear(2021);
myCar.addDriver({ name: "Jason Statham", age: 57 });
console.log(myCar);


//#5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class BaseCar {
    constructor(model, made_in, year, max_speed, engine_displacement) {
        this.model = model;
        this.made_in = made_in;
        this.year = year;
        this.max_speed = max_speed;
        this.engine_displacement = engine_displacement;
    }
}

class CarAdvanced extends BaseCar {
    drive() {
        console.log(`їдемо зі швидкістю ${this.max_speed} км на годину`);
    }

    info() {
        console.log(`model - ${this.model}, made_in - ${this.made_in}, year - ${this.year}, max_speed - ${this.max_speed}, engine_displacement - ${this.engine_displacement}`);
    }

    increaseMaxSpeed(newSpeed){
    this.max_speed += newSpeed;
    console.log(`Нова максимальна швидкість: ${this.max_speed} км/год`)
    }

    changeYear(newValue){
        this.year = newValue;
        console.log(`${this.year} – рік автомобіля`)
    }

    addDriver(driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий до автомобіля.`);
    }
}


let myCar1 = new CarAdvanced("AUDI", "Germany", 2024, 220, 3.0);
console.log(myCar1);

myCar1.drive();
myCar1.info();
myCar1.increaseMaxSpeed(50);
myCar1.changeYear(2023);
myCar1.addDriver({ name: "Dwayne Johnson", age: 52 });


//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella("Маша", 18, 36),
    new Cinderella("Оля", 20, 37),
    new Cinderella("Катя", 19, 38),
    new Cinderella("Даша", 21, 35),
    new Cinderella("Лена", 22, 36),
    new Cinderella("Аня", 17, 39),
    new Cinderella("Юля", 23, 37),
    new Cinderella("Света", 20, 38),
    new Cinderella("Наташа", 19, 35),
    new Cinderella("Ира", 21, 39)
];

console.log(cinderellas);

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let prince = new Prince("Filip", 21, 39);

for (let item of cinderellas) {
    if (item.footSize === prince.shoeSize) {
        console.log(`Принц ${prince.name} знайшов свою Попелюшку! Це ${item.name}, їй ${item.age} років.`);
        break;
    }
}


let xa = [1,2,3,5,6,7,8,(3*3)]
console.log(xa);


//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function(callback) {
    for (let item of this) {
        callback(item);
    }
};

[23, 43, 22, 21].myForEach((mass) => console.log(mass));

Array.prototype.myFilter = function(call) {
    const arr = [];
    for (let item of this) {
        if (call(item)) {
            arr.push(item);
        }
    }
    return arr;
};


// з filter
const users1 = [
    { id: 1, name: "Артем", age: 25, email: "artem@mail.com" },
    { id: 2, name: "Ольга", age: 30, email: "olga@mail.com" },
    { id: 3, name: "Иван", age: 28, email: "ivan@mail.com" },
    { id: 4, name: "Екатерина", age: 22, email: "ekaterina@mail.com" },
    { id: 5, name: "Алексей", age: 35, email: "alexey@mail.com" },
    { id: 6, name: "Мария", age: 27, email: "maria@mail.com" },
    { id: 7, name: "Дмитрий", age: 40, email: "dmitry@mail.com" },
    { id: 8, name: "Татьяна", age: 24, email: "tatyana@mail.com" },
    { id: 9, name: "Сергей", age: 32, email: "sergey@mail.com" },
    { id: 10, name: "Наталья", age: 29, email: "natalya@mail.com" }
];

console.log(users1);

const filteredUsers1 = users1.myFilter(user => user.id === 1);

console.log(filteredUsers1);