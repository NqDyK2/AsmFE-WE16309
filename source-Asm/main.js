import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#Asm").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        if (userId === 1) {
            done();
        } else {
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(),
    // .................
});
router.resolve();
