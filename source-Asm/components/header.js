import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!--
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!--
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <img class="block lg:hidden h-8 w-auto" src="https://res.cloudinary.com/dielvkumg/image/upload/v1644861175/image_1_segs14.png" alt="Workflow">
                            <img class="hidden lg:block h-8 w-auto" src="https://res.cloudinary.com/dielvkumg/image/upload/v1644861175/image_1_segs14.png" alt="Workflow">
                        </div>
                        <div class="hidden sm:block sm:ml-6">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home Page</a>

                                <a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">News Page</a>

                                <a href="/products" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products Pages</a>

                            </div>
                        </div>
                    </div>
                    <form class="inline demo-search px-5" id="demo-search-lg">
                        <input type="search" name="search" placeholder="search">
                    </form>
                    ${localStorage.getItem("user") ? /* html */`
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <a href="/cart"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></a>
                        </button>
                    
                        <!-- Profile dropdown -->
                        <div class="ml-3 relative">
                            <div>
                                <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://res.cloudinary.com/dielvkumg/image/upload/v1644335712/xjsyjda5xqrwjakfaxab.jpg" alt="">
                                </button>
                            
                            </div>
                            <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <!-- Active: "bg-gray-100", Not Active: "" -->
                                <a id="account-email" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"></a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                <a id="logout" class="block px-4 py-2 text-sm text-gray-700 cursor-pointer" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                    </div>` : /* html */`  <a href="/signin" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign In</a>  <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/signup">Sign Up</a>`}
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home Page</a>

                    <a href="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About page</a>

                    <a href="/product" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products Pages</a>

                </div>
            </div>
        </nav>
        `;
    },

    // search() {
    //     document.querySelector("#demo-search-lg").addEventListener("submit", (e) => {
    //         e.preventDefault();
    //         // eslint-disable-next-line no-undef
    //         const data = $$("[name=\"search\"]").value;
    //         window.location.hash = `/productcate/${data}`;
    //     });
    // },

    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");

        document.querySelector("#account-email").innerHTML = user.username;
        // logout
        logout.addEventListener("click", () => {
            // eslint-disable-next-line no-undef
            toastr.success("Logout th??nh c??ng");
            localStorage.removeItem("user");
            reRender(Header, "#header");
        });
    },
};
export default Header;
