"use client";

import React, { useEffect, useState } from 'react';
import taskData from '@/dummyData/taskDummy';

/**
 * Component that renders a list of tasks.
 *
 * @component
 * @example
 * // Example usage:
 * // <TasksList />
 *
 * @returns {JSX.Element} A list of task titles with deadlines.
 */
export default function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(taskData());
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