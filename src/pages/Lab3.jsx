import React, { useState } from 'react';
import Task31 from "../components/lab3_components/Task31.jsx";
import Task32 from "../components/lab3_components/Task32.jsx";
import Task33 from "../components/lab3_components/Task33.jsx";
import Task34 from "../components/lab3_components/Task34.jsx";
import Task35 from "../components/lab3_components/Task35.jsx";
import Task36 from "../components/lab3_components/Task36.jsx";
import Task37 from "../components/lab3_components/Task37.jsx";
import Task38 from "../components/lab3_components/Task38.jsx";
import Task39 from "../components/lab3_components/Task39/Task39.jsx";
import Task310 from "../components/lab3_components/Task310.jsx";
import Task311 from "../components/lab3_components/Task311.jsx";
import Task312 from "../components/lab3_components/Task312.jsx";

const tasks = [
    { id: 1, title: "Тема мета ЛР №3 Місце розташування сайту, звіту", component: <Task31/> },
    { id: 2, title: "Завдання №1 Зовнішній вигляд макету. Код макету", component: <Task32/> },
    {
        id: 3,
        title: "Завдання №2 ", component: <Task33/>,
        subtasks: [
            { id: 4, title: "Фіксована таблична верстка", component: <Task34/> },
            { id: 5, title: "Гумова таблична верстка", component: <Task35/> },
            { id: 6, title: "Фіксована блокова верстка", component: <Task36/> },
            { id: 7, title: "Гумова блокова верстка", component: <Task37/> }
        ]
    },
    {
        id: 8,
        title: "Завдання №3 FLEXBOX", component: <Task38/>,
        subtasks: [
            { id: 9, title: "Зовнішній вигляд сторінки", component: <Task39/> },
            { id: 10, title: "HTML код", component: <Task310/> },
            { id: 11, title: "CSS-код сторінки", component: <Task311/> }
        ]
    },
    { id: 12, title: "Висновки", component: <Task312/> },
];

const Lab3 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab3</h1>
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

export default Lab3;
