"use client";
import { Inter } from "next/font/google";
import "./globals.css";
// import "/public/assets/css/main.scss";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import {Header} from "./components/common/Header.js";
import {Footer} from "./components/common/Footer.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />
         
            {children}
          
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
