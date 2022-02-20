import { signup } from "../api/user";

const Signup = {
    render() {
        return `
            <form id="formSignup">
                <input type="text" placeholder="username" id="username" /> <br />
                <input type="email" placeholder="email" id="email" /> <br />
                <input type="password" placeholder="password" id="password" /> <br />
                <button class="border border-black">Đăng ký</button>
            </form>
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
