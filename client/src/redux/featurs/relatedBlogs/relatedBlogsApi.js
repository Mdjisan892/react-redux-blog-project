import publicAxios from "../../../Components/publicAxios";

export const getRelatedBlogs = async ({ tags, id }) => {
    const limit = 3;
    let queryString = tags.length > 0
        ? `tags_like=${tags[0]}&id_ne=${id}&_limit=${limit}`
        // tags_like=AI&id_ne=3&_limit=5
        : `id_ne=${id}&_limit=${limit}`;
    // id_ne=5&_limit=5

    const response = await publicAxios.get(`/blogs?${queryString}`);
    return response.data;
};  