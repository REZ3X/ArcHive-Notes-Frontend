import React, { useEffect, useState } from 'react';

/**
 * Component that renders a list of projects.
 *
 * @component
 * @example
 * // Example usage:
 * // <ProjectList />
 *
 * @returns {JSX.Element} A list of project titles.
 */
export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('http://localhost:5000/projects');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProjects();
    }, []);

    return (
        <ul className="mt-4">
            {projects.map(project => (
                <li key={project.id} className="text-gray-800 mb-2">
                    {project.title}
                </li>
            ))}
        </ul>
    );
}