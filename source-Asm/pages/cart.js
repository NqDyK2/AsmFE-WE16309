import toastr from "toastr";
import { reRender } from "../utils";
import {
    decreaseQuantity, increaseQuantity, removeItemInCart, getTotalPrice,
} from "../utils/cart";
import "toastr/build/toastr.min.css";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `

        <div class="h-screen bg-gray-300">
        <div class="py-12">
            <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                <div class="md:flex ">
                    <div class="w-full p-4 px-5 py-5">
                        <div class="md:grid md:grid-cols-3 gap-2 ">
                            <div class="col-span-2 p-5">
                                <h1 class="text-xl font-medium ">Shopping Cart</h1>
                                ${cart.map((item) => /* html */`
                                <div class="flex justify-between items-center mt-6 pt-6">
                                
                                    <div class="flex items-center"> <img src="${item.img}" width="60" class="rounded-full ">
                                        <div class="flex flex-col ml-3"> <span class="md:text-md font-medium">${item.name}</span> <span class="text-xs font-light text-gray-400">#${item.id}</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex "> <button data-id="${item.id}" class="btn btn-decrease"> <span class="font-semibold">-</span> </button> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="${item.quantity}"> <button data-id="${item.id}" class="btn btn-increase"> <span class="font-semibold">+</span> </button> </div>
                                        <div class="pr-8 "> <span class="text-xs font-medium">$${item.price * item.quantity}</span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div>
                        `).join("")}
                                    

                                
                            <!--
                                <div class="flex justify-between items-center pt-6 mt-6 border-t">
                                    <div class="flex items-center"> <img src="https://i.imgur.com/Uv2Yqzo.jpg" width="60" class="rounded-full ">
                                        <div class="flex flex-col ml-3 "> <span class="text-md font-medium w-auto">Spicy Mexican potatoes</span> <span class="text-xs font-light text-gray-400">#66999</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex"> <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"> <span class="font-semibold">+</span> </div>
                                        <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                    <div class="flex items-center"> <img src="https://i.imgur.com/xbTAITF.jpg" width="60" class="rounded-full ">
                                        <div class="flex flex-col ml-3 "> <span class="text-md font-medium">Breakfast</span> <span class="text-xs font-light text-gray-400">#86577</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="pr-8 flex">  <span class="font-semibold">-</span> <input type="text" class="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value="1"> <span class="font-semibold">+</span> </div>
                                        <div class="pr-8"> <span class="text-xs font-medium">$10.50</span> </div>
                                        <div> <i class="fa fa-close text-xs font-medium"></i> </div>
                                    </div>
                                </div> 
                                    -->

                                <div class="flex justify-between items-center mt-6 pt-6 border-t">
                                    <div class="flex items-center"> <a href="/products" ><i class="fa fa-arrow-left text-sm pr-2"></i> <span class="text-md font-medium text-blue-500">Continue Shopping</span> </a> </div>
                                    <div class="flex justify-center items-end"> <span class="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span class="text-lg font-bold text-gray-800 ">$ ${getTotalPrice()}</span> </div>
                                </div>
                            </div>

                            <div class=" p-5 bg-gray-800 rounded overflow-visible"> <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span> <span class="text-xs text-gray-400 ">Card Type</span>
                                <div class="overflow-visible flex justify-between items-center mt-2">
                                    <div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10"> <span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                        <div class="flex justify-between items-center pt-4 "> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> <span class="text-xs text-gray-200 font-medium">****</span> </div>
                                        <div class="flex justify-between items-center mt-3"> <span class="text-xs text-gray-200">Giga Tamarashvili</span> <span class="text-xs text-gray-200">12/18</span> </div>
                                    </div>
                                    <div class="flex justify-center items-center flex-col"> <img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" /> <span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span> </div>
                                </div>
                                <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Name on Card</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Giga Tamarashvili"> </div>
                                <div class="flex justify-center flex-col pt-3"> <label class="text-xs text-gray-400 ">Card Number</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****"> </div>
                                <div class="grid grid-cols-3 gap-2 pt-2 mb-3">
                                    <div class="col-span-2 "> <label class="text-xs text-gray-400">Expiration Date</label>
                                        <div class="grid grid-cols-2 gap-2"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy"> </div>
                                    </div>
                                    <div class=""> <label class="text-xs text-gray-400">CVV</label> <input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX"> </div>
                                </div> <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</button>
                            
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;
