
"use client"
import React from 'react';
import Link from 'next/link';
import {adminData} from '@/app/data/dashboadTab'; 

const AdminSidebar = ({ sidebarState }) => {
    return (
        <aside className={`bg-gray-800 text-white h-screen lg:w-64 transition-transform ${sidebarState ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative`}>
            <nav className="flex flex-col p-4">
                {adminData?.map((item) => (
                    <Link key={item?.id} href={item?.path} className="py-2 px-3 hover:bg-gray-700 rounded flex items-center space-x-2">
                        <i className={item?.icon}></i>
                        <span>{item?.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;
