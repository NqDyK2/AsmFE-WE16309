import { get } from "../api/post";
import Header from "../components/header";
import Footer from "../components/footer";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */`
        <div class="max-w-5xl mx-auto">
        ${Header.render()}
        <main>
            
            <div>
            <h1>${data.title}</h1>
            <img src="${data.img}" alt="" />
            <p>${data.desc}</p>
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
export default DetailPage;
