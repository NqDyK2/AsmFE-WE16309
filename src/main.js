// import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
import Navigo from "navigo";
import trangchu from "./pages/trangchu";
import daotao from "./pages/daotao";
import tuyensinh from "./pages/tuyensinh";
import gocsinhvien from "./pages/gocsinhvien";
// import AdminProducts from "./pages/ProductsTable";

const render = (content) => {
    document.querySelector("#app").innerHTML = content.print();
};
const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // "/": () => {
    //     render(AdminProducts);
    // },

    // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => {
        render(trangchu);
    },
    "/tuyensinh": () => {
        console.log(tuyensinh);
    },
    "/daotao": () => {
        console.log(daotao);
    },
    "/gocsinhvien": () => {
        console.log(gocsinhvien);
    },

});
router.notFound(() => console.log("Not found page"));
router.resolve();
