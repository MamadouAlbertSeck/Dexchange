'use client';

import { useState } from 'react';
import { BarChart3, Globe, WalletMinimal, File, CreditCard, Zap, Home, Receipt, User, LogIn, UserPlus, Search, Settings, Bell, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react';

type NavItemProps = {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    sidebarOpen: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, sidebarOpen }) => (
    <button
        className={`w-full flex items-center gap-3 px-2 md:px-4 py-2 rounded-lg mb-1 transition-colors ${
            active ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-50'
        }`}
    >
        <span className={active ? 'text-white' : 'text-gray-500'}>{icon}</span>
        {sidebarOpen && <span className="text-sm md:text-base font-medium">{label}</span>}
    </button>
);

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const stats = [
        { label: "Today's Money", value: "$53,000", change: "+55%", positive: true, icon: WalletMinimal },
        { label: "Today's Users", value: "2,300", change: "+5%", positive: true, icon: Globe },
        { label: "New Clients", value: "+3,052", change: "-14%", positive: false, icon: File },
        { label: "Total Sales", value: "$173,000", change: "+8%", positive: true, icon: ShoppingCart }
    ];

    const projects = [
        { name: "Chakra Soft UI Version", icon: "🎨", members: 4, budget: "$14,000", completion: 60, color: "bg-purple-500" },
        { name: "Add Progress Track", icon: "💎", members: 3, budget: "$3,000", completion: 10, color: "bg-blue-500" },
        { name: "Fix Platform Errors", icon: "🛠️", members: 2, budget: "Not set", completion: 100, color: "bg-gray-500" },
        { name: "Launch our Mobile App", icon: "📱", members: 0, budget: "$32,000", completion: 100, color: "bg-teal-500" },
        { name: "Add the New Pricing Page", icon: "📄", members: 0, budget: "$400", completion: 25, color: "bg-yellow-500" },
        { name: "Redesign New Online Shop", icon: "🛒", members: 2, budget: "$7,600", completion: 40, color: "bg-red-500" }
    ];

    const orders = [
        { icon: "📦", title: "$2400, Design changes", time: "22 DEC 7:20 PM", color: "bg-orange-100 text-orange-600" },
        { icon: "🛍️", title: "New order #4219423", time: "21 DEC 11:21 PM", color: "bg-blue-100 text-blue-600" },
        { icon: "💳", title: "Server Payments for April", time: "21 DEC 9:48 PM", color: "bg-green-100 text-green-600" },
        { icon: "💳", title: "New card added for order #3210145", time: "20 DEC 3:52 PM", color: "bg-purple-100 text-purple-600" },
        { icon: "📦", title: "Unlock packages for Development", time: "19 DEC 11:35 PM", color: "bg-teal-100 text-teal-600" },
        { icon: "🛍️", title: "New order #9851258", time: "18 DEC 4:41 PM", color: "bg-pink-100 text-pink-600" }
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-48 md:w-52' : 'w-16 md:w-20'} bg-black border-r border-gray-200 transition-all duration-300 flex flex-col`}>
                <div className="p-4">
                    <h1 className={`font-bold text-center text-gray-800 text-xs md:text-sm`}>
                        {sidebarOpen ? 'DEXCHANGE SAAS' : 'DEX'}
                    </h1>
                </div>

                <nav className="flex-1 px-2 md:px-3">
                    <div className="mb-1">
                        <NavItem icon={<Home size={15} />} label="Dashboard" active sidebarOpen={sidebarOpen} />
                        <NavItem icon={<BarChart3 size={15} />} label="TRANSACTIONS" active sidebarOpen={sidebarOpen} />
                        <NavItem icon={<CreditCard size={15} />} label="Billing" active sidebarOpen={sidebarOpen} />
                        <NavItem icon={<Zap size={15} />} label="RTL" active sidebarOpen={sidebarOpen} />
                    </div>

                    <div className="mb-3">
                        {sidebarOpen && <p className="text-[10px] md:text-xs font-semibold text-gray-400 px-4 mb-2">ACCOUNT PAGES</p>}
                        <NavItem icon={<User size={20} />} label="Profile" active sidebarOpen={sidebarOpen} />
                        <NavItem icon={<LogIn size={20} />} label="Sign In"  active sidebarOpen={sidebarOpen} />
                        <NavItem icon={<UserPlus size={20} />} label="Sign Up" active sidebarOpen={sidebarOpen} />
                    </div>

                    <div className="p-2 md:p-4">
                        {sidebarOpen && (
                            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-4 text-white">
                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mb-3">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <p className="text-xs font-semibold mb-1">DOCUMENTATION</p>
                                <p className="text-sm mb-3">Need help?</p>
                                <p className="text-xs mb-3">Please check our docs</p>
                            </div>
                        )}
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <header className="p-2 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4">
                    <div>
                        <p className="text-xs md:text-sm text-gray-500">Pages / Dashboard</p>
                        <h2 className="text-sm md:text-lg font-semibold text-gray-800">Dashboard</h2>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input
                                type="text"
                                placeholder="Type here..."
                                className="w-full md:w-[200px] h-8 pl-10 pr-4 border bg-white border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs md:text-sm"
                            />
                        </div>

                        <button className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-black rounded-lg text-xs md:text-sm font-medium">
                            <User size={15} className="text-gray-600" />
                            <span>Sign In</span>
                        </button>

                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Settings size={15} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Bell size={15} className="text-gray-600" />
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-2 md:p-4">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-2 md:p-4 shadow-sm border border-gray-100 flex justify-between items-start">
                                <div>
                                    <p className="text-xs md:text-sm text-gray-500 mb-1">{stat.label}</p>
                                    <div className="flex items-baseline gap-1">
                                        <p className="text-sm md:text-base font-bold text-gray-800">{stat.value}</p>
                                        <span className={`text-xs md:text-sm font-semibold ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-teal-500 p-2 md:p-3 rounded-lg">
                                    <stat.icon className="text-white" size={15} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between">
                            <div className="flex-1 pr-4 mb-4 md:mb-0">
                                <p className="text-xs md:text-sm text-gray-400 mb-1">Lorem Ipsum</p>
                                <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2">Lorem Dashboard</h3>
                                <p className="text-xs md:text-sm text-gray-500 mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="flex items-center gap-1 md:gap-2 text-gray-800 font-medium hover:gap-3 transition-all text-xs md:text-sm">
                                    Read more <ArrowRight size={14} />
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl p-4 md:p-5 text-white flex items-center justify-center min-w-[120px] md:min-w-[150px]">
                                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center mr-2 md:mr-3">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <span className="text-xl md:text-2xl font-light">chakra</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-4 md:p-6 text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-40">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-[10px] md:text-xs uppercase tracking-wide text-teal-300 mb-2">
                                        Lorem Ipsum
                                    </p>
                                    <h3 className="text-sm md:text-lg font-semibold mb-2 leading-snug">
                                        Lorem Ipsum Dolor
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed mb-6">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi
                                        nisi, tincidunt sit amet.
                                    </p>
                                </div>
                                <button className="flex items-center gap-1 md:gap-2 text-sm md:text-base text-white font-medium hover:gap-3 transition-all self-start">
                                    Read more <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Projects and Orders */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Projects */}
                        <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 overflow-x-auto">
                            <div className="flex justify-between items-center mb-4 md:mb-6">
                                <h3 className="text-lg md:text-xl font-bold text-gray-800">Projects</h3>
                            </div>
                            <table className="w-full min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="text-left py-2 px-2 text-xs md:text-sm font-semibold text-gray-500 uppercase">Companies</th>
                                        <th className="text-left py-2 px-2 text-xs md:text-sm font-semibold text-gray-500 uppercase">Members</th>
                                        <th className="text-left py-2 px-2 text-xs md:text-sm font-semibold text-gray-500 uppercase">Budget</th>
                                        <th className="text-left py-2 px-2 text-xs md:text-sm font-semibold text-gray-500 uppercase">Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, idx) => (
                                        <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                                            <td className="py-3 px-2">
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <div className={`${project.color} w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-sm md:text-xl`}>
                                                        {project.icon}
                                                    </div>
                                                    <span className="font-medium text-gray-800 text-xs md:text-sm">{project.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 px-2">
                                                <div className="flex -space-x-1 md:-space-x-2">
                                                    {[...Array(project.members)].map((_, i) => (
                                                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="py-3 px-2 text-xs md:text-sm font-medium text-gray-700">{project.budget}</td>
                                            <td className="py-3 px-2">
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className="bg-teal-500 h-full rounded-full transition-all"
                                                            style={{ width: `${project.completion}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs md:text-sm font-semibold text-teal-500">{project.completion}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Orders Overview */}
                        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Orders overview</h3>
                            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 flex items-center gap-1 md:gap-2">
                                <TrendingUp size={16} className="text-green-500" />
                                <span className="font-semibold text-gray-700 text-xs md:text-sm">+30%</span> this month
                            </p>
                            <div className="space-y-3 md:space-y-4">
                                {orders.map((order, idx) => (
                                    <div key={idx} className="flex items-start gap-2 md:gap-4">
                                        <div className={`${order.color} w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-sm md:text-xl flex-shrink-0`}>
                                            {order.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-800 text-xs md:text-sm mb-1">{order.title}</p>
                                            <p className="text-xs md:text-sm text-gray-500">{order.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
