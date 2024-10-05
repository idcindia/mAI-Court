"use client"
import { useState } from 'react';
import AdminSidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UsersManagement from './components/UsersManagement';
import LegalResources from './components/LegalResources';
import BlogManagement from './components/BlogManagement';

const Page = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [sidebarState, setSidebarState] = useState(true);

    const renderPage = () => {
        switch (activePage) {
            case '/admin/dashboard':
                return <Dashboard />;
            case '/admin/usersmanagement':
                return <UsersManagement />;
            case '/admin/legal-resources':
                return <LegalResources />;
            case '/admin/blog':
                return <BlogManagement />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex">
            <AdminSidebar setActivePage={setActivePage} sidebarState={sidebarState} />
            <div className="flex-1">
                <main className="p-4">{renderPage()}</main>
            </div>
        </div>
    );
};

export default Page;
