import { ChevronDown, Home, FileText, Users, ShoppingCart, Clock, BarChart3, PenTool, CheckSquare, Package, LogOut, User } from 'lucide-react'
import NavigationButtons from '../shared/NavigationButtons'
import UserProfile from './UserProfile'
import ActionButton from '../shared/ActionButton'

export default function Sidebar() {

  const menuItems = [
    { name: 'ONEBOARD', icon: Home },
    { name: 'ONE AIS', icon: FileText },
    { name: 'ONE HCM', icon: Users },
    { name: 'ONE PLM', icon: ShoppingCart },
    { name: 'ONE TNA', icon: Clock },
    { name: 'BUDGET', icon: BarChart3 },
    { name: 'ONE PMS', icon: PenTool },
    { name: 'ONE QMS', icon: CheckSquare },
    { name: 'ONE SCM', icon: Package },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-indigo-600 text-center">Logo</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between gap-2">
          <NavigationButtons text="PREV" direction="prev" />
          <NavigationButtons text="NEXT" direction="next" />
        </div>


        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={index}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-cyan-50 transition group"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-cyan-600 group-hover:text-indigo-600 transition" />
                  <span className="font-semibold text-gray-700 group-hover:text-indigo-600 transition text-sm">
                    {item.name}
                  </span>
                </div>
                <ChevronDown size={18} className="text-gray-400 group-hover:text-indigo-600 transition" />
              </button>
            )
          })}
        </nav>

      
        <div className="border-t border-gray-200">
          {/* User Profile */}
          <UserProfile />

          {/* Account & Logout Buttons */}
          <div className="px-4 py-3 flex gap-2">
            <ActionButton
              text="ACCOUNT"
              icon={User}
              bgColor="bg-cyan-100"
              textColor="text-cyan-600"
              hoverColor="hover:bg-cyan-200"
            />

            <ActionButton
              text="LOGOUT"
              icon={LogOut}
              bgColor="bg-red-100"
              textColor="text-red-600"
              hoverColor="hover:bg-red-200"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
