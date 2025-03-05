import React from 'react';
import { assets } from "../assets/assets.js";
import Labs from "../pages/Labs.jsx";
import {Link, Route} from "react-router-dom"; // You can still use the assets if needed for other images

const Header = () => {
    return (
        <div>
            <div
                className="flex flex-col md:flex-row flex-wrap bg-black rounded-2xl px-8 md:px-14 lg:px-24 py-8 shadow-lg">
                {/* Left side */}
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto">
                    {/* Photo placeholder */}
                    <div className="w-full flex items-center">
                        <div
                            className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 border-2 border-dotted border-white flex items-center justify-center overflow-hidden">
                            <img
                                src={assets.profile}
                                alt="Me"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-white text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-lg">Звіти з лабораторних робіт</p>
                            <p className="mt-2">з дисципліни «WEB-2025-орієнтовані технології. Основи Frontend та
                                Backend розробок»</p>
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-lg">Підготував: Шульга К.В.</p>
                            <p>Студент групи ІО-24</p>
                            <p>Залікова книжка №2432</p>
                            <p className="font-semibold text-lg">Перевірила: Проскура С.Л.</p>
                        </div>
                    </div>

                    {/* Button */}
                    <a
                        className="flex items-center gap-3 bg-white px-8 py-3 rounded-full text-sm font-semibold text-gray-800 shadow-lg hover:scale-105 transition duration-300"
                    >
                        <Link to="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/labs">перейти до робіт</Link>
                    </a>
                </div>
                {/* Right side with SVG abstraction */}
                <div className="md:w-1/2 flex justify-center md:justify-end items-center relative">
                    <svg
                        className="w-full md:w-[70%] max-w-[500px] h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 800 600"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                    >
                        <path
                            d="M0,300 C200,100 600,100 800,300 C600,500 200,500 0,300 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            d="M100,150 C200,50 600,50 700,150"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="10,10"
                        />
                        <path
                            d="M100,450 C200,550 600,550 700,450"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="10,10"
                        />
                        <circle cx="400" cy="300" r="70" fill="none" stroke="white" strokeWidth="3"/>
                        <path
                            d="M200,300 C300,200 500,200 600,300"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <path
                            d="M200,300 C300,400 500,400 600,300"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;
