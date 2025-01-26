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
import FilterComponent from "@/components/demo/filterComponent";
import TasksButton from "@/components/tasksButton";
import CommunityButton from "@/components/communityButton";
import Calendar from "@/components/calendar";
import AccountComparison from "@/components/accountComparison";
import ExpandedNote from "@/components/demo/expandedNote";

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
  const [showComparison, setShowComparison] = useState(false);
  const [expandedNote, setExpandedNote] = useState(null);

  const handleUpgradeClick = () => {
    setShowComparison(true);
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  const handleNoteClick = (note) => {
    setExpandedNote(note);
  };

  const handleCloseNote = () => {
    setExpandedNote(null);
  };

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-full z-30">
        <LeftNavDesktop onUpgradeClick={handleUpgradeClick} />
      </div>
      <div className={`ml-64 p-8 w-full relative min-h-screen flex flex-col ${showComparison ? 'pointer-events-none opacity-50' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <SearchBar setSearchQuery={setSearchQuery} disabled={showComparison} />
            <FilterComponent setFilter={setFilter} disabled={showComparison} />
            <TasksButton disabled={showComparison} />
            <CommunityButton disabled={showComparison} />
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton disabled={showComparison} />
            <AccountButton disabled={showComparison} />
            <SettingsButton disabled={showComparison} />
            <LogoutButton disabled={showComparison} />
          </div>
        </div>
        <NotesInput disabled={showComparison} />
        <div className="flex z-10 flex-grow">
          <div className="w-2/3 pr-4">
            <StickyNotesList searchQuery={searchQuery} filter={filter} onNoteClick={handleNoteClick} disabled={showComparison} />
          </div>
          <div className="w-1/3">
            <Calendar disabled={showComparison} />
          </div>
        </div>
        <Footer />
      </div>
      {showComparison && <AccountComparison onClose={handleCloseComparison} />}
      {expandedNote && <ExpandedNote note={expandedNote} onClose={handleCloseNote} />}
    </div>
  );
}