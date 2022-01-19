import Table from "../components/allProducts";
import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import Menu from "../components/menu";

const TableProductsPage = {
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
        <h1 class="text-center font-semibold text-teal-600 dark:text-teal-400 text-3xl mb-4">Table Products</h1>
        ${Table.render()}
        <footer>
            ${Footer.render()}
        </footer>
        
        `;
    },
};
export default TableProductsPage;
