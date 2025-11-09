'use client';

import { useState } from 'react';
import {
  Home, BarChart3, CreditCard, Zap, User, LogIn, UserPlus,
  Search, Settings, Bell, TrendingUp, MoreVertical, HelpCircle, Menu, X
} from 'lucide-react';
import React from 'react';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false }) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
      active ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    <span className={active ? 'text-white' : 'text-gray-500'}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const TablesPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const authors = [
    { name: "Esthera Jackson", email: "esthera@simmmple.com", avatar: "https://i.pravatar.cc/150?img=1", function: "Manager", department: "Organization", status: "Online", employed: "14/06/21" },
    { name: "Alexa Liras", email: "alexa@simmmple.com", avatar: "https://i.pravatar.cc/150?img=5", function: "Programmer", department: "Developer", status: "Offline", employed: "14/06/21" },
    { name: "Laurent Michael", email: "laurent@simmmple.com", avatar: "https://i.pravatar.cc/150?img=12", function: "Executive", department: "Projects", status: "Online", employed: "14/06/21" },
    { name: "Freduardo Hill", email: "freduardo@simmmple.com", avatar: "https://i.pravatar.cc/150?img=13", function: "Manager", department: "Organization", status: "Online", employed: "14/06/21" },
    { name: "Daniel Thomas", email: "daniel@simmmple.com", avatar: "https://i.pravatar.cc/150?img=14", function: "Programmer", department: "Developer", status: "Offline", employed: "14/06/21" },
    { name: "Mark Wilson", email: "mark@simmmple.com", avatar: "https://i.pravatar.cc/150?img=15", function: "Designer", department: "UI/UX Design", status: "Offline", employed: "14/06/21" },
  ];

  const projects = [
    { name: "Chakra Soft UI Version", icon: "🎨", color: "bg-purple-500", budget: "$14,000", status: "Working", completion: 60 },
    { name: "Add Progress Track", icon: "📊", color: "bg-blue-500", budget: "$3,000", status: "Canceled", completion: 10 },
    { name: "Fix Platform Errors", icon: "🔧", color: "bg-orange-500", budget: "Not set", status: "Done", completion: 100 },
    { name: "Launch our Mobile App", icon: "🚀", color: "bg-green-500", budget: "$32,000", status: "Done", completion: 100 },
    { name: "Add the New Pricing Page", icon: "💎", color: "bg-blue-400", budget: "$400", status: "Working", completion: 25 },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:relative lg:translate-x-0 w-64 bg-white border-r border-gray-200 flex flex-col z-40`}
      >
        <div className="p-6 flex justify-between items-center lg:block">
          <h1 className="font-bold text-xl text-gray-800">DEXCHANGE SAAS</h1>
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-3 overflow-y-auto">
          <div className="mb-6">
            <NavItem icon={<Home size={20} />} label="Dashboard" active />
            <NavItem icon={<BarChart3 size={20} />} label="Tables" />
            <NavItem icon={<CreditCard size={20} />} label="Billing" />
            <NavItem icon={<Zap size={20} />} label="RTL" />
          </div>

          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-400 px-4 mb-2">ACCOUNT PAGES</p>
            <NavItem icon={<User size={20} />} label="Profile" />
            <NavItem icon={<LogIn size={20} />} label="Sign In" />
            <NavItem icon={<UserPlus size={20} />} label="Sign Up" />
          </div>
        </nav>

        <div className="p-4">
          <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-4 text-white text-center">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <HelpCircle size={24} className="text-teal-500" />
            </div>
            <p className="text-sm font-semibold mb-2">Need help?</p>
            <p className="text-xs mb-4 opacity-90">Please check our docs</p>
            <button className="w-full bg-white text-teal-500 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
              DOCUMENTATION
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 sticky top-0 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden text-gray-600"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div>
                <p className="text-sm text-gray-500 hidden sm:block">Pages / Tables</p>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Tables</h2>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Type here..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 w-48 sm:w-64"
                />
              </div>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <User size={20} />
                <span className="text-sm font-medium hidden sm:block">Sign In</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Authors Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 overflow-x-auto">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Authors Table</h3>
            </div>

            <div className="min-w-[600px]">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Author</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Function</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Status</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Employed</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {authors.map((author, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img src={author.avatar} alt={author.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">{author.name}</p>
                            <p className="text-xs text-gray-500">{author.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-semibold text-gray-800 text-sm">{author.function}</p>
                        <p className="text-xs text-gray-500">{author.department}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold ${
                            author.status === 'Online'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 text-gray-600'
                          }`}
                        >
                          {author.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{author.employed}</td>
                      <td className="py-4 px-6">
                        <button className="text-sm text-gray-600 hover:text-teal-500 font-medium">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Projects Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
            <div className="p-4 sm:p-6 border-b border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Projects</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <TrendingUp size={16} className="text-green-500" />
                <span className="font-semibold text-green-500">30 done</span>
                <span className="text-gray-400">this month</span>
              </p>
            </div>

            <div className="min-w-[600px]">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Companies</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Budget</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Status</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-gray-400 uppercase">Completion</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`${project.color} w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-lg`}>
                            {project.icon}
                          </div>
                          <span className="font-medium text-gray-800 text-sm">{project.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">{project.budget}</td>
                      <td className="py-4 px-6">{project.status}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-teal-500 min-w-[40px]">{project.completion}%</span>
                          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden min-w-[100px] sm:min-w-[150px]">
                            <div
                              className="bg-teal-500 h-full rounded-full transition-all"
                              style={{ width: `${project.completion}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical size={18} className="text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablesPage;
