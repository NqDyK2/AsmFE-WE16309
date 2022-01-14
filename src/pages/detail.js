import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import Menu from "../components/menu";
import data from "../data";

const DetailNewsPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
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
                <h1 class="text-center font-semibold text-teal-600 dark:text-teal-400 text-3xl mb-4">${result.title}</h1>
                <div class="grid grid-cols-2 ">
                    <div>
                        <img src="${result.img}" width="" />
                    </div>
                    <div>
                        <p class="text-center ml-5 p-auto">${result.desc}</p>
                    </div>
                </div>
            </div> 
        </main>  
        <footer>
            ${Footer.render()}
        </footer>
           
        `;
    },
};
export default DetailNewsPage;
