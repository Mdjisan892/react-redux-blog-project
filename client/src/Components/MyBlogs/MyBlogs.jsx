import { Link, useOutletContext } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletCreatedBlog } from "../../redux/featurs/blogs/BlogSlice";

function MyBlogs() {
  const isDarkMode = useOutletContext(); 

  const dispatch = useDispatch();
  const { newBlog } = useSelector((state) => state.blogs);

  useEffect(() => {
    localStorage.setItem("new-blog", JSON.stringify(newBlog));
  }, [newBlog]);

  const deleteBlog = (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deletCreatedBlog(blogId));
    }
  };

  return (
    <div className={`py-6 sm:py-12 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'}`}>
      {/* Floating Create Button */}
      <div className={`group fixed p-5 rounded-full bottom-5 sm:right-7 shadow-lg hover:scale-110 transition transform duration-300 ${isDarkMode ? "bg-gray-700" : "bg-gradient-to-r from-blue-500 to-purple-500"}` }>
        <Link
          to="/AdminDashBoard"
          className="relative flex items-center justify-center"
        >
           <IoIosCreate size={25} className="text-white" />
          <span className="absolute flex gap-1 bottom-12 px-5 py-1 text-xs text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Create</p> <p>New</p>
          </span>
        </Link>
      </div>
         

      {(!newBlog || newBlog.length === 0) ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">No Blogs Found</h2>
          <p className="text-gray-400">You have not created any blogs yet.</p>
        </div>
      ) : (
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">My Blogs</h2>
            <p className="font-serif text-sm text-gray-400">
              Explore your latest creations and share your ideas with the world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {newBlog.map((blog, index) => (
              <article
                key={index}
                className={`flex flex-col rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-105 transition-transform duration-300`}
              >
                {/* Blog Image */}
                <Link
                  to={`/blogs/${blog.id}`}
                  aria-label={blog.title}
                  className="hover:opacity-90 transition-opacity"
                >
                  <img
                    alt={blog.title}
                    className="object-cover w-full h-52"
                    src={blog.blogImage}
                  />
                </Link>

                {/* Blog Details */}
                <div className="flex flex-col flex-1 p-6">
                  <Link
                    to={`/blogs/${blog.id}`}
                    aria-label={blog.title}
                    className={`text-xs tracking-wider uppercase hover:underline ${isDarkMode ? 'text-violet-400' : 'text-blue-600'}`}
                  >
                    {blog.category}
                  </Link>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <span>{blog.publishedDate}</span>
                    <span>{blog.readingTime} min read</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap justify-between pt-3 space-x-2">
                    <Link to={`/UpdateForm`} state={blog}>
                      <button className="bg-blue-500 text-sm px-2 py-1 rounded-sm text-white hover:bg-blue-600">
                        Edit Blog
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="bg-red-500 text-sm px-2 py-1 rounded-sm text-white hover:bg-red-600"
                    >
                      Delete Blog
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyBlogs;
