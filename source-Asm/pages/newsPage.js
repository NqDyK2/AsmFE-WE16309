import { getAll } from "../api/post";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {

    async render() {
        const { data } = await getAll();

        return /* html */`
        <div class=" mx-auto">
        ${Header.render()}
        <main>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
            
        <div class="bg-gray-100">
        <div class="max-h-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto  pt-20   lg:max-w-none">
                <h2 class="text-2xl font-extrabold text-gray-900 ">Special News!</h2>
                    <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        ${data.map((post) => /* html */`
                        <div class="group relative">
                            <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img src="${post.img}" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover">
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a href="/#/news/${post.id}">
                                <span class="absolute inset-0"></span>
                                ${post.title}
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">${post.desc}</p>
                        </div>
                        `).join("")}
                      
                    </div>
            </div>
        </div>
    </div>
            </div>
        </main>
        ${Footer.render()}
    </div>
        
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};

export default AboutPage;
