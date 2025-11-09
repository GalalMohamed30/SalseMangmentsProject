import { Link, useLocation } from 'react-router-dom';
// import Logo from '../image/Logo.svg';
import { useState } from 'react';
import { Maximize } from 'lucide-react';

const Links = [
    {
        title: 'تحليل',
        url: "/",
        roles: ['admin', 'dev']
    },
    {
        title: 'اضف سلزجي',
        url: "/sing-up",
        roles: ['admin', 'dev', 'leader']
    },
    {
        title: 'عرض السلزجية',
        url: "/show-salse",
        roles: ['admin', 'dev', 'leader']
    },
    {
        title: 'عرض النيتش',
        url: "/show-niche",
        roles: ['admin', 'dev', 'leader']
    },
    {
        title: 'عرض التاسكات',
        url: "/show-tasks",
        roles: ['admin', 'tele-salse', 'salse']
    },

];

export default function Navebar({ setIsSidebarOpen }) {
    const position = sessionStorage.getItem("position");
    const location = useLocation();



    return (
        <nav>
            <aside id="default-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-Main-color">
                    <div className='border-b-2 border-[#ffffff2f] py-5'>
                        {/* <a href="https://fazaaplatform.com/">
                            <div className='w-[80%] h-[80px] mx-auto'>
                                <img src={Logo} className='w-full h-full' alt='Logo' />
                            </div>
                        </a> */}
                    </div>

                    <ul className="space-y-2 font-medium mt-5">

                        {Links.filter(link => link.roles.includes(position)).map((item, index) => (
                            <div key={index} className="border-b-2 border-[#ffffff2f] relative">
                                <li
                                    className={`text-center text-[20px] text-white py-1 transform duration-300 
                    rounded-md hover:bg-Primary-color
                    ${location.pathname === item.url ? 'bg-Primary-color' : ''}`}
                                >
                                    <Link to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>

                            </div>
                        ))}
                        <div className='absolute bottom-5 w-full px-4'>
                            <div className='w-[90%] mx-auto ' >
                                <h1 className='text-center text-lg border-b-2 pb-1'>Settings</h1>
                                <div className='py-3'>
                                    <button
                                        onClick={() => setIsSidebarOpen(false)}
                                        className=" bg-Primary-color hover:bg-Main-color text-white p-3 rounded-md shadow-lg z-50 transition-all duration-300"
                                    >
                                        <Maximize size={24} />
                                    </button>
                                </div>

                            </div>
                            <div className='w-[90%] mx-auto'>
                                <button
                                    className='w-full py-1 rounded-md bg-red-600 text-white text-center'
                                    onClick={() => {
                                        sessionStorage.removeItem("position");
                                        sessionStorage.removeItem("token");
                                        window.location.reload();
                                    }}
                                >
                                    خروج
                                </button>
                            </div>
                        </div>

                    </ul>
                </div>
            </aside>
        </nav>
    );
}