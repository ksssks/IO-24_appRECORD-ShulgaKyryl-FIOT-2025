import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import Labs from "./pages/Labs.jsx";
import Footer from "./components/Footer.jsx";
import Lab1 from "./pages/Lab1.jsx";
import Lab2 from "./pages/Lab2.jsx";
import Lab3 from "./pages/Lab3.jsx";
import Lab4 from "./pages/Lab4.jsx";
import Lab5 from "./pages/Lab5.jsx";
import Lab6 from "./pages/Lab6.jsx";
import Lab7 from "./pages/Lab7.jsx";
import Lab8 from "./pages/Lab8.jsx";

const MyComponent = () => {
    return (
        <Router>
            <div className='px-4 sm:px-[2vw] md:px-[2vw] lg:px-[2vw]'>
                <Navbar />
                <Routes>
                    <Route path='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025' element={<Main/>} />
                    <Route path='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/labs' element={<Labs/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab1" element={<Lab1/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab2" element={<Lab2/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab3" element={<Lab3/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab4" element={<Lab4/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab5" element={<Lab5/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab6" element={<Lab6/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab7" element={<Lab7/>} />
                    <Route path="/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/lab8" element={<Lab8/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default MyComponent;