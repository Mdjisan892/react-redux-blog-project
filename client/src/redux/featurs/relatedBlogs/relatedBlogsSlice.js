import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsApi";

const initialState ={
    relatedBlog : [],
    isLoading : false,
    isError : false,
    error : ''
}

export const fetchRelatedBlogs = createAsyncThunk("relatedBlogs/fetchRelatedBlogs", async({ tags, id})=>{
  const relatedBlogs = await getRelatedBlogs({tags, id})
  return relatedBlogs 
})

const relatedBlogsSlice  = createSlice({
    name : "relatedBlogs",
    initialState ,
    extraReducers : (builder) => {
     builder
     .addCase(fetchRelatedBlogs.pending , (state)=>{
        state.isLoading = true,
        state.isError = false
     })
     .addCase(fetchRelatedBlogs.fulfilled , (state , action )=>{
       state.isLoading = false,
       state.relatedBlog = action.payload
     })
     .addCase(fetchRelatedBlogs.rejected , (state,action) =>{
       state.isLoading = false,
       state.relatedBlog = [],
       state.isError = true,
       state.error = action.error?.message
     })
    }
})

export default relatedBlogsSlice.reducer;