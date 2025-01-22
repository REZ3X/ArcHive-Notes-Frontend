import React from 'react';
import Link from 'next/link';

export default function TasksButton() {
  return (
    <Link href="/coming-soon">
      <button className="flex items-center text-center align-center justify-center bg-white p-2 rounded w-24 shadow-md h-10 font-nunito text-gray-600 hover:text-gray-800">
        Tasks
      </button>
    </Link>
  );
}