import publicAxios from "../../../Components/publicAxios"

const editBlog = async(id , updateData)=>{
 try {
   const response = await publicAxios.put(`/blogs/${id}` , updateData)
   return response.data
 } catch (error) {
    throw new Error("not update the blog" , error?.message)
 }
}

export default editBlog