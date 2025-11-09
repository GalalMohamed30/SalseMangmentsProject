import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CliendAdd() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [phone, setPhone] = useState('');
    const [kind, setKind] = useState('');

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
                    أضف كلايند جديد
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
                                onChange={(e) => setWebsite(e.target.value)}
                            />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                الموقع الالكتروني
                            </label>
                        </div>
                        <span className='text-yellow-400'>
                            في حالة  عدم وجود موقع أكتب في الخانه "غير متوفر"
                        </span>
                    </div>
                </div>
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
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                الجوال
                            </label>
                        </div>
                    </div>
                </div>
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
                                onChange={(e) => setKind(e.target.value)}
                            />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                نوع العميل
                            </label>
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
