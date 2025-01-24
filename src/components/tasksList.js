import React, { useEffect, useState } from 'react';

export default function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch('http://localhost:5000/tasks');
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }

        fetchTasks();
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mt-[-13px]">Tasks</h2>
            <ul className="mt-2">
                {tasks.map(task => (
                    <li key={task.id} className="text-gray-800 mb-2">
                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <p className="text-sm text-gray-600">Deadline: {task.deadline}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}