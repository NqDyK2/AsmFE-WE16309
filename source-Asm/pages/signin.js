import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signin } from "../api/users";

import Header from "../components/header";

const Signin = {
    async render() {
        return /* html */ `
        ${Header.render()}
        <div class=" mx-auto mt-20">
        <div class=" py-20">
            <div class="w-96 bg-white container mx-auto py-16  shadow-2xl">
                <div class="flex justify-center pt-6">
                    <img src="/image/avatar.svg" alt="" class="object-cover w-24">
                </div>
                <h1 class="text-4xl font-bold text-center py-2">WELCOME</h1>
                <div class="flex justify-center text-xs ">
                    <form class="text-gray-600" id="formSignin">
                        <div>
                            <label for="#"><i class="fas fa-user mx-2 text-2xl"></i><input type="email" name="" id="email"
                                    placeholder="Email" required
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
                        <div class="text-center text-red-400 font-bold" id="error">
                        
                        </div>
                        <div>
                            <div class="text-right">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div class="flex justify-center my-3">
                                <input type="submit" name="" id="" value="LOGIN"
                                    class=" bg-green-400  hover:bg-green-500 text-white px-16 rounded-full py-2 outline-none">
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        <!--
        <form id="formSignin">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <input type="password" id="password" class="border border-black" placeholder="Your password"/>
                <button>Đăng nhập</button>
        </form> -->
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // call API login
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/#/admin/dashboard";
                    } else {
                        document.location.href = "/#/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                // console.log(error.response.data);
            }
        });
    },
};
export default Signin;
