import { Products } from "../../data";

const Table = {
    print() {
        return /* html */`
        <div> 
            <table class ="table-auto"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        <th>Img</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                ${Products.map((sp) => `
                    <tr>
                        <td>${sp.id}</td>
                        <td>${sp.name}</td>
                        <td>${sp.desc}</td>
                        <td><img src="${sp.img}" width="50px" /> </td>
                        <td><a href=""> Edit </a></td>
                    </tr>
                `).join("")}
                </tbody>
            </table>
        </div>
        
        `;
    },
};
export default Table;
