"use client";

import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

/**
 * ProjectAdd component allows users to input and submit new projects.
 *
 * @component
 * @example
 * return (
 *   <ProjectAdd />
 * )
 *
 * @returns {JSX.Element} The rendered ProjectAdd component.
 *
 * @function
 * @name ProjectAdd
 *
 * @description
 * This component renders an input field for adding new projects. It includes focus and blur handlers to manage the input's state,
 * and a submit handler to process the project creation logic.
 *
 * @property {boolean} isFocused - State to track if the input is focused.
 * @property {string} project - State to store the current project title.
 *
 * @method handleFocus
 * Sets the isFocused state to true when the input is focused.
 *
 * @method handleBlur
 * Sets the isFocused state to false if the project title is empty when the input loses focus.
 *
 * @method handleChange
 * Updates the project state with the current value of the input field.
 *
 * @method handleSubmit
 * Prevents the default form submission behavior, handles project creation logic, clears the project state, and sets isFocused to false.
 */
export default function ProjectAdd() {
    const [isFocused, setIsFocused] = useState(false);
    const [project, setProject] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!project) {
            setIsFocused(false);
        }
    };

    const handleChange = (e) => setProject(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: project })
            });
            const data = await response.json();
            console.log('Project created:', data);
        } catch (error) {
            console.error('Error creating project:', error);
        }
        setProject('');
        setIsFocused(false);
    };

    return (
        <div className="bg-white p-2 rounded w-full font-nunito">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <button type="submit" className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700 flex items-center justify-center mb-4">
                    <FaPlusCircle className="mr-2" />
                    New Projects
                </button>
                {isFocused && (
                    <input
                        type="text"
                        placeholder="Add new project"
                        className="w-full p-2 focus:outline-none"
                        value={project}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                )}
            </form>
        </div>
    );
}