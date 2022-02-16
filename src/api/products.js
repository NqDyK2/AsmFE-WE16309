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
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const get6 = () => {
    const url = `/products?_page=3&_limit=6`;
    return instance.get(url);
};
