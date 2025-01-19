"use client";

import React, { useEffect, useState } from 'react';
import projectsData from "@/dummyData/projectsDummy";

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
        setProjects(projectsData());
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