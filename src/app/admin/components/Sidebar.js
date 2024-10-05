"use client";
import React from "react";
import Link from "next/link";
import { adminData } from "@/app/data/dashboadTab";

const AdminSidebar = ({ setActivePage, sidebarState }) => {
    return (
        <aside
            className={`bg-gray-800 text-white h-screen lg:w-64 transition-transform ${
                sidebarState ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 fixed lg:relative`}
        >
            <nav className="flex flex-col p-4">
                {adminData?.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePage(item.path)} 
                        className="py-2 px-3 hover:bg-gray-700 rounded flex items-center space-x-2"
                    >
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
};

export default AdminSidebar;
