import { useEffect, useState } from "react";
import DragDropContainer from "./DragDropContainer";
import OtherDetails from "./OtherDetails";
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi";
import { Link, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import publicAxios from "../publicAxios";
import { useDispatch } from "react-redux";
import { postBlog } from "../../redux/featurs/blogs/BlogSlice";
import { ImProfile } from "react-icons/im";

function AdminDashBoard() {
  const isDarkMode = useOutletContext();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInfoFillup, setIsInfoFillUp] = useState(false);
  const [blogId, setBlogId] = useState(null);

  const [user, setUser] = useState({
    id: blogId,
    title: "",
    tags: [],
    content: "",
    category: "",
    authoreName: "",
    authoreImage: null,
    readingTime: "",
    publishedDate: "",
    blogImage: null,
  });

  useEffect(() => {
    async function fetchLastId() {
      try {
        const response = await publicAxios.get("/blogs");
        const data = response.data;
        if (data.length > 0) {
          const lastId = data.at(-1).id;
          setBlogId(lastId + 1);
        } else {
          setBlogId(102 + 1);
        }
      } catch (error) {
        throw new error();
      }
    }
    fetchLastId();
  }, []);
  useEffect(() => {
    if (blogId) {
      handleInputChange("id", blogId);
    }
  }, [blogId]);

  const handleInputChange = (key, value) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    if (
      !user.title.trim() ||
      !user.content.trim() ||
      !user.category ||
      !user.readingTime ||
      !user.publishedDate ||
      !user.tags ||
      !user.blogImage ||
      !user.authoreImage ||
      !user.authoreName.trim()
    ) {
      setIsInfoFillUp(true);
      setTimeout(() => {
        setIsInfoFillUp(false);
      }, 5000);
    } else {
      setIsInfoFillUp(false);
      dispatch(postBlog(user));
      setBlogId((prevId) => prevId + 1);
      navigate("/MyBlogs", { replace: true });
    }
  };

  const handleBlogImageDrop = (blogImage) => {
    handleInputChange("blogImage", blogImage);
  };
  const handleAuthoreImage = (authoreIamge) => {
    handleInputChange("authoreImage", authoreIamge);
  };
  const handleOtherData = (authoreName, publishedDate, category, tags, readingTime) => {
    handleInputChange("authoreName", authoreName);
    handleInputChange("publishedDate", publishedDate);
    handleInputChange("category", category);
    handleInputChange("tags", tags);
    handleInputChange("readingTime", `${readingTime} minutes`);
  };

  return (
    <div
      className={`p-2 mb-5 ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-white"
      }`}
    >
      <div
        className={`group fixed p-5 rounded-full bottom-24 left-2 sm:left-6 shadow-lg hover:scale-110 transition transform duration-300 ${
          isDarkMode
            ? "bg-gray-700"
            : "bg-gradient-to-r from-blue-500 to-purple-500"
        }`}
      >
        <Link
          to="/Profile"
          className="relative flex items-center justify-center"
        >
          <ImProfile  size={25} className="text-white" />
          <span className="absolute flex gap-1 bottom-12 px-5 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <p>Profile</p>
          </span>
        </Link>
      </div>

      {/* All Blog component button */}
      <div
        className={`group fixed p-5 rounded-full bottom-5 left-2 sm:left-6 shadow-lg hover:scale-110 transition transform duration-300 ${
          isDarkMode
            ? "bg-gray-700"
            : "bg-gradient-to-r from-blue-500 to-purple-500"
        }`}
      >
        <Link
          to="/MyBlogs"
          className="relative flex items-center justify-center"
        >
          <TfiLayoutCtaBtnLeft size={25} className="text-white" />
          <span className="absolute flex gap-1 bottom-12 px-5 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>My</p> <p>Blog</p>
          </span>
        </Link>
      </div>

      <div
        className={` ${
          isInfoFillup
            ? "fixed w-[90%] sm:w-full sm:bottom-10 sm:top-[80%] top-1/2  left-1/2 transform -translate-x-1/2 max-w-[30rem] flex flex-wrap items-center justify-center py-4 pl-4 pr-14 rounded-lg text-base font-medium [transition:all_0.5s_ease] border-solid border border-[#f85149] text-[#c72222] [&amp;_svg]:text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)] "
            : "hidden"
        }`}
      >
        <button
          onClick={() => setIsInfoFillUp(false)}
          type="button"
          aria-label="close-error"
          className="absolute right-4 p-1 rounded-md transition-opacity text-[#f85149] border border-[#f85149] opacity-40 hover:opacity-100"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="16"
            width="16"
            className="sizer [--sz:16px] h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <p className="flex flex-row items-center mr-auto gap-x-2">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="28"
            width="28"
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <strong className="font-bold left-2 hidden sm:block">Error :</strong>
          <span className="block sm:inline">
            Please fill in all required fields.
          </span>
        </p>
      </div>

      <div
        className={`border  p-6 max-w-2xl mx-auto  rounded-lg shadow-md mt-4 mb-6 ${isDarkMode ? "bg-gray-800 border-gray-600":"bg-white border-gray-300"}`}
      >
        {/* Heading */}
        <h1 className={`text-2xl font-bold text-center py-4 border-b -mt-2 mb-6 ${isDarkMode ?"border-gray-600" :"border-gray-200"}`}>
          Add Blog
        </h1>

        {/* Image Container */}
        <div className={`mb-6 `}>
          <DragDropContainer onImageDrop={handleBlogImageDrop} />
        </div>

        {/* Title */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-2">Title :</h3>
          <input
            type="text"
            value={user.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter title here"
            className={`w-full px-4 py-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ?"bg-gray-700 border-gray-500" :"bg-white border-gray-300"}`}
            required
          />
        </div>

        {/* content */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-2">Description :</h3>
          <textarea
            cols="30"
            rows="6"
            value={user.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            placeholder="What's on your mind?"
            className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ?"bg-gray-700 border-gray-500" :"bg-white border-gray-300"}`}
            required
          ></textarea>
        </div>
        {/* Other details */}
        <h3 className="text-lg font-semibold mb-2">Other Details : </h3>
        <div className={`mb-6 border px-2 rounded-lg py-4 ${isDarkMode ?"border-gray-500" :"border-white"}`}>
          <OtherDetails
            onAuthoreImage={handleAuthoreImage}
            onOtherData={handleOtherData}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          disabled={blogId == null}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AdminDashBoard;