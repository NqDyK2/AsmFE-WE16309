import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return `
        <div class="bg-orange-500 flex justify-between items-center">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
            <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
            <li><a href="/#/products" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
            <li><a href="/#/admin/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Dashboard Page</a></li>
           
            </ul>
            ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
        </ul>` : ""}
            
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        logout.addEventListener("click", () => {
            toastr.success("Logout thành công");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;
