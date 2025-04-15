// Завдання 2
function swapValues() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}
// Завдання 4
function resizeSquare(change) {
    const square = document.getElementById('square');
    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;

    const newWidth = currentWidth + change;
    const newHeight = currentHeight + change;

    // Щоб уникнути занадто малого розміру
    if (newWidth > 0 && newHeight > 0) {
        square.style.width = newWidth + 'px';
        square.style.height = newHeight + 'px';
    }
}
// Завдання 6
function doubleValues() {
    const listItems = document.querySelectorAll('#numberList li');
    listItems.forEach(item => {
        const currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
}
// Завдання 7
// Знаходимо головний список категорій
const categoriesList = document.querySelectorAll('#categories .item');

// 1. Виводимо кількість категорій
console.log(`Кількість категорій: ${categoriesList.length}`);

// 2. Для кожної категорії виводимо заголовок та кількість піделементів
categoriesList.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});

// Завдання 8
// Знаходимо форму за класом
const loginForm = document.querySelector('.login-form');

// Додаємо обробник події submit
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 2. Не перезавантажуємо сторінку

    const { email, password } = loginForm.elements;

    // 3. Перевіряємо, чи всі поля заповнені
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return;
    }

    // 4. Збираємо дані у об'єкт
    const formData = {
        email: email.value.trim(),
        password: password.value.trim()
    };

    // 5. Виводимо в консоль та очищаємо форму
    console.log(formData);
    loginForm.reset();
});
// Завдання 9
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});
// Завдання 10
// Функція для створення колекції елементів
function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');

    // Очищаємо колекцію перед рендером нових елементів
    boxesContainer.innerHTML = '';

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = 30 + i * 10; // Відступ для кожного наступного елемента на 10px більше
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor(); // Випадковий колір фону
        div.style.margin = '5px';
        div.style.display = 'inline-block';
        boxesContainer.appendChild(div);
    }
}

// Функція для очищення колекції
function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Очищаємо весь вміст
}

// Отримуємо елементи з DOM
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

// Обробник події для кнопки Create
createButton.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    // Перевірка на коректність введеного значення
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; // Очищуємо інпут
    } else {
        alert('Будь ласка, введіть число від 1 до 100');
    }
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener('click', destroyBoxes);