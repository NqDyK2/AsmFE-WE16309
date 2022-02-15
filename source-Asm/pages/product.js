import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage = {
    render() {
        return `<div class="max-w-5xl mx-auto">
        ${Header.render()}
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <h1>Products Page</h1>
        </main>
        ${Footer.render()}
    </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default ProductPage;
