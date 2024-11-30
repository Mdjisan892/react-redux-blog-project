import { useDispatch, useSelector } from "react-redux";
import { tagSelected } from "../../../redux/featurs/filture/filterSlice";
import { useOutletContext } from "react-router-dom";

const CatagoryList = () => {
  const isDarkMode = useOutletContext()
  
  const dispatch = useDispatch();
  const { tags:selectedTags } = useSelector((state) => state.filter);
   const isTagSelected = (tag) => selectedTags.includes(tag)
  return (
    <div className="mb-4">
      <h5 className={`font-bold text-lg uppercase px-1 mb-2 ${isDarkMode ? "text-gray-300" :"text-gray-700"}`}>
        Popular Topics
      </h5>

      <ul>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
            ${isTagSelected("AI") ? "bg-indigo-300 rounded" : ""}
            `}
        >
          <a onClick={()=>dispatch(tagSelected("AI"))} className={`flex items-center  cursor-pointer ${isDarkMode ? "text-gray-400" :"text-gray-600"}`}>
            <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
            Artificial Intelligence
            <span className="text-gray-500 ml-auto">5 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${isTagSelected("Startups") ? "bg-indigo-300 rounded" : ""}`}
        >
          <a onClick={()=>dispatch(tagSelected("Startups"))} className={`flex items-center  cursor-pointer ${isDarkMode ? "text-gray-400" :"text-gray-600"}`}>
            <span className="inline-block h-4 w-4 bg-lime-300 mr-3"></span>
            Startups
            <span className="text-gray-500 ml-auto">18 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${isTagSelected("Tech") ? "bg-indigo-300 rounded" : ""}`}
        >
          <a onClick={()=>dispatch(tagSelected("Tech"))} className={`flex items-center  cursor-pointer ${isDarkMode ? "text-gray-400" :"text-gray-600"}`}>
            <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
            Technology
            <span className="text-gray-500 ml-auto">34 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
        <li
          className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300  ${isTagSelected("Apps") ? "bg-indigo-300 rounded" : ""} `}
        >
          <a onClick={()=>dispatch(tagSelected("Apps"))} className={`flex items-center  cursor-pointer ${isDarkMode ? "text-gray-400" :"text-gray-600"}`}>
            <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
            Apps
            <span className="text-gray-500 ml-auto">9 articles</span>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CatagoryList;