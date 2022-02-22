const ProductsTemplate = {
    async render(arrProduct) {
        return /* html */`
        <div class='active max-w-7xl mx-auto py-14 px-4'>
               
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            ${arrProduct.map((product) => /* html */`
                <a href="/#/products/${product.id}" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src="${product.img}"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700 texxt-center">${product.nameProduct}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">${product.priceProduct}</p>
                </a>
                `).join("")}
            </div>

            `;
    },

};
export default ProductsTemplate;
