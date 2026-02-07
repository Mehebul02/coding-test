'use client'

import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'

export default function DashboardLayout() {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-gray-100">
      
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

    
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainContent />
      </div>

 
      <div className="hidden xl:block">
        <RightSidebar />
      </div>
    </div>
  )
}
