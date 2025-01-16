"use client";

import React, { useState } from 'react';
import { IoPaperPlaneOutline } from 'react-icons/io5';

/**
 * NotesInput component allows users to input and submit notes.
 *
 * @component
 * @example
 * return (
 *   <NotesInput />
 * )
 *
 * @returns {JSX.Element} The rendered NotesInput component.
 *
 * @function
 * @name NotesInput
 *
 * @description
 * This component renders an input field for writing notes. It includes focus and blur handlers to manage the input's state,
 * and a submit handler to process the note creation logic.
 *
 * @property {boolean} isFocused - State to track if the input is focused.
 * @property {string} note - State to store the current note text.
 *
 * @method handleFocus
 * Sets the isFocused state to true when the input is focused.
 *
 * @method handleBlur
 * Sets the isFocused state to false if the note is empty when the input loses focus.
 *
 * @method handleChange
 * Updates the note state with the current value of the input field.
 *
 * @method handleSubmit
 * Prevents the default form submission behavior, handles note creation logic, clears the note state, and sets isFocused to false.
 */
export default function NotesInput() {
    const [isFocused, setIsFocused] = useState(false);
    const [note, setNote] = useState('');

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!note) {
            setIsFocused(false);
        }
    };

    const handleChange = (e) => setNote(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: note })
            });
            const data = await response.json();
            console.log('Note created:', data);
        } catch (error) {
            console.error('Error creating note:', error);
        }
        setNote('');
        setIsFocused(false);
    };

    return (
        <div className="bg-white p-2 rounded shadow-md w-full font-nunito">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Write new idea"
                    className="w-full p-2 focus:outline-none"
                    value={note}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <div className={`mt-2 flex justify-end ${isFocused ? 'animate-expand' : 'animate-collapse'}`}>
                    <button type="submit" className="text-gray-600 hover:text-gray-800">
                        <IoPaperPlaneOutline className="text-xl" />
                    </button>
                </div>
            </form>
        </div>
    );
}