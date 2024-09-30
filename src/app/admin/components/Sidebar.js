// src/app/admin/components/AdminSidebar.js
"use client"
import React from 'react';
import Link from 'next/link';

const AdminSidebar = ({ sidebarState }) => {
    return (
        <aside className={`bg-gray-800 text-white h-full lg:w-64 transition-transform ${sidebarState ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative`}>
            <nav className="flex flex-col p-4">
                <Link href="/admin" className="py-2 px-3 hover:bg-gray-700 rounded">Dashboard</Link>
                <Link href="/admin/manage-users" className="py-2 px-3 hover:bg-gray-700 rounded">User Management</Link>
                <Link href="/admin/legal-resources" className="py-2 px-3 hover:bg-gray-700 rounded">Legal Resources</Link>
                <Link href="/admin/analytics" className="py-2 px-3 hover:bg-gray-700 rounded">Analytics</Link>
                <Link href="/admin/settings" className="py-2 px-3 hover:bg-gray-700 rounded">Settings</Link>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
