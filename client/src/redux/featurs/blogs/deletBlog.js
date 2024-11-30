import publicAxios from "../../../Components/publicAxios";

async function deletNewBlog(id) {
    try {
        await publicAxios.delete(`/blogs/${id}`) 
        return id
    } catch (error) {
        throw new Error(error?.message || "An unknown error occurred");
    }
}
export default deletNewBlog