import { useOutletContext } from "react-router-dom";
import CatagoryList from "./CatagoryList";

function Category() {
  const isDarkMode = useOutletContext()

  return (
    <div className="lg:w-1/3 w-full px-3">
      
        <CatagoryList/>

      <div className="p-1 mt-4 mb-4 lg:w-80 w-full">
        <h5 className={`ont-bold text-lg uppercase mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
          Subscribe
        </h5>
        <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Subscribe to our newsletter. We deliver the best health-related
          articles to your inbox
        </p>
        <input
          placeholder="your email address"
          className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
        />
        <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Category;