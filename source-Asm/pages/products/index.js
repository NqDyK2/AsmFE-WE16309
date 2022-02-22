import { searchLike } from "../../api/products";
import Header from "../../components/header";
import ListProducts from "../../components/ListPro";
import ProductsTemplate from "../../components/ProductsTemplate";

const ProductsPage = {
    async render() {
        return /* html */`
        <div id="header">
                ${await Header.render()}
        </div>
        <main> 
        <div id="list-product-content" class="list-product-content">
            ${await ListProducts.render()}
        </div>
        </main>
        `;
    },
    afterRender() {
        const btnSearchValue = document.querySelector("#btn-searchValue");
        btnSearchValue.addEventListener("click", async () => {
            const valueSearch = document.querySelector("#value_search").value;
            const { data } = await searchLike("products", `nameProduct_like=${valueSearch}`);
            document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
        });
        Header.afterRender();
    },
};
export default ProductsPage;
// sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8
