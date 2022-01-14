import Banner from "../components/banner";
import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import Menu from "../components/menu";
import NewsList from "../components/news-list";

const HomePage = {
    render() {
        return /* html */`
        <header class="mb-3">
            <div class="bg-sky-900">
                ${HeadLogo.render()}
            </div>
            <div class="bg-yellow-600 text-sm py-2">
                <nav class="max-w-6xl">
                    ${Menu.render()}
                </nav>
                
            </div>
        </header> 
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div>
                    ${NewsList.render()}
                </div>
        <footer>
            ${Footer.render()}
        </footer>
        `;
    },
};
export default HomePage;
