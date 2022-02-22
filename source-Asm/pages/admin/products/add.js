import axios from "axios";
import NavAdmin from "../../../components/AdminNav";
import { add } from "../../../api/products";

const AdminProAdd = {
    render() {
        return /* html */ `

        ${
    NavAdmin.render()
}
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6 mx-auto">
          <div class="md:col-span-1">
            
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add-product">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <div class="mt-1 flex rounded-md shadow-sm">
                      <label  class="block text-sm font-medium text-gray-700">Tên sản phẩm</label> <br>
                    <input type="text" class="border border-black" id="title-product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Title"/><br />
                    <label  class="block text-sm font-medium text-gray-700">Giá</label> <br>
                    <input type="text" class="border border-black" id="price-product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Title"/><br />
                      </div>
                    </div>
                  </div>
      
                  <div>
                    <label for="about"   class="block text-sm font-medium text-gray-700"> About </label>
                    <div class="mt-1">
                      <textarea id="desc-product" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                  </div>
      
                  <div>
                    <label class="block text-sm font-medium text-gray-700"> Photo </label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                    </div>
                  </div>
      
                  <div>
                    <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <input type="file" class="border border-black" id="img-product" />
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
<!--
        <div class="min-h-full">
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2
                        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                        Thêm mới
                        </h2>
                    </div>
                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/news/add" class="sm:ml-3">
                            <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Quay lại
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-product">
                        <input type="text" class="border border-black" id="title-product" placeholder="Title"/><br />
                        <input type="text" class="border border-black" id="price-product" placeholder="Price"/><br />

                        <div class="w-3xl grid grid-cols-2 gap-8">
                            <div><input type="file" class="border border-black" id="img-product" /></div>
                            <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                        </div>
                        <textarea name="" cols="30" rows="10" class="border border-black" id="desc-product" placeholder="Description"></textarea><br />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
            </main>
        </div> -->
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-product");
        // eslint-disable-next-line no-unused-vars
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-product");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const CLOUDINARY_PRESET = "jkbdphzy";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call api thêm bài viết
            add({
                nameProduct: document.querySelector("#title-product").value,
                img: data.url,
                price: document.querySelector("#price-product").value,
                desc: document.querySelector("#desc-product").value,
            });
        });
    },
};
export default AdminProAdd;
