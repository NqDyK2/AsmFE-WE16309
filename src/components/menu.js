const Menu = {
    print() {
        return /* html */`
        <ul class="px-2 mx-6 ">
            <li class="inline-block px-3 text-white hover:underline"><a href="/">Trang chủ</a></li>
            <li class="inline-block px-3 text-white hover:underline"><a href="/tuyensinh">Tuyển sinh</a></li>
            <li class="inline-block px-3 text-white hover:underline"><a href="/daotao">Chương trình đào tạo</a></li>
            <li class="inline-block px-3 text-white hover:underline"><a href="/gocsinhvien">Góc sinh viên</a></li>
            <li class="inline-block px-3 text-white hover:underline"><a href="/tuyendung">Tuyển dụng</a></li>
        </ul>`;
    },
};
export default Menu;
