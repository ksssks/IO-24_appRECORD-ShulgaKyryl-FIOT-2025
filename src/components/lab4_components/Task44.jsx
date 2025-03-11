import React from 'react'
import {assets} from "../../assets/assets.js";

const Task44 = () => {
    return (
        <div>
            <p>Планшетна</p>
            <img src={assets.tablet} alt="Tablet"/>
            <p>Фото лікаря адаптується (`w-full h-full sm:max-w-72`) та може розміщуватися над текстовим блоком.</p>
            <p>Текстовий блок (`sm:mx-0 mt-4 sm:mt-0`) трохи зменшує відступи для кращого відображення.</p>
            <p>Список днів залишається у горизонтальному рядку, але потребує скролу (`overflow-x-scroll`).</p>
            <p>Слоти часу розташовані аналогічно, але можуть займати більше простору у висоту.</p>
            <p>Кнопка бронювання (`text-sm font-light px-14 py-3`) розташовується під слотами, займаючи більше
                простору.</p>

        </div>
    )
}
export default Task44
