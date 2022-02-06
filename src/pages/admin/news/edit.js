import { get, update } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                               Edit ${data.title}
                            </h2>
                        </div>
                    </div>

                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                        <form id="form-edit">
                            <input type="text" 
                                    id="title-post" 
                                    class="border border-black" 
                                    placeholder="Title"  
                                    value="${data.title}"
                                    /> <br>
                            <input type="text" 
                                    id="img-post" 
                                    class="border border-black"  
                                    placeholder="Image" 
                                    value="${data.img}"
                                    /> <br>
                            <textarea name="" 
                                    id="desc-post" 
                                    cols="30" 
                                    rows="10" 
                                    class="border border-black"
                                    >${data.desc}</textarea>
                            <button>Update New</button>
                        </form>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminEditPost;
