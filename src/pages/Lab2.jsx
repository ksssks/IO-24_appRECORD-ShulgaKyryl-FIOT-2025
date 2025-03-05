import React, { useState } from 'react';
import Task21 from "../components/lab2_components/Task21.jsx";
import Task22 from "../components/lab2_components/Task22.jsx";
import Task23 from "../components/lab2_components/Task23.jsx";
import Task24 from "../components/lab2_components/Task24.jsx";
import Task25 from "../components/lab2_components/Task25.jsx";
import Task26 from "../components/lab2_components/Task26.jsx";
import Task27 from "../components/lab2_components/Task27.jsx";
import Task28 from "../components/lab2_components/Task28.jsx";
import Task29 from "../components/lab2_components/Task29.jsx";


const tasks = [
    { id: 1, title: "Тема мета ЛР №2 Місце розташування сайту, звіту", component: <Task21/> },
    { id: 2, title: "Способи підключення стилів", component: <Task22/> },
    {
        id: 3,
        title: "Селектори", component: <Task29/>,
        subtasks: [
            { id: 4, title: "Селектори тегу", component: <Task23/> },
            { id: 5, title: "Селектори класу", component: <Task24/> },
            { id: 6, title: "Селектори ідентифікаторів", component: <Task25/> },
            { id: 7, title: "Інші селектори", component: <Task26/> }
        ]
    },
    { id: 8, title: "CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки, CSS Просунутий", component: <Task27/> },
    { id: 9, title: "Висновки до ЛР№2", component: <Task28/> },
];

const Lab2 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab2</h1>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* Sidebar */}
                <div className={`flex flex-col gap-2 text-sm text-gray-700 bg-white p-3 rounded-lg shadow-md w-64 sm:w-48 ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
                    {tasks.map(task => (
                        <div key={task.id}>
                            <p
                                className={`pl-3 py-2 border border-gray-300 rounded-lg transition-all cursor-pointer mt-4 hover:bg-gray-200 ${activeTask === task.id ? 'bg-gray-300' : ''}`}
                                onClick={() => setActiveTask(task.id)}
                            >
                                {task.title}
                            </p>
                            {task.subtasks && task.subtasks.map(subtask => (
                                <p
                                    key={subtask.id}
                                    className={`pl-6 py-2 border border-gray-200 rounded-lg transition-all cursor-pointer mt-2 hover:bg-gray-100 ${activeTask === subtask.id ? 'bg-gray-200' : ''}`}
                                    onClick={() => setActiveTask(subtask.id)}
                                >
                                    {subtask.title}
                                </p>
                            ))}
                        </div>
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
                    {tasks.flatMap(task => task.subtasks ? [task, ...task.subtasks] : [task])
                        .find(task => task.id === activeTask)?.component}
                </div>
            </div>
        </div>
    );
};

export default Lab2;
