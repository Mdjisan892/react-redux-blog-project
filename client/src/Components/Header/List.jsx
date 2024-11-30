/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FaMoon, FaRegUserCircle, FaSun } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

function List({ theme }) {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setDarkMode] = theme;

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMood", !isDarkMode);
  };
  return (
    <>
      <div className="md:hidden z-50 flex gap-4">
        {/* dark / light */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 px-[0.6rem] rounded-full transition-colors  ${
            isDarkMode
              ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              : ""
          }`}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        {/* hamberger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex flex-col justify-center items-center gap-[13%] w-[2.4em] h-[2.4em] rounded-lg border-2 transition-all duration-300 shadow-md ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-[#e8e8e8] border-[#e8e8e8] text-[#090909]"
          }`}
        >
          <span
            className={`w-[26px] h-[2.4px] rounded-full transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "translate-y-[290%] rotate-45 w-[40px] bg-white"
                : isDarkMode
                ? "bg-gray-300"
                : "bg-[#131313]"
            }`}
          />
          <span
            className={`w-[26px] h-[2.4px] rounded-full transition-all duration-300 ease-in-out ${
              isOpen
                ? "translate-x-[-20px] opacity-0"
                : isDarkMode
                ? "bg-gray-300"
                : "bg-[#131313]"
            }`}
          />
          <span
            className={`w-[26px] h-[2.4px] rounded-full transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "translate-y-[-270%] rotate-[-45deg] w-[40px] shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-white"
                : isDarkMode
                ? "bg-gray-300"
                : "bg-[#131313]"
            }`}
          />
        </button>
        {/* shadow */}
        <div
          className={`fixed left-0 w-full h-full backdrop-blur-md top-0 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {isOpen && (
          <ul
            className={`fixed w-[40%] p-5 gap-5 left-0 h-screen top-0 shadow-lg transition-transform duration-300 ease-in-out ${
              isDarkMode
                ? "bg-gray-800 text-gray-200"
                : "bg-gradient-to-b from-cyan-500/80 text-white"
            }`}
          >
            <div className="flex items-center gap-4 border-b pb-4 mb-5">
              <svg
                className="w-10"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="10" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <h1 className="text-2xl font-extrabold">Blogify</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-300"
              >
                <IoClose size={20} />
              </button>
            </div>

            <li className="md:px-5 transition duration-200 hover:scale-105">
              <Link
                to="/"
                className="text-lg font-semibold hover:text-yellow-300 active:text-yellow-300"
              >
                Home
              </Link>
            </li>
            <li className="md:px-5 transition duration-200 hover:scale-105">
              <Link
                to="/"
                className="text-lg font-semibold hover:text-yellow-300 active:text-yellow-300"
              >
                About
              </Link>
            </li>
            <li className="md:px-5 transition duration-200 hover:scale-105">
              <Link
                to="/"
                className="text-lg font-semibold hover:text-yellow-300 active:text-yellow-300"
              >
                Contact
              </Link>
            </li>
            {/* authenticated */}
            <li >
              {isAuthenticated ? (
                <div className="">
                  <Link to="/AdminDashBoard">
                    <p className="text-lg font-semibold hover:text-yellow-300 active:text-yellow-300 hover:scale-105 transition-transform duration-300 ease-in-out mb-1">
                      Create Blog
                    </p>
                  </Link>
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                    className={`px-3 font-bold py-1 rounded border hover:scale-105 transition-transform duration-300 ease-in-out ${
                      isDarkMode
                        ? "bg-gray-300 text-black"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className={`px-3 font-bold py-1 rounded border hover:scale-105 transition-transform duration-300 ease-in-out ${
                    isDarkMode
                      ? "bg-gray-300 text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  Log In
                </button>
              )}
            </li>
          </ul>
        )}
      </div>

      <ul className="items-center hidden md:inline-flex">
        {/* dark / light */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 px-[0.6rem] rounded-full transition-colors  ${
            isDarkMode
              ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              : ""
          }`}
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <li className="px-2">
          <NavLink
            to="/"
            className={`font-semibold hover:text-purple-500 focus:text-purple-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Home
          </NavLink>
          <span className="ml-3">/</span>
        </li>
        <li className="px-2">
          <NavLink
            to="/"
            className={`font-semibold hover:text-purple-500 focus:text-purple-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            About
          </NavLink>
          <span className="ml-3">/</span>
        </li>
        <li className="px-2">
          <NavLink
            to="/Contact"
            className={`font-semibold hover:text-purple-500 focus:text-purple-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Contact
          </NavLink>
          <span className="ml-3">/</span>
        </li>
        {/* Sign Up form */}
        <li>
          {isAuthenticated ? (
            <div className="flex gap-2">
              <Link to="/AdminDashBoard">
                <FaRegUserCircle
                  size={30}
                  className={isDarkMode ? "text-gray-300" : "text-gray-500"}
                />
              </Link>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className={`px-3 font-bold py-1 rounded border ${
                  isDarkMode
                    ? "bg-gray-300 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className={`px-3 font-bold py-1 rounded border ${
                isDarkMode ? "bg-gray-300 text-black" : "bg-gray-800 text-white"
              }`}
            >
              Log In
            </button>
          )}
        </li>
      </ul>
    </>
  );
}

export default List;
