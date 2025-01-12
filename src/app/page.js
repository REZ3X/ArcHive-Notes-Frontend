"use client";

import React, { useState } from 'react';
import LeftNavDesktop from '../components/navs/leftNavDesktop';
import SearchBar from '../components/searchBar';
import LogoutButton from '../components/logoutButton';
import NotesInput from '../components/notesInput';
import Footer from '../components/footer';
import StickyNotesList from '../components/stickyNotesList';

/**
 * Home component renders the main layout of the application.
 * It includes a fixed left navigation bar, a search bar, a logout button,
 * an input for notes, a list of sticky notes filtered by the search query,
 * and a footer.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-full">
                <LeftNavDesktop />
            </div>
            <div className="ml-64 p-8 w-full relative min-h-screen flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <SearchBar setSearchQuery={setSearchQuery} />
                    <LogoutButton />
                </div>
                <NotesInput />
                <StickyNotesList searchQuery={searchQuery} />
                <div className="flex-grow"></div>
                <Footer />
            </div>
        </div>
    );
}
