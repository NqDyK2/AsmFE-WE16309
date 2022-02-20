// eslint-disable-next-line import/no-unresolved
import toastr from "toastr";
import { getAll, remove } from "../../../api/users";
import AdminNav from "../../../components/AdminNav";
// eslint-disable-next-line import/no-unresolved
import "toastr/build/toastr.min.css";
import { reRender } from "../../../utils";

const AccountPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                                Account
                            </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                           
                        </div>
                    </div>

                </div>
            </header>
            <!--
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đơn giá </th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Img </th>
                                                    <th scope="col" class="relative px-6 py-3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "></th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                ${data.map((account, index) => `
                                                        <tr>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${index + 1}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${account.email}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                ${account.username}
                                                            </td>
                                                            <td class="px-6 py-4 whitespace-nowrap"><img src="${account.img}" width="100px"/></td>
                                                            <td class="px-6 py-4 whitespace-nowrap">
                                                                <a href="/#/admin/users/${account.id}/edit">Edit</a>
                                                                <button data-id=${account.id} class="btn btn-remove inline-block px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button>
                                                            </td>
                                                        </tr>
                                                
                                                `).join("")}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                    </div>
                                    </div>

                    </div>
                </div>
            </main>
        </div>
        -->


        <div class="min-h-full  py-5">
    <div class='overflow-x-auto w-full'>
        <table class='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
            <thead class="bg-gray-900">
                <tr class="text-white text-left">
                    <th class="font-semibold text-sm uppercase px-6 py-4"> Name </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4"> Designation </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> status </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4 text-center"> role </th>
                    <th class="font-semibold text-sm uppercase px-6 py-4"> </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                ${data.map((account) => /* html */`
                <tr>
                    <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                            <div class="inline-flex w-10 h-10"> <img class='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://i.imgur.com/siKnZP2.jpg' /> </div>
                            <div>
                                <p> ${account.username} </p>
                                <p class="text-gray-500 text-sm font-semibold tracking-wide"> ${account.email} </p>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <p class=""> Software Developer </p>
                        <p class="text-gray-500 text-sm font-semibold tracking-wide"> Development </p>
                    </td>
                    <td class="px-6 py-4 text-center"> <span class="text-white text-sm w-1/3 pb-1 bg-green-600 font-semibold px-2 rounded-full"> Active </span> </td>
                    <td class="px-6 py-4 text-center"> ${account.role} </td>
                    <td class="px-6 py-4 text-center"><button data-id=${account.id} class="btn btn-remove inline-block px-4 py-3 text-white rounded bg-indigo-500 hover:bg-indigo-800">Delete</button></td>
                </tr>
                `).join("")}

            </tbody>
        </table>
    </div>
</div>
        `;
    },
    afterRender() {
        // lấy toàn bộ button thông qua class .bnt
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp để lấy từng button element
        btns.forEach((btn) => {
            // Lấy giá trị ID thông qua thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Bạn đã xóa thành công");
                    }).then(() => {
                        reRender(AccountPage, "#app");
                    });
                }
                // remove
            });
        });
    },
};
export default AccountPage;
