import React, {useState} from 'react';

import Task91 from "../components/lab9_components/Task91.jsx";
import Task92 from "../components/lab9_components/Task92.jsx";
import Task93 from "../components/lab9_components/Task93.jsx";


const tasks = [
    {id: 1, title: "Тема мета ЛР №7 Місце розташування сайту, звіту", component: <Task91/>},
    {id: 2, title: "Виконання", component: <Task92/>},
    {id: 3, title: "Висновки", component: <Task93/>},
];

const Lab9 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab7</h1>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                {/* Sidebar */}
                <div
                    className={`flex flex-col gap-2 text-sm text-gray-700 bg-white p-3 rounded-lg shadow-md w-64 sm:w-48 ${sidebarOpen ? 'block' : 'hidden'} sm:block`}>
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

export default Lab9;
