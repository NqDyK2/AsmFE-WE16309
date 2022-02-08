import axios from "axios";
import AdminNewsPage from ".";
import { add } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";
import { reRender } from "../../../utils";

const AdminAddPost = {
    async render() {
        console.log("Add Post");
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                               Add New
                            </h2>
                        </div>
                    </div>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <form id="form-add">
                            <input type="text" id="title-post" class="border border-black" placeholder="Title" /> <br>
                            <input type="file" id="img-post" class="border border-black"  placeholder="Image" /><br>
                            <textarea name="" id="desc-post" cols="30" rows="10" class="border border-black"></textarea>
                            <button>Add New</button>
                        </form>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dielvkumg/image/upload";
        const CLOUDINARY_PRESET = "AsmNqDyy";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#img-post").files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });

            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
            window.location.href = "/#/admin/news";

            reRender(AdminNewsPage, "#app");
        });
    },
};
export default AdminAddPost;
