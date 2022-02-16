/* eslint-disable import/extensions */
import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import CartPage from "./pages/cart";
// eslint-disable-next-line import/no-unresolved
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
// eslint-disable-next-line import/no-unresolved
import ProductsPage from "./pages/product";
// eslint-disable-next-line import/no-unresolved
import DetailProductPage from "./pages/product/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};
router.on("/admin/*/", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).user.id;
            if (userId === 1) {
            // render dựa trên router
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(DashboardPage),
    // eslint-disable-next-line no-console
    "/admin/products": () => console.log("admin product"),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminNewsAdd),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
});

router.resolve();
