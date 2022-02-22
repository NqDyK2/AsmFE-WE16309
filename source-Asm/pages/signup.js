import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import { signup } from "../api/users";
// import Footer from "../components/footer";
import Header from "../components/header";
// eslint-disable-next-line no-unused-vars

const Signup = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="  mx-auto mt-2">
        <div class=" py-16">
            <div class="w-96 bg-white container mx-auto py-16  shadow-2xl">
                <div class="flex justify-center pt-6">
                    <img src="/image/avatar.svg" alt="" class="object-cover w-24">
                </div>
                <h1 class="text-4xl font-bold text-center py-2">WELCOME TO REGISTER</h1>
                <div class="flex justify-center text-xs ">
                    <form class="text-gray-600" id="formSignup">
                        <div>
                            <label for="#"><i class="fas fa-user mx-2 text-2xl"></i><input type="email" name="" id="email"
                                    placeholder="Email" required
                                    class="ml-2 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out  outline-none">
                            </label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        <div>
                            <label for="#"><i class="fas fa-user mx-2 text-2xl"></i><input type="text" name="" id="username"
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
                        <!--
                        <div>
                            <label for="#"><i class="fas fa-lock mx-2 text-2xl"></i> <input type="password" name="" minlength="8"
                                    id="retypepass" placeholder="Retypepass" required
                                    class="ml-1 py-1 px-2 scale-95 transform focus:scale-105 transition duration-300 ease-in-out    outline-none"></label>
                            <hr class="text-gray-500 my-2">
                        </div>
                        -->
                        <div class="text-center text-red-400 font-bold" id="error">
                        
                        </div>
                        <div>
                            <div class="text-right">
                                <a href="/signin">Have Account?</a>
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


   
        `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        $("#formSignup").validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 8,
                },
                username: {
                    required: true,
                },
                messages: {
                    email: {
                        required: "Chúng tôi cần email để liên lạc với bạn.",
                        email:
                    "Địa chỉ email bạn nhập phải có dạng: name@domain.com.",
                    },
                    username: {
                        require: "Chúng tôi cần biết tên của bạn",
                    },
                    password: {
                        password: "Hãy nhập đủ ít nhất 8 ký tự.",
                        required: "Không được bỏ trống.",
                    },
                },
            },
        });

        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            if ($("#formSignup").validate()) {
                signup({
                    username: document.querySelector("#username").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                    role: "0",
                });
            }
        });
    },
};
export default Signup;
