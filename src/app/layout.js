"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
 // Adjust import based on export type
import Footer from "./components/common/Footer"; // Adjust import based on export type
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/common/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // `once` set to true for animating elements only once
    });
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Uncomment and ensure correct path if required */}
        {/* <link rel="stylesheet" href="/assets/css/main.scss" /> */}
        <title>Your Website</title>
      </head>
      <body className="">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
