import Footer from "../../components/footer";
import HeadLogo from "../../components/header-logo";
import Menu from "../../components/menu";
import data from "../../data";

const editProduct = {
    render(id) {
        const result = data.find((post) => post.id === id);
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
            <main> 
                <div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <img src="${result.img}" width="" />
                        </div>
                        <form> 
                            <input type="text" class="border text-center font-semibold text-teal-600 dark:text-teal-400 text-3xl mb-4" value="${result.title}" placeholder="Tiêu đề" /> <br>
                            <textarea required="required" class="border" cols="50" row="50" id="post-desc">${result.desc}</textarea> <br>     
                            <button class="rounded-lg bg-sky-500 text-white w-24 ml-36 mt-5">Save Changes</button>
                        </form>
                    </div>
                </div> 
            </main>
            
            <footer>
                ${Footer.render()}
            </footer>
        `;
    },
};
export default editProduct;
