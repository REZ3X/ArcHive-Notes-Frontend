import React from 'react';
import Link from 'next/link';

export default function PublicNotesButton() {
  return (
    <Link href="/comingSoonCommunity">
      <button className="w-full bg-[#f3f4f6] text-[#46505b] px-4 py-2 rounded-md shadow-md">
        Public Notes
      </button>
    </Link>
  );
}