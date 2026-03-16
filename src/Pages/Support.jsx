import React, { useState } from "react";
import Banner from '../Components/Main/Banner';
import Questions from '../Components/Main/Questions';

const Support = () => {
  // Список стран: Сине-бело-зеленые и другие популярные
  const countries = [
    { code: "+998", flag: "🇺🇿", name: "Uzbekistan" },   // Синий, белый, зеленый
    { code: "+232", flag: "🇸🇱", name: "Sierra Leone" }, // Зеленый, белый, синий
    { code: "+7", flag: "🇷🇺", name: "Russia" },
    { code: "+1", flag: "🇺🇸", name: "USA" },
    { code: "+7", flag: "🇰🇿", name: "Kazakhstan" },
    { code: "+90", flag: "🇹🇷", name: "Turkey" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
    { code: "+994", flag: "🇦🇿", name: "Azerbaijan" },
  ];

  const [phone, setPhone] = useState("+998");

  const handleCountryChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-[1600px] mx-auto px-6 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-semibold mb-4 mt-[-50px]">
              Welcome to our <br /> support page!
            </h2>
            <p className="text-[#999999] mb-8 max-w-md">
              We're here to help you with any problems you may be having with our product.
            </p>
            <div>
              <img src="./img/Sub Container.png" alt="Support" className="rounded-xl" />
            </div>
          </div>

          <div className="bg-[#141414] border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm mb-2 block text-gray-400 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000] transition"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block text-gray-400 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm mb-2 block text-gray-400 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000] transition"
                />
              </div>

              <div>
                <label className="text-sm mb-2 block text-gray-400 font-medium">Phone Number</label>
                <div className="flex gap-2">
                  {/* Селект только с флагами */}
                  <select 
                    className="bg-black border border-white/10 rounded-lg px-3 outline-none focus:border-[#E50000] cursor-pointer text-xl appearance-none"
                    onChange={handleCountryChange}
                    value={phone}
                  >
                    {countries.map((c, index) => (
                      <option key={index} value={c.code}>
                        {c.flag}
                      </option>
                    ))}
                  </select>
                  
                  {/* Инпут с кодом */}
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000] transition"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm mb-2 block text-gray-400 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Enter your Message"
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-[#E50000] transition resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-[#999999] cursor-pointer hover:text-white transition">
                <input type="checkbox" className="accent-[#E50000] w-4 h-4" />
                I agree with Terms of Use and Privacy Policy
              </label>

              <button className="bg-[#E50000] px-8 py-3 rounded-lg hover:bg-red-700 transition font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <Questions />
      <Banner />
    </section>
  );
};

export default Support;