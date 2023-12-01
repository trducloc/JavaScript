/* Bai 1: Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
Đặt màu văn bản thành #777
Đặt kích thước phông chữ thành 2rem
Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
*/
var textParagraph = document.getElementById("text");

// Đặt màu văn bản thành #777
textParagraph.style.color = "#777";

// Đặt kích thước phông chữ thành 2rem
textParagraph.style.fontSize = "2rem";

// Đặt nội dung HTML mới
textParagraph.innerHTML = 'Tôi có thể làm <em>bất cứ điều gì</em> tôi muốn với JavaScript.';

// Bai 2 : Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

var listItems = document.getElementById("myList").getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
}

/* Bai 3: Sử dụng javascript để thực hiện những công việc sau
Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
Remove thẻ <li> 4
Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ */

// Thêm 3 thẻ <li> vào cuối danh sách
var list = document.getElementById("list");
for (var i = 8; i <= 10; i++) {
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode("Item " + i));
    list.appendChild(newItem);
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ
var item1 = document.getElementsByTagName("li")[0];
item1.style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh
var item3 = list.getElementsByTagName("li")[2];
item3.style.backgroundColor = "blue";

// Remove thẻ <li> 4
var item4 = list.getElementsByTagName("li")[3];
item4.parentNode.removeChild(item4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa
var newItem4 = document.createElement("li");
newItem4.appendChild(document.createTextNode("Hello"));
list.insertBefore(newItem4, list.childNodes[3]);


