import { signup } from "../api/user";

const SignUp = {
    render() {
        return `<form id="formSignup">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <input type="password" id="password" class="border border-black" placeholder="Your password"/>
                <button>Đăng ký</button>
        </form>`;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default SignUp;