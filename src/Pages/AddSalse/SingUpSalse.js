import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function SingUpSalse() {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [accept, setAccept] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const FormLoginHandelling = async (e) => {
        e.preventDefault();
        setAccept(true);
        setError(null);

        const { name, position, email, password, repassword } = formData;

        // ✅ التحقق من الحقول قبل الإرسال
        if (!name || !position || !email || !password || !repassword) {
            toast.error("يجب ملء جميع البيانات");
            return;
        }

        if (password.length < 8) {
            toast.error("كلمة المرور يجب أن تكون على الأقل 8 أحرف");
            return;
        }

        if (password !== repassword) {
            toast.error("كلمة المرور غير متطابقة");
            return;
        }

        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register", {
                name,
                position,
                email,
                password,
                password_confirmation: repassword,
            });

            toast.success("تم التسجيل بنجاح ✅");
            console.log("Response:", res.data);

            // إعادة تعيين الفورم بعد التسجيل الناجح
            setFormData({
                name: "",
                position: "",
                email: "",
                password: "",
                repassword: "",
            });
            setAccept(false);
            setError(null);
        } catch (err) {
            console.error("Error:", err.response);
            if (err.response?.status === 422) {
                toast.error("البريد الإلكتروني مستخدم بالفعل");
            } else if (err.response?.status === 404) {
                toast.error("المسار غير موجود (تحقق من الرابط)");
            } else {
                toast.error("حدث خطأ أثناء التسجيل");
            }
            setError(err.response?.status);
        }
    };

    return (
        <section>
            <form
                className="w-full h-full pb-5 rounded-md shadow my-[2%]"
                onSubmit={FormLoginHandelling}
            >
                <h1 className="text-start pt-5 text-3xl font-bold text-Primary-color">
                    أضف سلزجي جديد
                </h1>

                <div className="w-full pt-10">
                    {/* الاسم */}
                    <div className="py-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                            >
                                الاسم
                            </label>
                        </div>
                    </div>

                    {/* الوظيفة */}
                    <div className="py-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <label
                                htmlFor="position"
                                className="block mb-2 text-xl text-gray-500 dark:text-gray-400"
                            >
                                اختر الوظيفة
                            </label>
                            <select
                                name="position"
                                id="position"
                                value={formData.position}
                                onChange={handleChange}
                                className="block w-full py-2.5 px-2 text-lg text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 cursor-pointer transition-all duration-300"
                            >
                                <option value="" disabled hidden>
                                    اختر الوظيفة
                                </option>
                                <option value="admin" className="text-black">
                                    Admin
                                </option>
                                <option value="leader" className="text-black">
                                    Leader
                                </option>
                                <option value="tele-salse" className="text-black">
                                    Tele-Salse
                                </option>
                                <option value="salse" className="text-black">
                                    Salse
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* البريد الإلكتروني */}
                    <div className="py-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                            >
                                البريد الإلكتروني
                            </label>
                        </div>
                    </div>

                    {/* كلمة المرور */}
                    <div className="py-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="password"
                                className="peer-focus:font-medium absolute text-xl dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                            >
                                كلمة المرور
                            </label>
                        </div>
                    </div>

                    {/* تأكيد كلمة المرور */}
                    <div className="py-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="repassword"
                                id="repassword"
                                value={formData.repassword}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="repassword"
                                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
                            >
                                تأكيد كلمة المرور
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-[250px] h-[40px] mx-auto rounded-md bg-green-600 text-white font-semibold transform duration-150 hover:scale-105"
                    >
                        إضافة
                    </button>
                </div>
            </form>

            <Toaster position="top-center" reverseOrder={false} />
        </section>
    );
}
