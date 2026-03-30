'use client';

import React from 'react';
import { LayoutDashboard, Users, BookOpen, Settings, LogOut, Bell, Search, Hexagon } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-card/30 backdrop-blur-xl flex flex-col">
        <div className="p-6 flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-emerald-500 rounded-lg flex items-center justify-center">
            <Hexagon className="text-white w-5 h-5 fill-white/20" />
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight">TalentFlow <span className="text-emerald-500">AI</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active href="/dashboard" />
          <NavItem icon={<Users className="w-5 h-5" />} label="Mentors" href="/dashboard/mentors" />
          <NavItem icon={<BookOpen className="w-5 h-5" />} label="Learning" href="/dashboard/learning" />
          <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" href="/dashboard/settings" />
        </nav>

        <div className="p-6 border-t border-white/5">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors w-full px-4 py-2">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-card/10 backdrop-blur-md flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search skills, courses, or mentors..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-background" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Devraj Singh</p>
                <p className="text-xs text-muted-foreground">Lead Architect</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border-2 border-white/10 shadow-lg" />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, href }: { icon: React.ReactNode, label: string, active?: boolean, href: string }) {
  return (
    <Link 
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${active ? 'bg-primary/10 text-primary shadow-sm shadow-primary/10' : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'}`}
    >
      <div className={`${active ? 'text-primary' : 'group-hover:text-foreground'} transition-colors`}>
        {icon}
      </div>
      <span className="font-semibold text-sm">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
    </Link>
  );
}
