import { searchLike, sortValue } from "../../api/products";
import Header from "../../components/header";
import ListProducts from "../../components/ListPro";
import ProductsTemplate from "../../components/ProductsTemplate";
import { reRender } from "../../utils";

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
        const sortPrice = document.getElementById("sortPrice");
        sortPrice.addEventListener("change", async () => {
            console.log(+sortPrice.value);
            if (+sortPrice.value === 1) {
                const { data } = await sortValue("products", "priceProduct");
                document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
            } else if (+sortPrice.value === 2) {
                const { data } = await sortValue("products", "priceProduct", "desc");
                document.getElementById("list-product-content").innerHTML = await ProductsTemplate.render(data);
            } else {
                reRender(ListProducts, "app");
            }
        });
    },
};
export default ProductsPage;
// sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8
