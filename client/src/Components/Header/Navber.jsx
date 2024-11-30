/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import List from "./List";

const Navber = ({ theme }) => {
  const [isDarkMode] = theme ;

  return (
    <header
      className={`flex items-center justify-between py-4 border-b -mb-2 px-2 ${
        isDarkMode
          ? "bg-gray-900 border-gray-800 text-gray-200"
          : "bg-gray-100 border-gray-300 text-gray-900"
      }`}
    >
      <Link
        to="/"
        className={`px-2 lg:px-0 uppercase font-bold ${
          isDarkMode
            ? "text-purple-400 bg-gray-800 hover:bg-gray-700"
            : "text-purple-800 bg-gray-200 hover:bg-gray-300"
        } cursor-pointer py-1 rounded`}
      >
        <svg
          className={`w-8 ${
            isDarkMode ? "text-purple-400" : "text-purple-800"
          }`}
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
      </Link>
      <Search isDarkMode={isDarkMode} />
      <List theme={theme} />
    </header>
  );
};

export default Navber;