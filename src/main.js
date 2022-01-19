import Navigo from "navigo";
import AboutPage from "./pages/about";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";
import TableProductsPage from "./pages/admin/ProductsTable";
import ContactPage from "./pages/Contact";
import editProduct from "./pages/admin/editProducts";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "admin/products": () => {
        print(TableProductsPage.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
    "/products/:id": (value) => {
        print(DetailNewsPage.render(value.data.id));
    },
    "/edit/:id": (value) => {
        print(editProduct.render(value.data.id));
    },
});
router.resolve();

// const arrNumber = [
//     { id: "1", name: "A" },
//     { id: "2", name: "B" },
//     { id: "3", name: "C" },
// ];
// const result = arrNumber.find((num) => num.id === "3");
// console.log(result);
