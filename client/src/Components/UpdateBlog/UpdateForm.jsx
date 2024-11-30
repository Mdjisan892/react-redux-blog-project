import { useState } from "react";
import { TfiLayoutCtaBtnLeft } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { editNewData } from "../../redux/featurs/blogs/BlogSlice";
import BlogImage from "./BlogImage";
import OuthorData from "./OuthorData";

function UpdateForm() {
  const isDarkMode = useOutletContext();

  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInfoFillup, setIsInfoFillUp] = useState(false);
  const [blogId, setBlogId] = useState(null);

  const [updatedData, setUpdatedData] = useState({
    id: blogId,
    title: data.title,
    tags: data.tags,
    content: data.content,
    category: data.category,
    authoreName: data.authoreName,
    authoreImage: data.authoreIamge,
    readingTime: data.readingTime,
    publishedDate: data.publishedDate,
    blogImage: data.blogImage,
  });

  const handleInputChange = (key, value) => {
    setUpdatedData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    try {
      setIsInfoFillUp(false);
      dispatch(editNewData(data.id, updatedData));
      setBlogId(data.id);
      navigate("/MyBlogs", { replace: true });
      console.log("Submitted successfully");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleBlogImageDrop = (blogImage) => {
    handleInputChange("blogImage", blogImage);
  };
  const handleAuthoreImage = (authoreIamge) => {
    handleInputChange("authoreImage", authoreIamge);
  };
  const handleOtherData = (
    authoreName,
    publishedDate,
    category,
    tags,
    readingTime
  ) => {
    handleInputChange("authoreName", authoreName);
    handleInputChange("publishedDate", publishedDate);
    handleInputChange("category", category);
    handleInputChange("tags", tags);
    handleInputChange("readingTime", `${readingTime} minutes`);
  };

  return (
    <div className={`p-2 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"}`}>
      {/* Floating Button */}
      <div className="group fixed bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-full bottom-5 sm:right-7 shadow-lg hover:scale-110 transition transform duration-300">
        <Link to="/MyBlogs" className="relative flex items-center justify-center">
          <TfiLayoutCtaBtnLeft size={25} className="text-white" />
          <span className="absolute flex gap-1 bottom-12 px-5 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>My</p> <p>Blog</p>
          </span>
        </Link>
      </div>

      {/* Error Message */}
      <div
        className={`${
          isInfoFillup
            ? "fixed w-[90%] sm:w-full sm:bottom-10 sm:top-[80%] top-1/2 left-1/2 transform -translate-x-1/2 max-w-[30rem] flex flex-wrap items-center justify-center py-4 pl-4 pr-14 rounded-lg text-base font-medium [transition:all_0.5s_ease] border-solid border border-[#f85149] text-[#c72222] [&_svg]:text-[#b22b2b] group bg-[linear-gradient(#f851491a,#f851491a)] "
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

      {/* Main Form */}
      <div className={`border p-6 max-w-2xl mx-auto rounded-lg shadow-md mt-4 mb-6 ${isDarkMode ? "bg-gray-900 border-gray-600" : "bg-white border-gray-300"}`}>
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center py-4 border-b mb-6">
          Add Blog
        </h1>

        {/* Blog Image */}
        <div className="mb-6">
          <BlogImage onImageDrop={handleBlogImageDrop} onData={data} />
        </div>

        {/* Title */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-2">Title :</h3>
          <input
            type="text"
            value={updatedData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter title here"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-800 text-gray-300 border-gray-600" : "bg-white text-gray-800 border-gray-300"}`}
            required
          />
        </div>

        {/* Content */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold mb-2">Description :</h3>
          <textarea
            cols="30"
            rows="6"
            value={updatedData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
            placeholder="What's on your mind?"
            className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "bg-gray-800 text-gray-300 border-gray-600" : "bg-white text-gray-800 border-gray-300"}`}
            required
          ></textarea>
        </div>

        {/* Other Details */}
        <h3 className="text-lg font-semibold mb-2">Other Details : </h3>
        <div className="mb-6 border px-2 rounded-lg py-4">
          <OuthorData
            onAuthoreImage={handleAuthoreImage}
            onOtherData={handleOtherData}
            onData={data}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className={`w-full font-semibold py-3 rounded-lg transition duration-300 ease-in-out ${isDarkMode ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;