import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddPost from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
});

router.resolve();