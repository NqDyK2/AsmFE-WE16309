import Navigo from "navigo";
import AboutPage from "./pages/newsPage";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/products/index";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DetailProductPage from "./pages/products/detail";
import CartPage from "./pages/cart";
import AdminProPage from "./pages/admin/products";
import AdminProAdd from "./pages/admin/products/add";
import AdminNProEdit from "./pages/admin/products/edit";
import AccountPage from "./pages/admin/account";
import EditProfile from "./pages/editProfile";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*/", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/editprofile": () => print(EditProfile),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    // eslint-disable-next-line no-console
    "/admin/products": () => print(AdminProPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/product/add": () => print(AdminProAdd),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/admin/product/:id/edit": ({ data }) => print(AdminNProEdit, data.id),
    "/admin/users/": () => print(AccountPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),
});

router.resolve();
