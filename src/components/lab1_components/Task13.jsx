import React from 'react'
import {assets} from "../../assets/assets.js";

const Task13 = () => {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Cтруктура документа</h1>
            <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">HTML-код таблиці</h2>
                <p className="leading-relaxed text-gray-700">
                    Код для підключення таблиці:
                </p>
                <div className="mb-4">
                    <img src={assets.table_tag} alt="Код table" className="w-auto h-auto rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Скріншот:
                </p>
                <div className="mb-4">
                    <img src={assets.table_example} alt="Приклад table" className="w-auto h-auto rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Теорія:
                </p>
                <p className="leading-relaxed text-gray-700">
                    Таблиця в HTML визначається тегом <code>&lt;table&gt;</code>. Для створення таблиць зазвичай
                    використовуються наступні елементи:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Тег <code>&lt;thead&gt;</code></strong>: Використовується для групування заголовків
                        таблиці. Зазвичай він містить рядок із тегами <code>&lt;th&gt;</code> для заголовків стовпців.
                    </li>
                    <li><strong>Тег <code>&lt;tbody&gt;</code></strong>: Використовується для групування основних даних
                        таблиці. Всі рядки таблиці, що містять дані, розміщуються всередині цього тегу.
                    </li>
                    <li><strong>Тег <code>&lt;tfoot&gt;</code></strong>: Використовується для додавання футера таблиці,
                        часто для підсумкових або статистичних значень (цей тег не обов'язковий).
                    </li>
                    <li><strong>Тег <code>&lt;tr&gt;</code></strong>: Представляє рядок таблиці, який може містити
                        стовпці з даними або заголовки.
                    </li>
                    <li><strong>Тег <code>&lt;th&gt;</code></strong>: Використовується для визначення заголовка стовпця
                        або рядка. Текст у заголовках зазвичай відображається жирним шрифтом і по центру.
                    </li>
                    <li><strong>Тег <code>&lt;td&gt;</code></strong>: Представляє звичайну клітинку таблиці, що містить
                        дані. Ці елементи використовуються всередині тегу <code>&lt;tr&gt;</code>.
                    </li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                    Також важливо зазначити, що таблиці можна стилізувати за допомогою CSS. Наприклад, можна визначити
                    ширину стовпців, кольори фону, розміри шрифтів, а також налаштувати вирівнювання тексту в клітинках.
                </p>
                <p className="leading-relaxed text-gray-700">
                    Щоб зробити таблицю адаптивною, зазвичай використовують CSS, щоб таблиця могла коректно
                    відображатися на різних пристроях. Наприклад, для забезпечення адаптивності можна застосувати
                    правило <code>table-layout: auto;</code> або використовувати медіа-запити.
                </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">HTML-код списку</h2>
                <p className="leading-relaxed text-gray-700">
                    Код для списку:
                </p>
                <div className="mb-4">
                    <img src={assets.list_tag} alt="Код list" className="w-auto h-64 rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Скріншот:
                </p>
                <div className="mb-4">
                    <img src={assets.list_example} alt="Приклад list" className="w-96 h-auto rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Теорія:
                </p>
                <p className="leading-relaxed text-gray-700">
                    В HTML існують три основні типи списків:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Марковані списки (unordered list, <code>&lt;ul&gt;</code>)</strong>: Цей список
                        використовується для переліку елементів, де порядок не має значення. Елементи списку
                        позначаються маркерами (по замовчуванню — круглими точками).
                    </li>
                    <li><strong>Нумеровані списки (ordered list, <code>&lt;ol&gt;</code>)</strong>: Використовуються,
                        коли порядок елементів важливий. Елементи маркуються числами або іншими позначеннями.
                    </li>
                    <li><strong>Списки визначень (definition list, <code>&lt;dl&gt;</code>)</strong>: Використовуються
                        для представлення термінів і їх описів. Вони складаються з тегів <code>&lt;dt&gt;</code> для
                        терміну та <code>&lt;dd&gt;</code> для його опису.
                    </li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                    Кожен список може містити елементи списку за допомогою тега <code>&lt;li&gt;</code>, який
                    представляє окремий пункт списку.
                </p>
                <p className="leading-relaxed text-gray-700">
                    У маркованих списках за замовчуванням використовується кругла точка, але можна змінювати стиль
                    маркерів за допомогою CSS, наприклад, на квадрати або інші значки. Нумерація елементів в
                    нумерованому списку також може бути змінена за допомогою CSS для використання літер чи римських
                    чисел.
                </p>
                <p className="leading-relaxed text-gray-700">
                    Приклад маркованого списку (unordered list):
                </p>
                <div className="mb-4">
                    <ul className="list-disc pl-5">
                        <li>Елемент списку 1</li>
                        <li>Елемент списку 2</li>
                        <li>Елемент списку 3</li>
                    </ul>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Приклад нумерованого списку (ordered list):
                </p>
                <div className="mb-4">
                    <ol className="list-decimal pl-5">
                        <li>Елемент списку 1</li>
                        <li>Елемент списку 2</li>
                        <li>Елемент списку 3</li>
                    </ol>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Приклад списку визначень (definition list):
                </p>
                <div className="mb-4">
                    <dl className="pl-5">
                        <dt>Термін 1</dt>
                        <dd>Опис 1</dd>
                        <dt>Термін 2</dt>
                        <dd>Опис 2</dd>
                    </dl>
                </div>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">HTML-код зображення</h2>
                <p className="leading-relaxed text-gray-700">
                    Код для підключення зображення:
                </p>
                <div className="mb-4">
                    <img src={assets.image_tag} alt="Код img" className="w-full h-auto rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Скріншот:
                </p>
                <div className="mb-4">
                    <img src={assets.image_example} alt="Приклад img" className="w-full h-auto rounded-lg"/>
                </div>
                <p className="leading-relaxed text-gray-700">
                    Теорія:
                </p>
                <p className="leading-relaxed text-gray-700">
                    Тег <code>&lt;img&gt;</code> використовується для вбудовування зображень на веб-сторінку. Це
                    самозамкнений тег (не має закриваючого тегу), що дозволяє додавати графіку різних форматів (JPEG,
                    PNG, GIF, SVG тощо).
                </p>
                <p className="leading-relaxed text-gray-700">
                    Основні атрибути тега <code>&lt;img&gt;</code>:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><code>src</code> — вказує шлях до зображення, яке повинно бути відображене. Це може бути як
                        локальний шлях, так і URL.
                    </li>
                    <li><code>alt</code> — описує зображення текстом. Важливо для доступності (зокрема для користувачів
                        з обмеженими можливостями) та для SEO.
                    </li>
                    <li><code>width</code> та <code>height</code> — визначають розміри зображення. Їх можна не
                        вказувати, якщо зображення повинне бути адаптивним, в такому випадку можна використовувати CSS
                        для контролю розміру.
                    </li>
                    <li><code>loading</code> — визначає, коли зображення повинно завантажуватись
                        (наприклад, <code>lazy</code> для відкладеного завантаження).
                    </li>
                </ul>
                <p className="leading-relaxed text-gray-700">
                    Тег <code>&lt;img&gt;</code> зазвичай використовується з класами для стилізації та адаптивності,
                    наприклад, для забезпечення правильних пропорцій зображень в різних розмірах екрану.
                </p>
            </section>


        </div>
    )
}
export default Task13
