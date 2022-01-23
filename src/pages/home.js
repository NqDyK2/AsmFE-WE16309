import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

const HomePage = {
    async render() {
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <header>
                    ${Header.render()}
                </header>
                <main>
                    <div class="banner">
                        ${Banner.render()}
                    </div>
                    <div class="news">
                        ${await News.render()}
                    </div>
                </main>
                <footer>
                    ${Footer.render()}
                </footer>
            </div>
            
        `;
    },
};
export default HomePage;