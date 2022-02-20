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
export const get8 = () => {
    const url = `/products?_page=1&_limit=8`;
    return instance.get(url);
};
export const listSearch = (product) => {
    // const url = `/products/?name_like=${data}`;
    const url = `/products?q=${product}`;
    return instance.get(url);
};
