"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ComingSoon() {
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/demo');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-nunito text-[#46505b]">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg mb-8">This feature is under development and will be available soon.</p>
      <button
        onClick={handleBackClick}
        className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700"
      >
        Go Back
      </button>
    </div>
  );
}