import { add } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";

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
                            <input type="text" id="img-post" class="border border-black"  placeholder="Image" /><br>
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
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            add({
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminAddPost;
