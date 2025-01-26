"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ComingSoonCommunity() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('publicNotes');

  const handleBackClick = () => {
    router.push('/demo');
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 font-nunito text-[#46505b]">
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
        >
          Go Back
        </button>
        <h1 className="text-4xl font-bold">Community</h1>
        <div className="w-24"></div> {/* Placeholder for alignment */}
      </div>
      <div className="flex justify-center bg-white shadow-md">
        <button
          onClick={() => handleTabClick('publicNotes')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'publicNotes' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-gray-700`}
        >
          Public Notes
        </button>
        <button
          onClick={() => handleTabClick('levels')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'levels' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-gray-700`}
        >
          Levels
        </button>
        <button
          onClick={() => handleTabClick('leaderboard')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'leaderboard' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-gray-700`}
        >
          Leaderboard
        </button>
        <button
          onClick={() => handleTabClick('trainYourType')}
          className={`px-4 py-2 rounded-t-lg ${activeTab === 'trainYourType' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-gray-700`}
        >
          Train Your Typing
        </button>
      </div>
      <div className="flex-grow bg-white p-8 rounded-b-lg shadow-md flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8">This feature is under development and will be available soon.</p>
      </div>
    </div>
  );
}