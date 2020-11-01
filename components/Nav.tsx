import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  console.log(isMenuOpen);
  return (
    <div className="bg-gray-900">
      <div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="text-white flex ">
            <Link to="/">
              <h1 className="text-2xl">WebShop</h1>
            </Link>
          </div>
          <div className="flex text-white hidden md:flex">
            <Link
              to="mycart"
              className="block hover:bg-gray-800 pt-2 pb-2 flex justify-center rounded-sm transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110 "
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
            <Link
              to="/login"
              href="#"
              className="block hover:bg-gray-800 pt-2 pb-2 flex justify-center rounded-sm transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110 "
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </Link>
          </div>

          <div
            className="text-white hover:bg-gray-800 focus:outline-none focus:bg-indigo-800 sm:-mr-2 transition ease-in-out duration-150 rounded-md transform hover:-translate-y-1 hover:scale-110 md:hidden "
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <svg
                className="w-8 h-8 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="text-white text-center font-semibold px-6 py-6 md:hidden lg:hidden xl:hidden">
          <Link
            to="/"
            className="block hover:bg-gray-800 pt-2 pb-2 rounded-sm transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110 "
          >
            Home
          </Link>

          <Link
            to="mycart"
            className="block hover:bg-gray-800 pt-2 pb-2 flex justify-center rounded-sm transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110 "
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
          <Link
            to="/login"
            href="#"
            className="block hover:bg-gray-800 pt-2 pb-2 flex justify-center rounded-sm transition ease-in-out duration-150 transform hover:-translate-y-1 hover:scale-110 "
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};
