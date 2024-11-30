/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../../redux/featurs/relatedBlogs/relatedBlogsSlice";
import RelatedBlogCard from "./RelatedBlogCarg";
import { useOutletContext } from "react-router-dom";

function PopularBlogs({ tags, currentBlogId }) {
  const isDarkMode = useOutletContext(); 

  const dispatch = useDispatch();
  const { relatedBlog } = useSelector((state) => state.relatedBlogs);

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  return (
    <section
      className={`mt-12 ${
        isDarkMode ? "text-gray-200" : "text-gray-900"
      } transition-colors duration-300`}
    >
      <h2 className="text-3xl font-bold">Popular Blogs</h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {relatedBlog.map((blog, index) => {
            return <RelatedBlogCard key={index} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularBlogs;
