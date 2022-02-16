import { get } from "../api/post";

const DetailPage = {
    async render(id) {
        const { data } = await get(id);
        // const result = data.find((post) => post.id === id);
        return /* html */`
            <div class="max-w-5xl mx-auto">
                <h1>${data.title}</h1>
                <img src="${data.img}" alt="" />
                <p>${data.desc}</p>
            </div>
            
        `;
    },
};
export default DetailPage;
