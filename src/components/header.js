const Header = {
    render() {
        return /* html */`
        <div class="bg-orange-500 flex justify-between items-center">
            <ul class="flex">
            <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Home Page</a></li>
            <li><a href="/#/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">About Page</a></li>
            <li><a href="/#/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Product Page</a></li>
            <li><a href="/#/admin/dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Dashboard Page</a></li>
           
            </ul>
            <ul class="flex">
                <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            </ul>
        </div>
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-email").innerHTML = user.email;
    },
};
export default Header;