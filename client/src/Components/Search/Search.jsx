/* eslint-disable react/prop-types */
import { useMatch, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../redux/featurs/filture/filterSlice";

function Search({isDarkMode}) {

  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate.push("/");
    }
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center h-8 rounded-lg focus-within:shadow-lg overflow-hidden ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className={`grid place-items-center h-full w-12 ${
          isDarkMode ? "text-gray-400" : "text-gray-300"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        className={`peer h-full w-full outline-none text-sm pr-2 ${
          isDarkMode ? "bg-gray-800 text-gray-200 placeholder-gray-400" : "bg-white text-gray-700 placeholder-gray-500"
        }`}
        type="text"
        id="search"
        placeholder="Search something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Search;