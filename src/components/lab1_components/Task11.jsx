import React from 'react'

const Task11 = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Опис предметного середовища WEB-застосунку для
                лікарні</h1>
            <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Предметне середовище</h2>
                <p className="leading-relaxed text-gray-700">
                    WEB-застосунок для лікарні є сучасною інформаційною системою, яка створена для автоматизації та
                    оптимізації процесів надання медичних послуг. Основною метою застосунку є забезпечення зручного,
                    безпечного та ефективного зв'язку між пацієнтами, лікарями та адміністрацією медичного закладу. Цей
                    застосунок дозволяє значно спростити процеси бронювання візитів, управління медичними даними та
                    забезпечення безперервного доступу до важливої інформації як для медичного персоналу, так і для
                    пацієнтів.

                    Пацієнти отримують можливість реєструватися у системі та створювати персональні кабінети, де
                    зберігаються їх медичні записи, історія візитів та результати обстежень. Вони можуть легко обирати
                    необхідного лікаря, переглядати доступні часові слоти в інтерактивному календарі та бронювати візити
                    онлайн. Також доступна функція скасування або перенесення запису. Пацієнти мають доступ до загального
                    інформаційного розділу, де представлені контактні дані клініки, опис послуг та спеціалізацій.

                    Лікарі отримують доступ до власного розділу системи, де можуть керувати розкладом прийомів, переглядати
                    інформацію про пацієнтів та оновлювати їх медичні записи. Вони також можуть залишати коментарі до
                    обстежень, виписувати рекомендації та створювати звіти про проведені консультації. Лікарі мають змогу
                    швидко обмінюватися інформацією з адміністрацією та іншими фахівцями клініки для узгодження графіків або
                    обговорення медичних випадків.

                    Адміністративна панель забезпечує доступ до управління всіма аспектами роботи клініки. Адміністратори
                    можуть контролювати розклад роботи лікарів, керувати записами пацієнтів, додавати нову інформацію про
                    лікарів та послуги. Система підтримує модуль аналітики, що дозволяє відстежувати завантаженість клініки,
                    аналізувати частоту візитів пацієнтів та ефективність роботи лікарів. Завдяки базі даних адміністратори
                    можуть швидко знаходити необхідну інформацію про пацієнтів та лікарів.

                    Особливу увагу приділено безпеці даних. Вся інформація про пацієнтів та лікарів зберігається у захищеній
                    базі даних із використанням сучасних алгоритмів шифрування. Доступ до системи надається лише після
                    автентифікації та авторизації користувачів, що забезпечує конфіденційність інформації.


                    Система підтримує можливість масштабування та оновлення функціоналу, що дозволяє додавати нові модулі
                    для покращення обслуговування пацієнтів. Завдяки інтеграції сучасних технологій, WEB-застосунок сприяє
                    підвищенню ефективності роботи клініки, скороченню часу на обробку записів та покращенню комунікації між
                    усіма учасниками медичного процесу.
                </p>
            </section>

            <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Опис бізнес-логіки</h2>

                <h3 className="text-xl font-semibold mb-2">Функціональні вимоги:</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Можливість бронювання візитів до лікарів через інтерактивний онлайн-календар.</li>
                    <li>Перегляд та управління медичними записами пацієнтів.</li>
                    <li>Відображення інформації про лікарів (спеціалізація, досвід, графік роботи).</li>
                    <li>Адміністративна панель для управління розкладом лікарів та записами пацієнтів.</li>
                    <li>Інформаційний розділ про клініку та її послуги.</li>
                    <li>Інтеграція системи електронних повідомлень для нагадувань про візити.</li>
                    <li>Автентифікація та авторизація для забезпечення безпеки користувачів.</li>
                    <li>Ведення бази даних пацієнтів, лікарів та історії візитів.</li>
                    <li>Можливість пошуку лікарів за спеціалізацією.</li>
                    <li>Захищений доступ до системи для лікарів, адміністраторів та пацієнтів.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2">Нефункціональні вимоги:</h3>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Система повинна бути доступною 24/7 з мінімальним часом простою.</li>
                    <li>Високий рівень безпеки для захисту конфіденційних даних пацієнтів (шифрування даних, захищені
                        з'єднання).
                    </li>
                    <li>Оптимальна продуктивність при одночасному доступі великої кількості користувачів.</li>
                    <li>Інтуїтивно зрозумілий та адаптивний інтерфейс для мобільних та десктопних пристроїв.</li>
                    <li>Швидкий час завантаження сторінок (не більше 3 секунд).</li>
                    <li>Можливість масштабування системи для підтримки нових функцій та збільшення кількості
                        користувачів.
                    </li>
                    <li>Логування та моніторинг роботи системи для швидкого виявлення та виправлення помилок.</li>
                </ul>
            </section>

        </div>
    )
}
export default Task11
