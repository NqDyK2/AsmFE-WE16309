import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import Menu from "../components/menu";

const AboutPage = {
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
        <h1 class="text-2xl text-center text-red-600 dark:text-red-300 my-10 font-bold">About Page</h1>
        <div class=" text-center">Nothing here</div>
        <footer>
            ${Footer.render()}
        </footer>
            
        `;
    },
};
export default AboutPage;
