import React from 'react';
import { FaCog } from 'react-icons/fa';

export default function SettingsButton() {
  return (
    <button className="text-gray-600 text-lg hover:text-gray-800">
      <FaCog />
    </button>
  );
}