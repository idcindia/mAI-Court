// src/app/admin/page.js
"use client"

import AdminLayout from './components/AdminLayout';

const AdminDashboard = () => {
    return (
        <AdminLayout>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example Cards */}
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <h2 className="font-bold">Total Users</h2>
                        <p className="text-2xl">150</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg shadow">
                        <h2 className="font-bold">Legal Resources</h2>
                        <p className="text-2xl">25</p>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg shadow">
                        <h2 className="font-bold">Pending Consultations</h2>
                        <p className="text-2xl">12</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
