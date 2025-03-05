import React from 'react'
import {assets} from "../../assets/assets.js";

const Task27 = () => {
    return (
        <div>
            <p>
                Шрифти:
            </p>
            <img src={assets.font_lab2} alt="Шрифти"/>
            <img src={assets.font_lab2_photo} alt="Шрифти"/>
            <p>
                Контури:
            </p>
            <img src={assets.outline_lab2} alt="Контури"/>
            <img src={assets.outline_lab2_photo} alt="Контури"/>
            <p>
                Колір тексту:
            </p>
            <img src={assets.text_color_lab2} alt="Колір тексту"/>
            <img src={assets.text_color_lab2_photo} alt="Колір тексту"/>
            <p>
                Фон:
            </p>
            <img src={assets.background_lab2} alt="Фон"/>
            <img src={assets.background_lab2_photo} alt="Фон"/>
            <p>
                Таблиці
            </p>
            <img src={assets.table_tag} alt="Таблиця"/>
            <img src={assets.table_example} alt="Таблиця"/>

            <p>
                Списки
            </p>
            <img src={assets.list_tag} alt="Фон"/>
            <img src={assets.list_example} alt="Фон"/>
            <p>
                CSS просунутий(Tailwind)
            </p>
            <img src={assets.tailwind_lab2} alt="Фон"/>
            <img src={assets.tailwind_lab2_photo} alt="Фон"/>
        </div>
    )
}
export default Task27
