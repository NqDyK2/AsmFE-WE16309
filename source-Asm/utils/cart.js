import { getLocalStorage } from "./index";

let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addTocart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);

    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const increaseQuantity = (id, next) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        // eslint-disable-next-line no-alert
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItemInCart = (id, next) => {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const getProduct = (productId) => {
    if (localStorage.getItem("cart")) {
        cart = getLocalStorage("cart");
    }
    console.log("cart", cart);
    // eslint-disable-next-line eqeqeq
    return cart.find((item) => item.id == productId);
};

export const getTotalPrice = () => {
    if (localStorage.getItem("cart")) {
        cart = getLocalStorage("cart");
    }
    let total = 0;
    cart.forEach((item) => {
        total += Number(item.price) * item.quantity;
    });
    return total;
};

export const getTotalItems = () => {
    if (localStorage.getItem("cart")) {
        cart = getLocalStorage("cart");
    }
    let total = 0;
    cart.forEach((item) => {
        total += item.quantity;
    });

    return total;
};
