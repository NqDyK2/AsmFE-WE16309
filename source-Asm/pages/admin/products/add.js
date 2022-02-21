import axios from "axios";
import NavAdmin from "../../../components/AdminNav";
import { add } from "../../../api/products";

const AdminProAdd = {
    render() {
        return /* html */ `
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
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
                <!-- Replace with your content -->
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
                <!-- /End replace -->
            </div>
            </main>
        </div>
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
                name: document.querySelector("#title-product").value,
                img: data.url,
                price: document.querySelector("#price-product").value,
                desc: document.querySelector("#desc-product").value,
            });
        });
    },
};
export default AdminProAdd;
