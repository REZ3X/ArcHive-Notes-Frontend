import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import ProjectList from './projectList';
import ProjectAdd from '../projectAdd';
import UpgradeToPremiumButton from '../upgradePremiumButton';

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
        <div className="bg-white p-8 rounded shadow-md w-64 h-screen font-nunito flex flex-col justify-between">
            <div>
                <h1 className="text-2xl font-black text-gray-800 mb-4">ArcHive Notes</h1>
                <ProjectAdd />
                <ProjectList />
            </div>
            <UpgradeToPremiumButton />
        </div>
    );
}