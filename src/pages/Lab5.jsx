import React, {useState} from 'react';
import Task51 from "../components/lab5_components/Task51.jsx";
import Task52 from "../components/lab5_components/Task52.jsx";
import Task53 from "../components/lab5_components/Task53.jsx";
import Task54 from "../components/lab5_components/Task54.jsx";
import Task55 from "../components/lab5_components/Task55.jsx";
import Task56 from "../components/lab5_components/Task56.jsx";


const tasks = [
    {id: 1, title: "Тема мета ЛР №4 Місце розташування сайту, звіту", component: <Task51/>},
    {
        id: 2,
        title: "Завдання за Таблиці 1", component: <Task52/>,
        subtasks: [
            {id: 3, title: "Зміст", component: <Task53/>},
        ]
    },
    {
        id: 4,
        title: "Завдання з Таблиці 2", component: <Task54/>,
        subtasks: [
            {id: 5, title: "Зміст", component: <Task55/>},
        ]
    },
    {id: 6, title: "Висновки", component: <Task56/>},
];

const Lab5 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab4</h1>
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

export default Lab5;
