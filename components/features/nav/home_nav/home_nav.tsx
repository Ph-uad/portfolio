"use client";


const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen flex items-center justify-between p-4 text-white">
        <div>
            Logo
        </div>
      <div className="flex items-center space-x-0 backdrop-filter rounded-3xl  bg-gray-500/35 backdrop-blur-sm overflow-hidden">
        <a href="/" className="text-lg hover:font-semibold hover:bg-black hover:text-white transition-colors duration-300 py-2 px-8">
          Works
        </a>
        <a href="/about" className="text-lg hover:font-semibold hover:bg-black hover:text-white transition-colors duration-300 py-2 px-8">
          About
        </a>
        <a href="/contact" className="text-lg hover:font-semibold hover:bg-black hover:text-white transition-colors duration-300 py-2 px-8">
          Contact
        </a>
      </div>
      <div className="flex items-center space-x-4">
        Theme maybe ?
      </div>
    </nav>
  );
};

export default Nav;
