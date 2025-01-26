import React from 'react';
import Link from 'next/link';

export default function CommunityButton() {
  return (
    <Link href="/comingSoonCommunity">
      <button className="flex items-center bg-white p-2 rounded shadow-md h-10 font-nunito text-gray-600 hover:bg-gray-200 hover:text-gray-800">
        Community
      </button>
    </Link>
  );
}