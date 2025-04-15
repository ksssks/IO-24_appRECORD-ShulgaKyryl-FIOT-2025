// Таблиця 1. Завдання 2:
function getProductDetails(productId, successCallback, errorCallback) {
    const products = {
        1: { name: "Мотоциклетний шолом", price: 250, category: "Захист" },
        2: { name: "Куртка для мотоциклістів", price: 180, category: "Одяг" },
        3: { name: "Рукавички мотоциклетні", price: 50, category: "Аксесуари" },
    };

    if (products[productId]) {
        successCallback(products[productId]);
    } else {
        errorCallback(`Товар з ID ${productId} не знайдено.`);
    }
}

getProductDetails(1,
    (product) => console.log("Товар знайдено:", product),
    (error) => console.error("Помилка:", error)
);

getProductDetails(5,
    (product) => console.log("Товар знайдено:", product),
    (error) => console.error("Помилка:", error)
);

// Таблиця 1. Завдання 4:
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримуємо поточну дату
const today = new Date();

// Фільтруємо міста, де концерт ще не відбувся, сортуємо за датою та отримуємо масив назв міст
const upcomingCities = Object.entries(concerts)
    .filter(([city, date]) => date > today)
    .sort((a, b) => a[1] - b[1])
    .map(([city]) => city);

console.log(upcomingCities);

// Таблиця 1. Завдання 6:
const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const applyDiscount = (medicines) =>
    medicines.map((med, index) => ({
        id: index + 1,
        name: med.name,
        price: med.price > 300 ? +(med.price * 0.7).toFixed(2) : med.price, // Знижка 30% якщо більше 300 грн
    }));

const updatedMedicines = applyDiscount(medicines);
console.log(updatedMedicines);

// Таблиця 1. Завдання 8:
function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = () => this.items;

    this.addItem = (item) => {
        this.items.push(item);
    };

    this.removeItem = (item) => {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);

console.log(storage.getItems()); // ["apple", "banana", "mango"]

storage.addItem("orange");
console.log(storage.getItems()); // ["apple", "banana", "mango", "orange"]

storage.removeItem("banana");
console.log(storage.getItems()); // ["apple", "mango", "orange"]

// Таблиця 1. Завдання 9:
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const countTags = (tweets) =>
    tweets
        .flatMap(({ tags }) => tags) // Об'єднуємо всі теги в один масив
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1; // Збільшуємо кількість тегів
            return acc;
        }, {});

const tagCount = countTags(tweets);
console.log(tagCount);

// Таблиця 1. Завдання 10:
function checkBrackets(str) {
    const stack = [];
    const bracketsMap = { ')': '(', '}': '{', ']': '[' };

    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(checkBrackets("function test() { return (a + b) * [c]; }")); // true
console.log(checkBrackets("function test() { return (a + b * [c]; }")); // false
console.log(checkBrackets("{[(])}")); // false
console.log(checkBrackets("{[()]}")); // true

// Таблиця 2. Завдання 2
const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const hasYoungPerson = people.some(person => person.age < 20);

console.log(hasYoungPerson); // true

// Таблиця 2. Завдання 4
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// Таблиця 2. Завдання 6

const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const sortedUsers = users.sort((a, b) => a.age - b.age);

console.log(sortedUsers);
// [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}]

// Таблиця 2. Завдання 7

class Calculator {
    constructor() {
        this.value = 0; // Початкове значення
    }

    // Встановлює початкове значення
    number(value) {
        this.value = value;
        return this;
    }

    // Повертає поточний результат
    getResult() {
        return this.value;
    }

    // Додає value до поточного значення
    add(value) {
        this.value += value;
        return this;
    }

    // Віднімає value від поточного значення
    subtract(value) {
        this.value -= value;
        return this;
    }

    // Ділить поточне значення на value (перевіряємо на 0)
    divide(value) {
        if (value === 0) {
            throw new Error("Ділення на нуль неможливе!");
        }
        this.value /= value;
        return this;
    }

    // Множить поточне значення на value
    multiply(value) {
        this.value *= value;
        return this;
    }
}

// Приклад використання
const calc = new Calculator();

const result = calc
    .number(10)   // Встановлюємо початкове значення 10
    .add(5)       // Додаємо 5 (10 + 5 = 15)
    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
    .getResult(); // Отримуємо результат: 24

console.log(result); // 24