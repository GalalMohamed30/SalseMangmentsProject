import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Notification from '../../Sound/insight-578.mp3';

export default function CheckUsers() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    // ✅ دالة لتشغيل الصوت باستخدام Web Audio API
    const playSound = async () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const response = await fetch(Notification);
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;

            // 🔉 إنشاء gainNode لتقليل الصوت
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 0.2; // 👈 هنا نتحكم في مستوى الصوت (من 0 إلى 1)

            // توصيل الصوت للمخارج
            source.connect(gainNode);
            gainNode.connect(audioContext.destination);

            source.start(0);
        } catch (error) {
            console.warn("Failed to play sound:", error);
        }
    };


    // ✅ فتح البوب أب بعد وقت محدد
    useEffect(() => {
        const firstTimer = setTimeout(() => {
            setIsOpen(true);
            playSound(); // 🔊 شغل الصوت أول مرة

            const repeatInterval = setInterval(() => {
                setIsOpen(true);
                playSound(); // 🔊 شغل الصوت كل مرة تفتح فيها
            }, 30 * 60 * 1000); // كل 10 ثواني (بدل 30 دقيقة)

            return () => clearInterval(repeatInterval);
        }, 1000 * 60 * 60);

        return () => clearTimeout(firstTimer);
    }, []);

    // ✅ لو المستخدم تجاهل البوب أب
    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(() => {
                sessionStorage.clear();
                window.location.reload();
            }, 5 * 60 * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    const handleOffline = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("position");
        window.location.reload();
    };

    const handleOnline = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="
                        fixed top-5 left-1/2 -translate-x-1/2 
                        w-[400px] max-w-[90%] h-auto py-6 px-5
                        bg-Main-color text-white font-medium
                        rounded-2xl shadow-2xl z-50
                        flex flex-col justify-between items-center
                        animate-fadeIn
                    "
                >
                    <h1 className="text-2xl font-semibold text-center mb-4">
                        🔍 تحقق الحالة
                    </h1>

                    <div className="flex justify-center w-full gap-4 mb-4">
                        <button
                            onClick={handleOffline}
                            className="w-full h-[45px] bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg text-lg font-medium"
                        >
                            أوفلاين
                        </button>
                        <button
                            onClick={handleOnline}
                            className="w-full h-[45px] bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-lg text-lg font-medium"
                        >
                            أونلاين
                        </button>
                    </div>

                    <p className="text-sm text-gray-200 text-center opacity-90">
                        اختر حالتك الحالية لتحديث النظام
                    </p>
                </div>
            )}
        </>
    );
}
