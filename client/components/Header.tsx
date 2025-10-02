import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 md:px-9 lg:px-[100px] py-6 flex justify-between items-center bg-white">
        <Link to="/" className="flex items-center justify-center flex-shrink-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/55cf334ddb4058968f1851ac82c62d2dcba2020e?width=616"
            alt="VerityAscent Logo"
            className="w-[308px] h-[78px] hidden md:block"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c2e1f0b6734d33e26cc9ceb1b919005b4d17f829?width=200"
            alt="VerityAscent Logo"
            className="w-[100px] h-[100px] md:hidden"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-gray-600 text-lg font-normal hover:underline">
            About
          </Link>
          <Link to="/portfolio" className="text-gray-600 text-lg font-normal hover:underline">
            Portfolio
          </Link>
          <Link to="/gtm" className="text-gray-600 text-lg font-normal hover:underline">
            GTM
          </Link>
          <Link to="/blog" className="text-gray-600 text-lg font-normal hover:underline">
            Blog
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-[11px] w-16 h-[92px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-[45px] h-0 border-t-2 border-gray-500"></div>
          <div className="w-[45px] h-0 border-t-2 border-gray-500"></div>
          <div className="w-[45px] h-0 border-t-2 border-gray-500"></div>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden w-full px-2.5 py-9 flex flex-col items-center gap-12 bg-white">
          <Link
            to="/about"
            className="text-gray-600 text-lg font-normal"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-600 text-lg font-normal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/gtm"
            className="text-gray-600 text-lg font-normal"
            onClick={() => setMobileMenuOpen(false)}
          >
            GTM
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 text-lg font-normal"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </>
  );
}
