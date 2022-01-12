import Banner from "../components/banner";
import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import HeadFrom from "../components/headform";
import Menu from "../components/menu";
import NewsList from "../components/news-list";
// import NewsList from "../components/news-list";

const trangchu = {
    print() {
        return /* html */`
        <header class="mb-3">
            <div class="bg-sky-900">
                ${HeadLogo.print()}
            </div>
            <div class="grid grid-cols-2 gap-5 bg-yellow-600 text-sm py-2">
                <nav class="max-w-6xl">
                    ${Menu.print()}
                </nav>
                <div>
                ${HeadFrom.print()}
                </div>
            </div>
        </header>
        <main>
            ${Banner.print()}
            <h1 class="text-sky-900 font-bold text-xl my-5">TIN TỨC HỌC TẬP</h1>
            <section class="grid grid-cols-3 gap-5">
            ${NewsList.print()}
            </section>
            <h1 class="text-sky-900 font-bold text-xl my-5">HOẠT ĐỘNG SINH VIÊN</h1>
            <section class="grid grid-cols-3 gap-5">
            ${NewsList.print()}
            </section>
        </main>
        <footer>
            ${Footer.print()}
        </footer>
        `;
    },
};

export default trangchu;
/** <h1>Home Page</h1>
        <div class="news">
            ${NewsList.print()}
        </div> */
