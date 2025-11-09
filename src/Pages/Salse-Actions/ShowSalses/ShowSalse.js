import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ShowSalse() {
    const Api_Url = process.env.REACT_APP_API_BASE_URL;
    const [data, setData] = useState([]);

    // 📦 جلب كل المستخدمين أول مرة
    useEffect(() => {
        const token = sessionStorage.getItem("token");

        const fetchData = async () => {
            try {
                const res = await axios.get(`${Api_Url}/user/show`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setData(res.data);
                console.log("Initial data:", res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        // 🕒 تحديث last_seen كل 10 ثواني فقط
        const interval = setInterval(async () => {
            try {
                const res = await axios.get(`${Api_Url}/user/show`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // نحدّث فقط last_seen
                setData((prevData) =>
                    prevData.map((user) => {
                        const updated = res.data.find((u) => u.id === user.id);
                        return { ...user, last_seen: updated?.last_seen || user.last_seen };
                    })
                );
            } catch (error) {
                console.error("Error updating last_seen:", error);
            }
        }, 10000); // كل 10 ثواني

        return () => clearInterval(interval);
    }, [Api_Url]);

    // 🧠 دالة حساب الحالة (online / offline)
    const getStatus = (lastSeen) => {
        if (!lastSeen) return { online: false, text: "غير متاح" };

        const last = new Date(lastSeen);
        const now = new Date();
        const diffSeconds = Math.floor((now - last) / 1000);

        // أقل من دقيقة = متصل
        if (diffSeconds < 60) {
            return { online: true, text: "متصل الآن" };
        } else {
            const minutes = Math.floor(diffSeconds / 60);
            return { online: false, text: `آخر ظهور منذ ${minutes} دقيقة` };
        }
    };
    return (
        <section className="mt-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-lg text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">الاسم</th>
                            <th className="px-6 py-3">الوظيفه</th>
                            <th className="px-6 py-3">البريد الإلكتروني</th>
                            <th className="px-6 py-3">الحاله</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            const status = getStatus(item.last_seen);
                            return (
                                <tr
                                    key={item.id || index}
                                    className=" border-b text-center bg-Table-bg border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.position}</td>
                                    <td className="px-6 py-4">{item.email}</td>

                                    {/* ✅ الحالة */}
                                    <td className="px-6 py-4 flex justify-center items-center gap-2">
                                        {status.online ? (
                                            <>
                                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                                <span className="text-green-600 font-medium">
                                                    {status.text}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="w-3 h-3 bg-red-600 rotate-45"></span>
                                                <span className="text-red-500 font-medium">
                                                    {status.text}
                                                </span>
                                            </>
                                        )}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button className="px-5 py-1 bg-red-600 text-white font-medium rounded-md">
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
