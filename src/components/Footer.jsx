import React from 'react';
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <p className='w-full md:w-2/3'>мої звіти по лабораторним з дисципліни «WEB-2025-орієнтовані технології. Основи Frontend та
                        Backend розробок»</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>site</p>
                    <ul className='flex flex-col gap-1'>
                        <li>main</li>
                        <li>labs</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>contact with me</p>
                    <ul className='flex flex-col gap-1'>
                        <li>050 232 0 239</li>
                        <li>shulga.kirill01@gmail.com</li>
                    </ul>
                    <div className='flex gap-3 mt-5'>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Instagram">
                            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                           aria-label="Facebook">
                            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                           aria-label="X (Twitter)">
                            <img src={assets.twitter} alt="X (Twitter)" className="w-6 h-6 hover:scale-105 transition-all duration-300 focus:outline-none"/>
                        </a>
                    </div>
                </div>


            </div>
            <div>
                <hr/>
                <p className='py-5 text-m text-center'>© 2025 web</p>
            </div>
        </div>
    );
};

export default Footer;