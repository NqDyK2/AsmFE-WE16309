import { reRender } from "../utils";

const Header = {
    render() {
        return `
        <div class="bg-orange-500 flex justify-between items-center pr-4">
            <ul class="flex">
              <li><a href="#" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
              <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
              <li><a href="/#/products" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
            </ul>
            ${localStorage.getItem("user") ? `
            <div>
             Xin chao : <span id="accountInfo">Username</span>
              <button id="logout">Logout</button>
            </div>
            ` : ""}
            
        </div>
        `;
    },
    afterRender() {
    // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const { username } = JSON.parse(localStorage.getItem("user")).user;
        document.querySelector("#accountInfo").innerHTML = username;
        // Logout
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;
