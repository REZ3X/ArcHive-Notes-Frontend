"use client";

import React, { useEffect, useState } from "react";
import notesData from "@/dummyData/notesDummy";

/**
 * Component that renders a list of sticky notes filtered by a search query and project filter.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.searchQuery=''] - The search query to filter notes by title or content.
 * @param {string} [props.filter=''] - The project filter to filter notes by project.
 * @param {Function} onNoteClick - Function to handle note click.
 * @returns {JSX.Element} The rendered component.
 */
export default function StickyNotesList({ searchQuery = "", filter = "", onNoteClick }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesData());
  }, []);

  const filteredNotes = notes.filter((note) => {
    const title = note.title || "";
    const content = note.content || "";
    const project = note.projects || "";
    return (
      (title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filter === "" || project.toLowerCase() === filter.toLowerCase())
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 relative font-nunito">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className="bg-white p-4 rounded shadow-md h-40 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => onNoteClick(note)}
        >
          <div>
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p>{note.content}</p>
            {note.projects && (
              <span className="text-sm text-gray-600">
                Project: {note.projects}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}