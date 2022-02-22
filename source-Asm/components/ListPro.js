import { getAll } from "../api/products";

const ListProducts = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <h2 class="font-semibold text-blue-900 mt-5 mb-7 uppercase text-2xl ">Shopping</h2>
        <div class="bg-white">
        <div class="max-w-7xl mx-auto py-14 px-4  " id="list-product-content">
          <h2 class="sr-only">Products</h2>
        <div class=""> 
        <select name="" id="sortPrice">
            <option value="0" selected>Tất cả</option>
            <option value="1">Tăng dần</option>
            <option value="2">Giảm dần</option>
        </select>
        </div>
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                ${data.map((post) => /* html */`
                
                <a href="/#/products/${post.id}" class="group">
                <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src="${post.img}"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="w-full h-full object-center object-cover group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">${post.nameProduct}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">${post.priceProduct}</p>
                </a>
                `).join("")}
            </div>
        </div>
        
      </div>
        `;
    },
};
export default ListProducts;