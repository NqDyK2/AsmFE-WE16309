import instance from "./config";

// eslint-disable-next-line import/prefer-default-export
export const signup = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};
export const signin = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};
export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const update = (users) => {
    const url = `/users/${users.id}`;
    return instance.put(url, users);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
