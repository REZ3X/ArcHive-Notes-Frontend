import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function AccountButton() {
    return (
        <button className="text-gray-600 text-lg hover:text-gray-800">
            <FaUserCircle />
        </button>
    );
}