import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["About", "Projects", "Interests", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-500/20 via-purple-700/30 to-indigo-600/20 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home"className="text-3xl font-anime text-pink-300 tracking-widest animate-pulse cursor-pointer">アディティヤ</a>

        <div className="hidden md:flex space-x-8 text-white">
          {navItems.map(item => (
            <a key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-pink-400 transition duration-300 ease-in-out">
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-pink-400 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-black bg-opacity-70 text-white space-y-4 py-4">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-pink-400 transition duration-300 ease-in-out"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
