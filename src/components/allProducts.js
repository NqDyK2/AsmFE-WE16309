import data from "../data";

const Table = {
    render() {
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
                ${data.map((sp) => `
                    <tr>
                        <td>${sp.id}</td>
                        <td>${sp.title}</td>
                        <td>${sp.desc}</td>
                        <td><img src="${sp.img}" width="50px" class="rounded-full" /> </td>
                        <td><a href="/edit/${sp.id}"> Edit </a></td>
                    </tr>
                `).join("")}
                </tbody>
            </table>
        </div>
        
        `;
    },
};
export default Table;
