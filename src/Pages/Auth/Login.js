import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DarkVeil from '../../components/Animation/DarkVeil';


const Login = () => {
  const Api_Url = process.env.REACT_APP_API_BASE_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [position, setPosition] = useState('');

  const Navigate = useNavigate();

  async function FormLoginHandelling(e) {
    e.preventDefault();

    try {
      const res = await axios.post(`${Api_Url}/login`, {
        email: email,
        position: position,
        password: password
      })
      sessionStorage.setItem("token", res.data.data.token); // خزن التوكن
      sessionStorage.setItem("position", res.data.data.user.position);

      toast.success(`${position} يا مرحب يا احلي `);

      setTimeout(() => {
        Navigate('/');
      }, 2000);

    }
    catch (error) {
      setError(error.response.status)
      toast.error(`خطأ في البيانات , جرب تاني`);
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* ✅ الخلفية تغطي الشاشة بالكامل */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <DarkVeil />
      </div>
      <form
        className='w-[50%] lg:w-[600px] h-[500px] py-5 mx-auto rounded-md shadow bg-Main-color my-[5%]'
        onSubmit={FormLoginHandelling}
      >
        <h1 className='text-center pt-5 text-2xl font-semibold text-Primary-color'>سجل دخولك</h1>
        <div className='w-[80%] mx-auto pt-10' dir="rtl">
          <div className='py-5'>
            <input type='email'
              placeholder='البريد الالكتروني'
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full h-[40px] text-white bg-transparent border border-gray-500 rounded-sm mx-auto   focus:outline-none placeholder:pr-5' />
            {error === 401 ? <span className="text-red-600 ">يرجي التأكد من الايميل المدخل</span> : ""}
          </div>
          <div className='py-5'>
            <select
              name="position"
              id="position"
              className="w-full p-2 rounded-md text-white bg-transparent border border-gray-500"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="" hidden>اختر الوظيفه</option>
              <option value="admin" className="text-black">Admin</option>
              <option value="leader" className="text-black">Leader</option>
              <option value="tele-salse" className="text-black">Tele-Salse</option>
              <option value="salse" className="text-black">Salse</option>

            </select>
            {error === 403 ? <span className="text-red-600 ">
              يجري التأكد من الوظيفه الخاصه بك
            </span> : ""}
          </div>
          <div className='py-5'>
            <input type='password'
              placeholder='الرقم السري'
              name={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full h-[40px] text-white bg-transparent border border-gray-500 rounded-sm mx-auto  focus:outline-none placeholder:pr-5' />
            {error === 401 ? <span className="text-red-600 ">يرجي التأكد من كلمه السر المدخله</span> : ""}
          </div>
          <div className="w-[200px] h-[30px] mt-5 mx-auto">
            <button type='submit' className='w-full h-full rounded-md bg-Primary-color text-white font-semibold'>
              دخول
            </button>
          </div>

        </div>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </section>
  );
};

export default Login;
