import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import ProjectList from '../projectList';

/**
 * LeftNavDesktop component renders the left navigation bar for the desktop view.
 * It includes a title, a button to create new projects, and a list of projects.
 *
 * @component
 * @example
 * return (
 *   <LeftNavDesktop />
 * )
 */
export default function LeftNavDesktop() {
    return (
        <div className="bg-white p-8 rounded shadow-md w-64 h-screen font-nunito">
            <h1 className="text-2xl font-black text-gray-800 mb-4">ArcHive Notes</h1>
            <button className="w-full bg-gray-900 text-white p-2 rounded hover:bg-gray-700 flex items-center justify-center mb-4">
                <FaPlusCircle className="mr-2" />
                New Projects
            </button>
            <ProjectList />
        </div>
    );
}