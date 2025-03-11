import React, { useState } from 'react';
import Task41 from "../components/lab4_components/Task41.jsx";
import Task42 from "../components/lab4_components/Task42.jsx";
import Task43 from "../components/lab4_components/Task43.jsx";
import Task44 from "../components/lab4_components/Task44.jsx";
import Task45 from "../components/lab4_components/Task45.jsx";
import Task46 from "../components/lab4_components/Task46.jsx";




const tasks = [
    { id: 1, title: "Тема мета ЛР №4 Місце розташування сайту, звіту", component: <Task41/> },
    {
        id: 2,
        title: "Завдання", component: <Task42/>,
        subtasks: [
            { id: 3, title: "Десктопна версія", component: <Task43/> },
            { id: 4, title: "Планшетна версія", component: <Task44/> },
            { id: 5, title: "Мобільна версія", component: <Task45/> },
        ]
    },
    { id: 6, title: "Висновки", component: <Task46/> },
];

const Lab4 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab4</h1>
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

export default Lab4;
