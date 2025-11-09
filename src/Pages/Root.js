import React, { useState } from "react";
import Navebar from "../components/Navbar/Navebar";
import { Outlet } from "react-router-dom";
import { MaximizeIcon, Minimize } from "lucide-react"; // أيقونة زر الفتح
import CheckUsers from "../components/Check/CheckUsers";
import Particles from "../components/Animation/Particles";


export default function Root() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);



    return (
        <div className="relative flex min-h-screen transition-all duration-300  text-white" >

            <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            {/* <CheckUsers /> */}

            daskvvdsovihdsvnvovedsferoihvsdnfvmfvnfdukigdsfhgfldsk
            {/* Main Content */}
            <div
                className={`transition-all duration-300 ${isSidebarOpen ? "w-[80%] mx-auto" : "w-[95%] mx-auto"
                    } p-6`}
                dir="rtl"
            >
                <Outlet />
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="w-[20%] transition-all duration-300  relative">
                    <Navebar
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                </div>
            )}

            {/* زر فتح النافبار لما تكون مقفولة */}
            {!isSidebarOpen && (
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="fixed top-4 right-4 bg-Primary-color hover:bg-Main-color text-white p-3 rounded-md shadow-lg z-50 transition-all duration-300"
                >
                    <Minimize size={24} />
                </button>
            )}


        </div>
    );
}