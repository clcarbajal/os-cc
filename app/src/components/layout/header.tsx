"use client";

import { Bell, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Restaurant selector */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">
          <span className="font-medium">Select Restaurant</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative rounded-md p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
            <span className="text-sm font-medium text-white">U</span>
          </div>
        </div>
      </div>
    </header>
  );
}
