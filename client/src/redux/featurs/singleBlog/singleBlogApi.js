import publicAxios from "../../../Components/publicAxios"

export const getSingleBlogApi = async(id) =>{
  const response = await publicAxios.get(`/blogs/${id}`)
  return response.data
}