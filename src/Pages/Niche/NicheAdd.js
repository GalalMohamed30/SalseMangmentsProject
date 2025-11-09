import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function NicheAdd() {

    const [name, setName] = useState('');
    const [img, setImg] = useState(null);
    const [dragActive, setDragActive] = useState(false);


    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setImg(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        if (file) setImg(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    return (
        <section>
            <div className='mb-5'>

                <button
                    onClick={() => navigate(-1)}
                    className='px-10 py-1 rounded-md bg-red-500 transform duration-150 text-white font-semibold hover:scale-105'>
                    رجوع
                </button>

            </div>
            <form classNameName='w-full  h-full pb-5  rounded-md shadow  my-[2%]'
                autoComplete="off"
            // onSubmit={FormLoginHandelling}
            >
                <h1 className='text-start pt-5 text-3xl font-bold text-Primary-color'>
                    أضف نيتش
                </h1>

                <div className='w-full  pt-10'>
                    <div className='py-5'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="floating_name"
                                id="floating_name"
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                الاسم
                            </label>
                        </div>
                    </div>
                </div>

                <div className="w-full pt-10">
                    <div className="py-5">
                        <label
                            htmlFor="file_input"
                            className="block mb-3 text-lg font-semibold text-gray-800 dark:text-white"
                        >
                            ارفع الصورة
                        </label>

                        <div
                            className={`relative flex flex-col items-center justify-center w-full py-10 px-5 text-center border-2 border-dashed rounded-xl transition-all duration-300 ${dragActive
                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-400 bg-gray-100 dark:bg-gray-800"
                                }`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <input
                                id="file_input"
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                onChange={handleFileChange}
                            />

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-12 h-12 text-blue-600 mb-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 16.5v-9m0 0l-3 3m3-3l3 3M4.5 19.5h15a2.25 2.25 0 002.25-2.25v-10.5A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
                                />
                            </svg>

                            <span className="text-gray-700 dark:text-gray-300 text-lg">
                                اسحب الصورة هنا أو اضغط للاختيار
                            </span>

                            {img && (
                                <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
                                    {img.name}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <button className='px-10 py-1  rounded-md bg-green-600 transform duration-150 text-white font-semibold hover:scale-105'>
                    اضافه
                </button>

            </form>
        </section>

    )
}
