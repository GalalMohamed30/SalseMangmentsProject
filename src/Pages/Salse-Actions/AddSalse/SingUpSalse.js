import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export default function SingUpSalse() {

    const Api_Url = process.env.REACT_APP_API_BASE_URL;

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [accept, setAccept] = useState(false)
    const [error, setError] = useState(false);


    async function FormLoginHandelling(e) {
        e.preventDefault();

        let flag = true;

        setAccept(true);
        if (name === "" || password.length < 8 || repassword !== password) {
            flag = false;
        } else flag = true;
        try {
            if (flag) {
                let res = await axios.post(`${Api_Url}/register`, {
                    name: name,
                    position: position,
                    email: email,
                    password: password,
                    password_confirmation: repassword,
                });
                toast.success('تمت الاضافه');
            }
        } catch (err) {
            setError(err.response.status);
            toast.error('جرب البيانات تاني ');
        }
    }



    return (
        <section >
            <form classNameName='w-full  h-full pb-5  rounded-md shadow  my-[2%]'
                autoComplete="off"
                onSubmit={FormLoginHandelling}
            >
                <h1 className='text-start pt-5 text-3xl font-bold text-Primary-color'>
                    أضف سلزجي جديد
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
                                autoComplete="off"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label for="floating_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                الاسم
                            </label>
                        </div>
                    </div>
                    <div className='py-5'>
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
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="block w-full py-2.5 px-2 text-lg 
               text-gray-900 dark:text-white
               bg-transparent border-0 border-b-2 
               border-gray-400 dark:border-gray-600
               focus:outline-none focus:ring-0 
               focus:border-blue-600 dark:focus:border-blue-400
               cursor-pointer transition-all duration-300"
                            >
                                <option value="" disabled hidden></option>
                                <option value="admin" className='text-black'>Admin</option>
                                <option value="leader" className='text-black'>Leader</option>
                                <option value="tele-salse" className='text-black'>Tele-Salse</option>
                                <option value="salse" className='text-black'>Salse</option>
                            </select>
                        </div>



                    </div>

                    <div className='py-5'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                autoComplete="off"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                البريد الاكتروني
                            </label>
                        </div>
                        {
                            accept && error && (
                                <p className="text-red-600">
                                    الايميل مستخدم بالفعل
                                </p>
                            )
                        }
                    </div>
                    <div className='py-5'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="floating_password"
                                id="floating_password"
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                autoComplete="off"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label for="floating_password" className="peer-focus:font-medium absolute text-xl  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                الباسوورد
                            </label>
                        </div>
                        {
                            password === '' ? (<p className="text-yellow-300">الرقم السري يتكون من اكثر من 8 احرف</p>) : (<></>)
                        }
                        {
                            password.length < 8 && accept && (<p className="text-red-600">
                                يجب ان يكون 8 احرف
                            </p>)
                        }
                    </div>
                    <div className='py-5'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                            <label for="password_confirmation" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                تأكيد الباسوورد
                            </label>
                        </div>
                        {
                            password !== repassword && accept && (
                                <p className="text-red-600">
                                    الرقم السري غير ممطابق
                                </p>
                            )
                        }
                    </div>

                </div>


                <button className='px-10 py-1 rounded-md bg-green-600 transform duration-150 text-white font-semibold hover:scale-105'>
                    اضافه
                </button>

            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    )
}
