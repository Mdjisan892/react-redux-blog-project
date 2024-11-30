import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./featurs/blogs/BlogSlice";
import singleBlogReducer from "./featurs/singleBlog/singleBlogSlice";
import filterReducer from "./featurs/filture/filterSlice";
import relatedBlogsReducer from "./featurs/relatedBlogs/relatedBlogsSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: singleBlogReducer,
        filter: filterReducer,
        relatedBlogs: relatedBlogsReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
    })
})