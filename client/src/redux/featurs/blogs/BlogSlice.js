import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsApi";
import postDataToBlogs from "./postNewBlogs";
import deletNewBlog from "./deletBlog";
import editBlog from "./editBlog"

// initial state
const initialState = {
  blogs: [],
  newBlog: JSON.parse(localStorage.getItem("new-blog")) || [],
  isLoading: false,
  isError: false,
  error: ""
}
//async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async ({ tags, search }) => {
  const blogs = await getBlogs(tags, search)
  return blogs;
})

export const postBlog = createAsyncThunk("blogs/addBlog", async (newItems) => {
  const response = await postDataToBlogs(newItems)
  return response
})

export const deletCreatedBlog = createAsyncThunk("blogs/deletBlog", async (id) => {
  const response = await deletNewBlog(id)
  return { id: response }
})

export const editNewData = createAsyncThunk("blogs/editNewData", async (id, data) => {
  const response = await editBlog(id, data)
  return response.data
})

export const blogsSlic = createSlice({
  name: "blogs",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false,
          state.isLoading = true,
          state.blogs = []
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false,
          state.isError = false,
          state.blogs = action.payload
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false,
          state.isError = true,
          state.blogs = [],
          state.error = action.error.message
      })
      .addCase(postBlog.pending, (state) => {
        state.isLoading = true,
          state.isError = false
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.isLoading = false,
          state.isError = false,
          state.blogs.push(action.payload)
        state.newBlog.push(action.payload)
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.isLoading = false,
          state.isError = true,
          state.error = action.error?.message
      })
      .addCase(deletCreatedBlog.pending, (state) => {
        state.isLoading = true,
          state.isError = false
      })
      .addCase(deletCreatedBlog.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isError = false
        
        const deleteID = action.payload.id
        if(deleteID){
          state.newBlog = state.newBlog.filter(blog => blog.id != deleteID)
          localStorage.setItem("new-blog", JSON.stringify(state.newBlog));
        }else {
          console.error("Error: Deleted Blog ID is undefined.");
      }
      })
      .addCase(deletCreatedBlog.rejected, (state, action) => {
        state.isLoading = false,
          state.isError = true,
          state.error = action.error?.message
      })
      .addCase(editNewData.pending, (state ) => {
        state.isLoading = true,
        state.isError = false
      })
      .addCase(editNewData.fulfilled, (state ) => {
        state.isLoading = false,
        state.isError = false
        console.log("state update sucessfully")
      })
      .addCase(editNewData.rejected, (state, action) => {
        state.isLoading = false,
          state.isError = true,
          state.error = action.error?.message
      })
  }
})

export default blogsSlic.reducer; 