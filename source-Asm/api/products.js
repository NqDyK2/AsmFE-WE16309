import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
};
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const get4 = () => {
    const url = `/products?_page=1&_limit=4`;
    return instance.get(url);
};
export const searchValue = (key, value) => {
    const url = `/${key}?${value}`;
    return instance.get(url);
};
export const searchLike = (key, value) => {
    const url = `/${key}?${value}`;
    return instance.get(url);
};
export const sortValue = (key, value, arrow) => {
    const url = `/${key}?_sort=${value}$_order=${arrow || "asc"}`;
    return instance.get(url);
};
