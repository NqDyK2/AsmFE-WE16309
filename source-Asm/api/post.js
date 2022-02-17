import instance from "./config";

export const getAll = () => {
    const url = `/posts`;
    return instance.get(url);
};
export const get3 = () => {
    const url = `/posts?_page=1&_limit=3`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/posts`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/posts/${post.id}`;
    return instance.put(url, post);
};
