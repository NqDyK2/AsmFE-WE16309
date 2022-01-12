import data from "../data";

const NewsList = {
    print() {
        return /* html */`
    ${data.map((post) => `
          <div class="border border-slate-300 max-w-full max-h-full p-auto m-auto">
              <img src="${post.img}" class="px-auto py-6 m-auto" alt="" width="350px" >
              <h3 class=" pb-3 text-center  font-bold text-xl text-orange-700 m-auto">${post.title}</h3>
              <div class="pb-5 text-center">
                <span class="text-center m-auto text-base">${post.desc1} ${post.desc2} ${post.desc3} ${post.desc4}
                </span>
              </div>
          </div>
           `).join("")}
        `;
    },
};
export default NewsList;
