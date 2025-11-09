import { Link } from 'react-router-dom';
import Img1 from '../../Image/niche1.png';
import Img2 from '../../Image/niche2.png';


export default function NicheShow() {

    const Niche = [
        {
            name: 'كافيهات',
            Img: Img1
        },
        {
            name: 'عطور',
            Img: Img2
        },
        {
            name: 'كافيهات',
            Img: Img1
        },
        {
            name: 'عطور',
            Img: Img2
        },
        {
            name: 'كافيهات',
            Img: Img1
        },
        {
            name: 'عطور',
            Img: Img2
        },
    ];


    return (
        <section className='mt-10'>
            <div className='mb-5'>
                <Link to={'add'}>
                    <button className='px-10 py-1 rounded-md bg-green-500 transform duration-150 text-white font-semibold hover:scale-105'>
                        أضف نيتش جديد
                    </button>
                </Link>

            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-lg text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                الفئه
                            </th>

                            <th scope="col" class="px-6 py-3">
                                صوره النيتش
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Niche.map((item, index) => (
                                <tr class=" border-b text-center bg-Table-bg  border-gray-700">
                                    <th scope="row" class="w-[70px]  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index + 1}
                                    </th>
                                    <td class="px-6 py-4 ">
                                        {item.name}
                                    </td>
                                    <td class="px-6 py-4 ">
                                        <div className='w-[100px] h-[100px] mx-auto'>
                                            <img src={item.Img} alt={item.name} className='w-full h-full' />
                                        </div>
                                    </td>
                                    <td class="w-[300px] py-4">
                                        <Link to={'cliend'}>
                                            <button className='px-5 py-1  mr-3 bg-green-500 text-white font-medium rounded-md'>
                                                فتح
                                            </button>
                                        </Link>
                                        <button className='px-5 py-1  mr-3 bg-Primary-color  text-white font-medium rounded-md'>
                                            تعديل
                                        </button>
                                        <button className='px-5 py-1 mr-3 bg-red-500  text-white font-medium rounded-md'>
                                            حذف
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </section>
    )
}
