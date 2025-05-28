import React, {useState} from 'react';
import Task101 from "../components/lab10_components/Task101.jsx";
import Task102 from "../components/lab10_components/Task102.jsx";
import Task103 from "../components/lab10_components/Task103.jsx";



const tasks = [
    {id: 1, title: "Тема мета ЛР №8 Місце розташування сайту, звіту", component: <Task101/>},
    {id: 2, title: "Виконання", component: <Task102/>},
    {id: 3, title: "Висновки", component: <Task103/>},
];

const Lab10 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">lab8</h1>
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

export default Lab10;
