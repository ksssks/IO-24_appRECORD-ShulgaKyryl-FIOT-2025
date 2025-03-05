import React from 'react'

const Task29 = () => {
    return (
        <div>
            <p><strong>Селектор тегу</strong> – це базовий селектор, який застосовується до всіх елементів певного типу
                в документі. Він дозволяє задавати стилі для всіх елементів конкретного тегу, що забезпечує єдиний стиль
                оформлення для схожих елементів на сторінці. Наприклад, усі абзаци, заголовки чи таблиці можуть мати
                спільні стилі, задані за допомогою цього селектора.</p>

            <p><strong>Селектор класу</strong> – використовується для призначення стилів групі елементів, незалежно від
                їхнього типу. Це дозволяє створювати гнучкіші стилі, які можна застосовувати до різних елементів, що
                мають однаковий клас. Селектори класів широко використовуються для повторного застосування стилів у
                різних частинах веб-застосунку, що полегшує управління дизайном.</p>

            <p><strong>Селектор ідентифікатора</strong> – призначений для стилізації конкретного елемента на сторінці.
                Він використовується, коли необхідно оформити один унікальний елемент, наприклад, основний заголовок,
                логотип або певний блок із контентом. На відміну від класів, які можуть застосовуватися до багатьох
                елементів, ідентифікатор повинен бути унікальним у межах сторінки.</p>

            <p><strong>Сусідні селектори</strong> – дозволяють вибирати елементи, які безпосередньо слідують за певним
                елементом у коді. Це корисно, коли потрібно стилізувати конкретний елемент, що йде після іншого,
                наприклад, для відображення певного ефекту при зміні структури документа.</p>

            <p><strong>Дочірні селектори</strong> – використовуються для вибору елементів, які є безпосередніми
                нащадками іншого елемента. Вони дозволяють стилізувати лише ті елементи, що знаходяться на одному рівні
                вкладеності, не впливаючи на глибше вкладені структури.</p>

            <p><strong>Селектор атрибута</strong> – дає можливість стилізувати елементи на основі їхніх атрибутів. Це
                зручно для вибору та оформлення посилань, кнопок або полів вводу залежно від їхніх атрибутів, наприклад,
                відображення всіх посилань, що відкриваються у новій вкладці.</p>

            <p><strong>Універсальний селектор</strong> – застосовується до всіх елементів у документі. Він може
                використовуватися для встановлення базових стилів, наприклад, вирівнювання відступів або скидання
                стандартних стилів браузера.</p>

        </div>
    )
}
export default Task29
