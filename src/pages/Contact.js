import Contact from "../components/contactForm";
import Footer from "../components/footer";
import HeadLogo from "../components/header-logo";
import Menu from "../components/menu";

const ContactPage = {
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
        <main>
            ${Contact.render()}
        </main>
        <footer>
            ${Footer.render()}
        </footer>
        `;
    },
};
export default ContactPage;
