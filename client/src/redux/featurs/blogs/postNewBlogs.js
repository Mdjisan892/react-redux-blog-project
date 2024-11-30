import publicAxios from "../../../Components/publicAxios"

async function postDataToBlogs (items){
  try {
    const {data} = await publicAxios.post("/blogs" , items)
    return data
  } catch (error) {
    console.log(error)
  }
}
export default postDataToBlogs