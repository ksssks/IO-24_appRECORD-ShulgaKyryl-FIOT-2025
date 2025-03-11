import React from 'react'
import './Task39.css'
import {assets} from "../../../assets/assets.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const Task39 = () => {

    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <div className="heading">
                    <h1>Професія Java-розробник</h1>
                </div>
                <div className="navbar">
                    <a href="#">Портфоліо для старту кар&#39;єри</a>
                    <a href="#">Навчання на реальних кейсах</a>
                    <a href="#">Заробіток після 4 місяців навчання</a>
                    <a href="#">Можна працювати віддалено</a>
                </div>
                <div className="second_heading">
                    <h1>Як проходить навчання</h1>
                </div>
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="btn">1</a>
                            <p>Дивіться відеолекції</p>
                            <p className='text-sm'>Якісні відео з зрозумілим поясненням теорії</p>
                        </div>
                        <div className="card-header flex justify-center items-center">
                            <img src={assets.video} alt='mistake' className="w-64 h-auto rounded"/>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="btn">2</a>
                            <p>Робите завдання і відправляєте на перевірку</p>
                            <p className='text-sm'>Поспішати не треба, обирайте зручний режим навчання</p>
                        </div>
                        <div className="card-header flex justify-center items-center">
                            <img src={assets.task} alt='mistake' className="w-64 h-auto rounded"/>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="btn">3</a>
                            <p>Чи отримуєте розбір Вашої роботи</p>
                            <p className='text-sm'>Ваш куратор розповість про помилки і про те, як їх виправити</p>
                        </div>
                        <div className="card-header flex justify-center items-center">
                            <img src={assets.explanation} alt='mistake' className="w-64 h-auto rounded"/>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <a href="#" className="btn">4</a>
                            <p>Чи працюєте над помилками</p>
                            <p className='text-sm'>Проходьте перевірку ще раз, щоб переконатися, що в цей раз все
                                правильно</p>
                        </div>
                        <div className="card-header flex justify-center items-center">
                            <img src={assets.mistake} alt='mistake' className="w-64 h-auto rounded"/>
                        </div>
                    </div>
                </div>
                <div className="second_heading">
                    <h1>Рівні навчання</h1>
                </div>
                <Carousel>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                        <img className="w-auto max-w-xs rounded" src={assets.slide_1}/>
                        <div className="flex flex-col space-y-2 sm:ml-4">
                            <p className="text-lg text-left">Перший рівень: чітка і зрозуміла теорія</p>
                            <p className="text-sm text-gray-600 text-left">За 4 місяці вам необхідно буде пройти 16 тем.
                                Ви самостійно
                                вивчите базові навички, з якими зможете створювати справжні проєкти. Ви створите
                                дипломний
                                проєкт – двигок блогу в веб-інтерфейсі. Захист проєкту проходить у відкритому режимі –
                                на
                                нашому майданчику або по відеозв’язку.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                        <img className="w-auto max-w-xs rounded" src={assets.slide_2}/>
                        <div className="flex flex-col space-y-2 sm:ml-4">
                            <p className="text-lg text-left">Другий рівень: інтенсивна практика</p>
                            <p className="text-sm text-gray-600 text-left">Під керівництвом наставника ви в складі
                                команди створите
                                власну соціальну мережу. Фактично ця частина програми прирівнюється до стажування. Вам
                                видадуть ТЗ і дизайн проєкту. Ви працюєте, через які 8 місяців, у максимально наближеній
                                до
                                бойових умов досвіді. Саме так створюється комерційне програмне забезпечення в
                                фірмах-роботодавцях.</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                        <img className="w-auto max-w-xs rounded" src={assets.slide_3}/>
                        <div className="flex flex-col space-y-2 sm:ml-4">
                            <p className="text-lg text-left">Третій рівень: інтенсивна практика</p>
                            <p className="text-sm text-gray-600 text-left">Additional information about Mistake</p>
                        </div>
                    </div>
                </Carousel>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col">
                                <h4>company</h4>
                                <ul>
                                    <li><a href="#">about us</a></li>
                                    <li><a href="#">our services</a></li>
                                    <li><a href="#">privacy policy</a></li>
                                    <li><a href="#">affiliate program</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>get help</h4>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Social medias</h4>
                                <div className="social-links">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Task39
