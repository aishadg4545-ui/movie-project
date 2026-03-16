import React, { useState } from "react";
import Banner from "../Components/Main/Banner";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Login() {
 
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="min-h-screen bg-black flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[1700px] bg-black border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 mt-20">

          <div className="flex-1">
            <img
              src="./img/Sub Container.png"
              alt="movies"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 text-white">
            <h2 className="text-3xl font-semibold mb-10">
              {isLogin ? "Please login to use our app" : "Create an account"}
            </h2>

            {!isLogin && (
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-white">Nickname</label>
                <input
                  type="text"
                  placeholder="Nickname"
                  className="w-full bg-[#0F0F0F] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition text-gray-400"
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-white">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-[#0F0F0F] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition text-gray-400"
              />
            </div>

         
            <div className="mb-8">
              <label className="block mb-2 text-sm font-bold text-white">Password</label>
              <input
                type="password"
                placeholder="password"
                className="w-full bg-[#0F0F0F] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-600 transition text-gray-400"
              />
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-medium mb-6">
              {isLogin ? "Login" : "Register"}
            </button>

            <p 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-center text-gray-400 mb-6 cursor-pointer hover:text-white transition"
            >
              {isLogin ? "Don't have an account?" : "Have an account?"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 border border-gray-700 rounded-lg py-3 hover:bg-[#111] transition">
                <FaGoogle />
                {isLogin ? "Login with Google" : "Register with Google"}
              </button>

              <button className="flex-1 flex items-center justify-center gap-3 border border-gray-700 rounded-lg py-3 hover:bg-[#111] transition">
                <FaGithub />
                {isLogin ? "Login with Github" : "Register with Github"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Login;