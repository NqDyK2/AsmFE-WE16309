import Table from "../components/admin/adminproduct";

const AdminProducts = {
    print() {
        return /* html */`
        <h1>Table Products</h1>
        ${Table.print()}
        `;
    },
};
export default AdminProducts;
