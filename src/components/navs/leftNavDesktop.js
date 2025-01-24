import React from 'react';
import ProjectList from '../projectList';
import TaskList from '../tasksList';
import ProjectAdd from '../projectAdd';
import PublicNotesButton from '../publicNotesButton';
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
export default function LeftNavDesktop({ onUpgradeClick }) {
  return (
    <div className="bg-white p-8 rounded shadow-md w-64 h-screen font-nunito flex flex-col justify-between z-30">
      <div>
        <h1 className="text-2xl font-black text-gray-800 mb-4">ArcHive Notes</h1>
        <ProjectAdd />
        <div className="gap-3 flex flex-col">
          <ProjectList />
          <TaskList />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6">
        <PublicNotesButton />
        <UpgradeToPremiumButton onClick={onUpgradeClick} />
      </div>
    </div>
  );
}