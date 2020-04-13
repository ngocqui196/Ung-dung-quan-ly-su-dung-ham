let listProduct = [];
function addNewProduct(newProduct) {
    if (newProduct.length >= 2) {
        listProduct.push(newProduct);
        return  true;
    }else {
        return false;
    }

}
function creatNewProduct() {
    let newProduct = document.getElementById("newProduct").value;
    if (addNewProduct(newProduct)) {
        alert("đã thêm thành công")
        document.getElementById("newProduct").value = "";
    }else {
        alert("Sản phẩm không rõ nguồn gốc");
        document.getElementById("newProduct").focus();
    }
    showListProduct();
}
function showListProduct() {
    let data = "<table border = '2px'>";
    data += "<tr>" +
        "<th>Stt</th>" +
        "<th>San pham</th>" +
        "<th>Edit</th>" +
        "<th>Delete</th>" +
        "</tr>"
    for (let i = 0; i < listProduct.length;i++) {
        data += "<tr>" +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + listProduct[i] + '</td>' +
            '<td><button onclick="editProduct('+ i +')">Edit</button></td>' +
            '<td><button onclick="deleteProduct('+ i +')">Delete</button></td>' +
            '</tr>'
    }
    data += "</table>";
    document.getElementById("listProduct").innerHTML = data;
}
function editProduct(index) {
    let editName = prompt("Tên sản phẩm", listProduct[index]);
    listProduct[index] = editName;
    showListProduct();
}
function deleteProduct(index) {
    let del = confirm("Bạn muốn xóa" + listProduct[index]);
    if (del== true) {
        listProduct.splice(index,1)
    }
    showListProduct();
}
