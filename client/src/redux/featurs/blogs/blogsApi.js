import publicAxios from "../../../Components/publicAxios";

export const getBlogs = async (tags, search) => { 
  let queryString = tags.langth ? `tags_like=${tags.join(",")}` : "";
  //                blogs/?tags_like=[AI,Startup] // eita holo pora coder meaning

  if (search != "") {
    queryString += `${queryString ? "&" : ""}q=${search}`
    //              blogs/?tags_like=[AI,Startup]&q=startup
  }

  try {
    const response = await publicAxios.get(`/blogs/?${queryString}`);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};