// import "./style.css";

// document.querySelector("#app").innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `;
import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("home page"),
    "/about": () => console.log("about page"),
});
router.notFound(() => console.log("Not found page"));
router.resolve();
