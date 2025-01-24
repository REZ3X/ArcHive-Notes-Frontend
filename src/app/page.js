"use client"; // Mark as a client component

import React, { useState } from "react";
import LeftNavDesktop from "@/components/navs/leftNavDesktop";
import SearchBar from "@/components/searchBar";
import LogoutButton from "@/components/logoutButton";
import NotesInput from "@/components/notesInput";
import Footer from "@/components/footer";
import StickyNotesList from "@/components/stickyNotesList";
import useAuth from "@/hooks/useAuth";
import FilterComponent from "@/components/filterComponent";
import TasksButton from "@/components/tasksButton";
import CommunityButton from "@/components/communityButton";
import ThemeToggleButton from "@/components/themeToggleButton";
import AccountButton from "@/components/accountButton";
import SettingsButton from "@/components/settingsButton";
import Calendar from "@/components/calendar"; // Import Calendar component

export default function Home() {
    useAuth(); // Check for authentication

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [showComparison, setShowComparison] = useState(false);

    const handleUpgradeClick = () => {
        setShowComparison(true);
    };

    const handleClose = () => {
        setShowComparison(false);
    };

    return (
        <div className="flex">
            <div className="fixed left-0 top-0 h-full">
                <LeftNavDesktop />
            </div>
            <div className="ml-64 p-8 w-full relative min-h-screen flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                        <SearchBar
                            setSearchQuery={setSearchQuery}
                            disabled={showComparison}
                        />
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
                <NotesInput />
                <div className="flex z-10 flex-grow">
                    <div className="w-2/3 pr-4">
                        <StickyNotesList searchQuery={searchQuery} filter={filter} disabled={showComparison} />
                    </div>
                    <div className="w-1/3">
                        <Calendar disabled={showComparison} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
