// eslint-disable-next-line import/prefer-default-export
// export const reRender = async (component, domElement) => {
//     if (component) {
//         document.querySelector(domElement).innerHTML = await component.render();
//     }
//     if (component.afterRender) await component.afterRender();
// };
export const useParams = () => {
    const url = window.location.hash.toLocaleLowerCase();
    // console.log(url);
    const request = url.split("/");
    // console.log(request);
    return {
        resource: request[1],
        id: request[2],
        action: request[3],
    };
};
export const $$ = (selector) => {
    const elements = document.querySelectorAll(selector);
    // eslint-disable-next-line eqeqeq
    return elements.length == 1 ? elements[0] : [...elements];
};

export const reRender = async (component, position = " ") => {
    // console.log(component);
    if (position) {
        $$(position).innerHTML = await component.render();
        // console.log(0);
    } else {
        // console.log(1);
        $$("#app").innerHTML = await component.render();
    }
    await component.afterRender();
};

export const search = () => {
    $$("#demo-search-lg").addEventListener("submit", (e) => {
        e.preventDefault();
        const data = $$("[name=\"search\"]").value;
        window.location.hash = `/productcate/${data}`;
    });
};
