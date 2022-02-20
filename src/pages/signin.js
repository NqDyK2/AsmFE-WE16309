import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";
// import Header from "../components/header";
// import Footer from "../components/footer";

const Signin = {
    async render() {
        return /* html */ `
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                <input type="text" name="" required="">
                <label>Username</label>
                </div>
                <div class="user-box">
                <input type="password" name="" required="">
                <label>Password</label>
                </div>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
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
