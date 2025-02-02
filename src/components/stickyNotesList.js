"use client";

import React, { useEffect, useState } from 'react';

/**
 * Component that renders a list of sticky notes filtered by a search query.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.searchQuery=''] - The search query to filter notes by title or content.
 * @returns {JSX.Element} The rendered component.
 */
export default function StickyNotesList({ searchQuery = '' }) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fetchNotes() {
            try {
                const response = await fetch('http://localhost:5000/notes');
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        }

        fetchNotes();
    }, []);

    const filteredNotes = notes.filter(note => {
        const title = note.title || '';
        const content = note.content || '';
        return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            content.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredNotes.map(note => (
                <div key={note.id} className="bg-white p-4 rounded shadow-md h-40 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}