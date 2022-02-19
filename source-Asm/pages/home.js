import Banner from "../components/banner";
import Footer from "../components/footer";
// eslint-disable-next-line import/no-named-as-default
import Header from "../components/header";
import News from "../components/news";
import productHome from "../components/prohome";

const HomePage = {
    async render() {
        return /* html */`
        <div class=" mx-auto">
            <div id="header">
                ${Header.render()}
            </div>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${await News.render()}
                </div>
                <div class="news">
                    ${await productHome.render()}
                </div>
            </main>
            <footer class="text-center">
                ${Footer.render()}
             </footer>
            
        </div>
            
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;
