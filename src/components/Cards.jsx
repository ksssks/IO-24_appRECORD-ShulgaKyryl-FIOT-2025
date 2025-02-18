import React from 'react';
import {Link} from "react-router-dom";

const Cards = () => {
    const labs = [
        {
            title: "lab 1",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 20s infinite linear"}}>
                        <path d="M50 10 A40 40 0 1 1 49.9 10" stroke="white" fill="none"/>
                        <line x1="50" y1="10" x2="50" y2="90" stroke="white"/>
                        <polygon points="25,50 75,50 50,75" stroke="white" fill="none"/>
                    </g>
                </svg>
            ),
            description: "СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. GitHub. РОБОТА З РЕПОЗИТОРІЯМИ. ОСНОВНІ ТЕГИ ТА АТРИБУТИ в HTML-ДОКУМЕНТІ.",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab1"
        },
        {
            title: "lab 2",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 18s infinite linear"}}>
                        <rect x="20" y="20" width="60" height="60" stroke="white"/>
                        <circle cx="50" cy="50" r="30" stroke="white"/>
                        <line x1="50" y1="20" x2="50" y2="80" stroke="white"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab2"
        },
        {
            title: "lab 3",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="white"
                     xmlns="http://www.w3.org/2000/svg" style={{strokeWidth: "0.37px"}}>
                    <g style={{transformOrigin: "50% center", transform: "rotate(-30deg)", opacity: 1}}>
                        <ellipse cx="12.89" cy="50" rx="7.30" ry="14.61"></ellipse>
                        <ellipse cx="85.32" cy="50" rx="10.04" ry="20.09"></ellipse>
                        <ellipse cx="79.75" cy="50" rx="15.21" ry="30.42"></ellipse>
                        <ellipse cx="74.18" cy="50" rx="18.37" ry="36.75"></ellipse>
                        <ellipse cx="68.61" cy="50" rx="20.54" ry="41.09"></ellipse>
                        <ellipse cx="63.03" cy="50" rx="22.07" ry="44.14"></ellipse>
                        <ellipse cx="57.46" cy="50" rx="23.11" ry="46.23"></ellipse>
                        <ellipse cx="51.89" cy="50" rx="23.73" ry="47.46"></ellipse>
                        <ellipse cx="46.32" cy="50" rx="23.58" ry="47.16"></ellipse>
                        <ellipse cx="40.75" cy="50" rx="22.82" ry="45.65"></ellipse>
                        <ellipse cx="35.18" cy="50" rx="21.64" ry="43.28"></ellipse>
                        <ellipse cx="29.61" cy="50" rx="19.93" ry="39.86"></ellipse>
                        <ellipse cx="24.03" cy="50" rx="17.49" ry="34.98"></ellipse>
                        <ellipse cx="18.46" cy="50" rx="13.86" ry="27.73"></ellipse>
                        <ellipse cx="12.89" cy="50" rx="7.30" ry="14.61"></ellipse>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab3"
        },
        {
            title: "lab 4",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 8s infinite linear"}}>
                        <rect x="10" y="10" width="80" height="80" stroke="white"/>
                        <line x1="10" y1="10" x2="90" y2="90" stroke="white"/>
                        <line x1="90" y1="10" x2="10" y2="90" stroke="white"/>
                        <circle cx="50" cy="50" r="20" stroke="white" opacity="0.6"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab4"
        },
        {
            title: "lab 5",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 12s infinite linear"}}>
                        <path d="M50 10 C70 30 70 70 50 90 C30 70 30 30 50 10" stroke="white" fill="none"/>
                        <ellipse cx="50" cy="50" rx="30" ry="10" stroke="white"/>
                        <polygon points="50,20 60,50 50,80 40,50" stroke="white" fill="none"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab5"
        },
        {
            title: "lab 6",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 10s infinite linear"}}>
                    <polygon points="50,5 61,35 95,35 68,57 78,90 50,72 22,90 32,57 5,35 39,35" stroke="white"/>
                        <circle cx="50" cy="50" r="15" stroke="white" opacity="0.7"/>
                        <path d="M50 5 Q55 50 50 95 Q45 50 50 5" stroke="white" fill="none"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab6"
        },
        {
            title: "lab 7",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 14s infinite linear"}}>
                        <path d="M10 10 L90 10 L50 90 Z" stroke="white" fill="none"/>
                        <circle cx="50" cy="50" r="10" stroke="white" opacity="0.8"/>
                        <line x1="10" y1="90" x2="90" y2="90" stroke="white"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab7"
        },
        {
            title: "lab 8",
            author: "kyryl shulga",
            image: (
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                     style={{stroke: "white", fill: "none", strokeWidth: "0.5px"}}>
                    <g style={{transformOrigin: "50% 50%", animation: "rotateShapes 16s infinite linear"}}>
                        <ellipse cx="50" cy="50" rx="40" ry="15" stroke="white"/>
                        <polygon points="50,10 80,50 50,90 20,50" stroke="white"/>
                        <path d="M10 50 C30 70 70 30 90 50" stroke="white" fill="none"/>
                    </g>
                </svg>
            ),
            description: "soon",
            path: "/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab8"
        }
    ];

    return (
        <div id="cards">
            <div className="text-4xl text-center font-extrabold pt-10 pb-4">
                <span className="text-primary">мої лабораторні роботи</span>
            </div>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
                {labs.map((lab, index) => (
                    <Link to={lab.path} key={index}>
                        <div
                            className="flex flex-col bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-out"
                        >
                            <div className="w-full h-[250px] flex justify-center items-center">
                                {lab.image}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">{lab.title}</h3>
                                <p className="text-lg mb-6">{lab.description}</p>
                                <div className="text-sm font-medium">
                                    By <span className="text-primary">{lab.author}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Cards;