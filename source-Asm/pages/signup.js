import { signup } from "../api/user";
// import Footer from "../components/footer";
// import Header from "../components/header";

const Signup = {
    render() {
        return /* html */`
        <div class="  mx-auto mt-20">
        <div class=" py-20">
            <div class="w-96 bg-white container mx-auto py-16  shadow-2xl">
                <div class="flex justify-center pt-6">
                    <img src="/image/avatar.svg" alt="" class="object-cover w-24">
                </div>
                <h1 class="text-4xl font-bold text-center py-2">WELCOME TO REGISTER</h1>
                <div class="flex justify-center text-xs ">
                    <form class="text-gray-600" id="signup">
                        <div>
                            <label for="#"><i class="fas fa-user mx-2 text-2xl"></i><input type="email" name="" id="emails"
                                    placeholder="Email" required
                                    class="ml-2 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out  outline-none">
                            </label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        <div>
                            <label for="#"><i class="fas fa-user mx-2 text-2xl"></i><input type="text" name="" id="fullname"
                                    placeholder="name" required
                                    class="ml-2 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out  outline-none">
                            </label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        <div>
                            <label for="#"><i class="fas fa-lock mx-2 text-2xl"></i> <input type="password" name="" minlength="8"
                                    id="password" placeholder="Password" required
                                    class="ml-1 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out    outline-none"></label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        <div>
                            <label for="#"><i class="fas fa-lock mx-2 text-2xl"></i> <input type="password" name="" minlength="8"
                                    id="retypepass" placeholder="Retypepass" required
                                    class="ml-1 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out    outline-none"></label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        <div class="text-center text-red-400 font-bold" id="error">
                        
                        </div>
                        <div>
                            <div class="text-right">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div class="flex justify-center my-3">
                                <input type="submit" name="" id="" value="SIGN UP"
                                    class=" bg-green-400  hover:bg-green-500 text-white px-16 rounded-full py-2 outline-none">
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <body class="h-screen bg-gray-200">
    <div class="max-w-sm mx-auto rounded shadow-lg md:max-w-md my-10 p-6 pb-10 bg-gray-100">
        <div class=" flex justify-center border-b border-gray-300">
            <h1 class="font-bold text-lg text-gray-400 pb-1">Login system</h1>
        </div>
        <div class=" pt-6">
            <form class=" text-center"> <input type="text" name="displayname" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 text-gray-600" placeholder="Display name*"> <input type="email" name="usermail" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="E-mail*"> <input type="password" name="userpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Password*"> <input type="password" name="confirmpass" class="block border p-2 bg-white w-full h-10 focus:outline-none focus:border-blue-400 rounded text-sm placeholder-gray-600 placeholder-opacity-40 mt-2 text-gray-600" placeholder="Confirm password*">
                <div class="flex justify-center">
                    <p class="text-gray-600 font-semibold pt-2 w-2/3" style="font-size: 9.5px;">By clicking Agree & Join, you agree to the Website User Agreement, Privacy Policy, and Cookie Policy.</p>
                </div> <button type="submit" class="w-80 h-9 bg-blue-500 text-sm font-semibold mt-2 rounded-sm text-gray-100 focus:outline-none hover:bg-blue-600">Agree & Join</button>
            </form>
        </div>
        <div class="pt-3 text-center"> <span class="text-gray-600 text-xs w-2/3">Already have an account? <span type="button" class="text-gray-700 text-xs font-bold">Login</span></span> </div>
        <div class="flex justify-between items-center mt-1">
            <hr class="w-full border-gray-300"> <span class="p-2 text-gray-400 text-xs">OR</span>
            <hr class="w-full border-gray-300">
        </div>
        <div class="pt-2">
            <p class="text-gray-700 font-bold pb-2 pl-1" style="font-size: 10px;">You can also login with:</p>
            <div class="flex justify-between items-center"> <button type="button" class="w-1/4 mx-1 p-2 font-bold text-white bg-blue-800 rounded focus:outline-none hover:bg-blue-900" style="font-size: 12px;">Facebook</button> <button type="button" class="w-1/4 mx-1 p-2 font-bold text-white bg-red-600 rounded focus:outline-none hover:bg-red-800" style="font-size: 12px;">Google</button> <button type="button" class="w-1/4 mx-1 p-2 font-bold text-white bg-blue-800 rounded focus:outline-none hover:bg-blue-900" style="font-size: 12px;">LinkedIn</button> <button type="button" class="w-1/4 mx-1 p-2 font-bold text-white bg-blue-500 rounded focus:outline-none hover:bg-blue-900" style="font-size: 12px;">Twitter</button> </div>
        </div>
    </div>
</body>
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default Signup;
