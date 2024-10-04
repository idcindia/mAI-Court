"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import Footer from "./components/common/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/common/Navbar";
import AdminHeader from "./admin/components/AdminHeader";
import { usePathname } from "next/navigation"; // usePathname instead of useRouter

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();  // Using usePathname to directly access the current path
  const [isAdminRoute, setIsAdminRoute] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Check if current route is an admin route
    if (pathname) {
      setIsAdminRoute(pathname.startsWith("/admin"));
    }
  }, [pathname]);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mAI Court</title>
      </head>
      <body className="">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />

            
            {isAdminRoute ? <AdminHeader /> : <Navbar />}

            {children}

           
            {!isAdminRoute && <Footer />}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
