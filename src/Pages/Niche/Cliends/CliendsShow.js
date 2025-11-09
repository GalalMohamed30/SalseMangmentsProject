import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModelDetails from '../../../components/Model/ModelDetails';

export default function CliendsShow() {
    const navigate = useNavigate();

    const [selectedClients, setSelectedClients] = useState([]);

    const location = useLocation();
    const Niche = [
        {
            id: 1,
            brandName: 'كافيهات',
            brandWebsite: 'FazaaPlatform.com',
            brandPhone: '966 56 319 0445',
            Kind: 'call Salse',
        },
        {
            id: 2,
            brandName: 'مطاعم',
            brandWebsite: 'FazaaPlatform.com',
            brandPhone: '966 56 319 0445',
            Kind: 'Hot',
        },
        {
            id: 3,
            brandName: 'شركات',
            brandWebsite: 'FazaaPlatform.com',
            brandPhone: '966 56 319 0445',
            Kind: 'call Salse',
        },
    ];

    // ✅ دالة لتحديث حالة الـ checkbox
    const handleCheckboxChange = (id) => {
        setSelectedClients((prev) =>
            prev.includes(id)
                ? prev.filter((clientId) => clientId !== id) // إلغاء التحديد
                : [...prev, id] // إضافة التحديد
        );
    };

    // 🔜 دي هتستخدمها لما تبعت للـ API
    const handleSubmitSelected = () => {
        console.log("Selected clients:", selectedClients);
        // send selectedClients to API
    };



    return (
        <section className="mt-10 ">
            <div className="mb-5 flex gap-3">
                {
                    location.pathname === "/show-tasks" ?
                        (<></>)
                        :
                        (
                            <>

                                <button
                                    onClick={() => navigate(-1)}
                                    className="px-8 py-1 rounded-md bg-red-500 transform duration-150 text-white font-semibold hover:scale-105"
                                >
                                    رجوع
                                </button>

                                <Link to={"add"}>
                                    <button className="px-10 py-1 rounded-md bg-green-500 transform duration-150 text-white font-semibold hover:scale-105">
                                        اضف كلايند جديد
                                    </button>
                                </Link>
                            </>
                        )
                }


                {selectedClients.length > 0 && (
                    <button
                        onClick={handleSubmitSelected}
                        className="px-6 py-1 rounded-md bg-blue-600 text-white font-semibold hover:scale-105 transition"
                    >
                        ارسال المحددين ({selectedClients.length})
                    </button>
                )}
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-lg text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                اسم البراند
                            </th>
                            <th scope="col" className="px-6 py-3">
                                موقع الكتروني
                            </th>
                            <th scope="col" className="px-6 py-3">
                                رقم الجوال
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نوع العميل
                            </th>
                            {
                                location.pathname === "/show-tasks" ?
                                    (<></>)
                                    :
                                    (
                                        <>

                                            <th scope="col" className="px-6 py-3">
                                                حدد
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                حدد سلزجي
                                            </th>
                                        </>
                                    )
                            }

                            <th scope="col" className="px-6 py-3">

                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {Niche.map((item, index) => (
                            <tr
                                key={item.id}
                                className=" border-b text-center bg-Table-bg   border-gray-700  transition"
                            >
                                <th
                                    scope="row"
                                    className="w-[70px] py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">{item.brandName}</td>
                                <td className="px-6 py-4">{item.brandWebsite}</td>
                                <td className="px-6 py-4 " dir='ltr'>{item.brandPhone}</td>
                                <td className="px-6 py-4">{item.Kind}</td>
                                {
                                    location.pathname === "/show-tasks" ?
                                        (<></>)
                                        :
                                        (
                                            <>

                                                <td className="px-6 py-4 flex justify-center">
                                                    <label className="flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedClients.includes(item.id)}
                                                            onChange={() => handleCheckboxChange(item.id)}
                                                            className="w-5 h-5 appearance-none rounded-md border-2 border-gray-400 
                                                    checked:bg-blue-600 checked:border-blue-600 
                                                    focus:ring-2 focus:ring-blue-400 cursor-pointer transition-all duration-200
                                                    relative
                                                    before:content-['✓'] before:absolute before:inset-0 
                                                    before:flex before:items-center before:justify-center 
                                                    before:text-white before:text-sm before:opacity-0 
                                                    checked:before:opacity-100"
                                                        />
                                                    </label>
                                                </td>

                                                <td className="px-6 py-4">
                                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                                                        <option hidden>حدد سلزجي</option>
                                                        <option value="Nedaa">Nedaa</option>
                                                        <option value="ElAdawey">ElAdawey</option>
                                                    </select>
                                                </td>
                                            </>
                                        )
                                }


                                <td class="px-6 py-4">
                                    {
                                        location.pathname === "/show-tasks" ?
                                            (<>
                                                <a
                                                    className='px-5 py-1 bg-green-600 text-white font-medium rounded-md mx-1'
                                                    href={`https://wa.me/+${item.brandPhone.replace(/\s/g, '')}`}>
                                                    تواصل واتس اب
                                                </a>
                                                <button className='px-5 py-1 bg-green-600 text-white font-medium rounded-md mx-1'>
                                                    Done
                                                </button>
                                            </>)
                                            :
                                            (
                                                <>
                                                    <div className='flex gap-4'>
                                                        <ModelDetails />
                                                        <button className='px-5 py-1 bg-red-600 text-white font-medium rounded-md mx-1'>
                                                            حذف
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                    }


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
