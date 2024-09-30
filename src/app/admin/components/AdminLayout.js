import React from 'react';
import AdminHeader from './AdminHeader';  

import Sidebar from './Sidebar'; 

const AdminLayout = ({ children }) => {
    return (
        <>
            <AdminHeader />
            <Sidebar />
            <div className="bg-gray-100 min-h-screen p-4">
                {children}
            </div>
        </>
    );
};

export default AdminLayout;
