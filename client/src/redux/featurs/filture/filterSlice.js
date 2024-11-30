import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tags : [],
    search : ""
}

const filterSlice = createSlice({
    name:"filter",
    initialState ,
    reducers :{
        tagSelected : (state , action )=>{
          state.tags = [action.payload]
        },
        searched : (state , action) =>{
         state.search = action.payload
        }
    }
})
export default filterSlice.reducer;
export const {tagSelected , searched} = filterSlice.actions;