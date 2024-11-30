import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../../redux/featurs/blogs/BlogSlice";
import Card from "./Card";
import { useOutletContext } from "react-router-dom";

const PostCards = () => {
  const isDarkMode = useOutletContext();

  const dispatch = useDispatch();
  const { blogs, isLoading, isError } = useSelector((state) => state.blogs);
  const { tags, search } = useSelector((state) => state.filter);

  // Dispatch action to fetch blogs
  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, search, tags]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerePage = 5;
  const startIndex = (currentPage - 1) * blogsPerePage;
  const endIndex = currentPage * blogsPerePage;
  const paginationBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full lg:w-2/3 mb-5">
      {!isError && !isLoading && paginationBlogs?.length > 0 ? (
        <div>
          {paginationBlogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
          {/* Pagination */}
          <div className="space-x-5 mt-6">
            <button
              className={`px-3 py-1 text-white ${
                currentPage === 1
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span
              className={`mt-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {currentPage}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-1 text-white ${
                currentPage === Math.ceil(blogs.length / blogsPerePage)
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              disabled={currentPage === Math.ceil(blogs.length / blogsPerePage)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="bg-white mx-auto mt-20">
              <div className="flex justify-center items-center h-full">
                <img
                  className="h-16 w-16"
                  src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                  alt="Loading spinner"
                />
              </div>
            </div>
          ) : (
            <div
              className={`flex flex-col items-center justify-center  ${
                isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
              }`}
            >
              <div
                className="md:h-full md:w-full bg-no-repeat bg-cover h-[20rem] w-[20rem] bg-center"
                style={{ backgroundImage: "url('/no-data-found-image.jpg')" }}
              ></div>
              <div className="space-x-5 mt-6 ">
                <button
                  className={`px-3 py-1 text-white ${
                    currentPage === 1
                      ? "bg-red-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <span
                  className={`mt-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {currentPage}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`px-3 py-1 text-white bg-indigo-400 cursor-not-allowed`}
                  disabled={true}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostCards;