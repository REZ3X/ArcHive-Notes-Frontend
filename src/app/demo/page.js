"use client";

import React, { useState } from "react";
import LeftNavDesktop from "@/components/demo/leftNavDesktop";
import SearchBar from "@/components/searchBar";
import LogoutButton from "@/components/logoutButton";
import NotesInput from "@/components/notesInput";
import Footer from "@/components/footer";
import StickyNotesList from "@/components/demo/stickyNotesList";
import AccountButton from "@/components/accountButton";
import ThemeToggleButton from "@/components/themeToggleButton";
import SettingsButton from "@/components/settingsButton";
import FilterComponent from "@/components/filterComponent";
import TasksButton from "@/components/tasksButton";
import CommunityButton from "@/components/communityButton";
import Calendar from "@/components/calendar";

/**
 * ShowOffHome component renders the same layout as the main page
 * but does NOT enforce authentication. It's intended for demonstration purposes.
 *
 * @component
 * @returns {JSX.Element} The rendered component without auth checks.
 */
export default function ShowOffHome() {
  // No useAuth() call here

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-full">
        <LeftNavDesktop />
      </div>
      <div className="ml-64 p-8 w-full relative min-h-screen flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <SearchBar setSearchQuery={setSearchQuery} />
            <FilterComponent setFilter={setFilter} />
            <TasksButton />
            <CommunityButton />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <AccountButton />
            <SettingsButton />
            <LogoutButton />
          </div>
        </div>
        <NotesInput />
        <div className="flex flex-grow">
          <div className="w-2/3 pr-4">
            <StickyNotesList searchQuery={searchQuery} filter={filter} />
          </div>
          <div className="w-1/3">
            <Calendar />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}