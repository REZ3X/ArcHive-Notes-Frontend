import React from "react";

/**
 * Component to display an expanded note.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.note - The note to display.
 * @param {Function} props.onClose - Function to handle close button click.
 * @returns {JSX.Element} The rendered component.
 */
export default function ExpandedNote({ note, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-white p-8 overflow-auto" style={{ marginLeft: '16rem', width: 'calc(100% - 16rem)' }}>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
        Close
      </button>
      <h2 className="text-3xl font-bold mb-4">{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}