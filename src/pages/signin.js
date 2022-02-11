import { signin } from "../api/user";

const Signin = {
    render() {
        return `<form id="formSignin">
                <input type="email" id="email" class="border border-black" placeholder="Your email"/>
                <input type="password" id="password" class="border border-black" placeholder="Your password"/>
                <button>Đăng nhập</button>
        </form>`;
    },
    afterRender() {
        const formSignin = document.querySelector("#formSignin");
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            // call API login
            const { data } = await signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            // lưu dữ liệu vào localStorage
            localStorage.setItem("user", JSON.stringify(data.user));
            // kiểm tra quyền dựa trên ID
            if (data.user.id === 1) {
                document.location.href = "/#/admin/dashboard";
            } else {
                document.location.href = "/#/";
            }
        });
    },
};
export default Signin;