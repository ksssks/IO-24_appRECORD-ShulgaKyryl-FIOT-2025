import React, { useState } from 'react';
import Task11 from "../components/lab1_components/Task11.jsx";
import Task12 from "../components/lab1_components/Task12.jsx";
import Task13 from "../components/lab1_components/Task13.jsx";
import Task14 from "../components/lab1_components/Task14.jsx";
import Figma1 from "../components/lab1_components/Figma1.jsx";

const tasks = [
    { id: 1, title: "Опис предметного середовища та бізнес логіки", component: <Task11 /> },
    { id: 2, title: "Тема, мета, місце розташування WEB-застосунка та місце звітного HTML-документу", component: <Task12 /> },
    { id: 3, title: "Cтруктура документа", component: <Task13 /> },
    { id: 4, title: "Figma Дизайн", component: <Figma1 /> },
    { id: 5, title: "Висновки", component: <Task14 /> },
];

const Lab1 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab1</h1>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* Sidebar */}
                <div className={`flex flex-col gap-2 text-sm text-gray-700 bg-white p-3 rounded-lg shadow-md w-64 sm:w-48 ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
                    {tasks.map(task => (
                        <p
                            key={task.id}
                            className={`pl-3 py-2 border border-gray-300 rounded-lg transition-all cursor-pointer mt-4 hover:bg-gray-200 ${activeTask === task.id ? 'bg-gray-300' : ''}`}
                            onClick={() => setActiveTask(task.id)}
                        >
                            {task.title}
                        </p>
                    ))}
                </div>

                {/* Toggle Sidebar Button */}
                <button
                    className="sm:hidden p-2 border border-gray-300 rounded bg-white shadow-md"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                {/* Content */}
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {tasks.find(task => task.id === activeTask)?.component}
                </div>
            </div>
        </div>
    );
};

export default Lab1;
