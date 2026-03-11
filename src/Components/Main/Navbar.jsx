import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Movies & Shows", path: "/movies" },
    { name: "Support", path: "/support" },
    { name: "Subscriptions", path: "/subscriptions" },
    { name: "Register", path: "/login" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-2 bg-transparent">
      <div className="max-w-[1700px] mx-auto relative z-[110]">
        <nav className="h-[98px] flex items-center justify-between">
          
     
          <a href="/" className="flex items-center gap-3">
            <img src="/img/LOGO.png" alt="StreamVibe" className="h-10 w-10" />
            <span className="text-white text-xl font-bold tracking-wide">StreamVibe</span>
          </a>

          
          <ul className="hidden lg:flex items-center gap-12 text-[15px] border border-[#262626] rounded-xl py-4 px-6 bg-black">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition-all duration-300 ${isActive ? "text-white after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-red-600" : "text-gray-400 hover:text-white"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button onClick={() => navigate("/search")} className="text-white text-lg">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            
         
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-between z-[120]"
            >
              <span className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[13px]" : ""}`} />
              <span className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[3px] w-full bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[13px]" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

  
      <div 
        className={`fixed inset-0 transition-all duration-500 overflow-hidden ${
          open ? "z-[90] opacity-100 pointer-events-auto" : "z-[-1] opacity-0 pointer-events-none"
        }`}
      >
      
        <div 
          className={`absolute rounded-full bg-black/95 backdrop-blur-2xl transition-all duration-1000 ease-in-out
          ${open 
            ? "top-1/2 left-1/2 w-[400vmax] h-[400vmax] -translate-x-1/2 -translate-y-1/2" 
            : "top-10 right-10 w-0 h-0"
          }`}
        />

        
        <div className="relative h-full flex items-center justify-center">
          <ul className="flex flex-col gap-10 text-center">
            {menuItems.map((item, index) => (
              <li 
                key={item.name} 
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${index * 100}ms` : '0ms' }}
                className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-4xl font-bold transition-colors ${isActive ? "text-red-600" : "text-white hover:text-red-500"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;