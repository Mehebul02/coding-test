'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LeftSidebar from './LeftSidebar'
import MainContent from './mainContent/MainContent'
import RightSidebar from './RightSidebar'

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen w-full overflow-hidden">

            {/* Mobile menu toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile overlay */}
            {isSidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Left Sidebar */}
            <div
                className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <LeftSidebar />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Scrollable main content */}
                <div className="flex-1 overflow-auto p-4">
                    <MainContent />
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden xl:block">
                <RightSidebar />
            </div>
        </div>
    )
}
