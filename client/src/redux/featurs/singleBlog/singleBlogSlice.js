import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSingleBlogApi } from "./singleBlogApi"

const initialState= {
   blog : {},
   isLoading : false ,
   isError : false,
   error : ""
}

export const fetchSingleBlog = createAsyncThunk("blog/fatchSingleBlogApi" , async(id)=>{
    const singleBlog = await getSingleBlogApi(id)
    return singleBlog
})

export const blogSlice = createSlice({
    name : "blog",
    initialState : initialState,
    extraReducers : (builder) =>{
      builder
      .addCase(fetchSingleBlog.pending , (state)=>{
       state.isLoading = true ,
       state.isError = false , 
       state.blog = {}
       state.error = ""
      })
      .addCase(fetchSingleBlog.fulfilled , (state , action)=>{
        state.blog = action.payload,
        state.isLoading = false , 
        state.isError = false ,
        state.error = ""
      })
      .addCase(fetchSingleBlog.rejected , (state , action) =>{
        state.isLoading = false,
        state.blog = {},
        state.isError = true,
        state.error = action.error?.message
      })
    }
})

export default blogSlice.reducer ;