import React, {useState } from 'react';
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025'><p>web_2025_shulga</p></Link>
            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavLink to='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025' className='flex flex-col items-center gap-1 '>
                    <p>main</p>
                    <hr className='w-3/4 border-none h-[1.5px] hidden' />
                </NavLink>
                <NavLink to='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/labs' className='flex flex-col items-center gap-1 '>
                    <p>labs</p>
                    <hr className='w-3/4 border-none h-[1.5px] hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-7'>

                <img onClick={() => setVisible(true)} src={assets.menu} className='w-7 cursor-pointer  sm:hidden'
                     alt='Menu' />
            </div>
            {/* sidebar menu for small screen */}
            <div
                className={`fixed inset-0 z-50 bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col'>
                    <div onClick={() => setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-7 cursor-rotate-180 ' alt="Dropdown" />
                        <p>back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/'>main</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-ShulgaKyryl-FIOT-2025/labs'>labs</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;