//dùng js để tạo giao diện
// tạo thẻ / tạo 1 phần tử nội dung trong html
let ul = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
  let li = document.createElement("li");
  li.innerText = `list Item number ${i + 1}`;
  ul.appendChild(li);
}
//đưa phần tử vừa tạo hiển thị ra body
document.body.appendChild(ul);

//xây dựng giao diện một nút bấm vào thì hiển thị thông báo xin chào mọi cho người dùng
function handleClick() {
  alert("Xin chào mọi người");
}
let btn = document.createElement("button");
btn.innerText = "Click me11";
btn.onclick = handleClick;
document.body.appendChild(btn);

// Xây dựng giao diện gồm 1 nút bấm và 1 dòng chữ, khi ấn vào nút thì dòng chữ sẽ thay đổi nội dung của dòng chữ trên giao diện
function handleClick1() {
  let h1 = document.querySelector("h1");
  h1.innerText = "Đã thay đổi nội dung";
}

//Xây dựng giao diện gồm 1 nút bấm và 1 dòng chữ, khi ấn vào nút thì dòng chữ sẽ thay đổi style của dòng chữ.
function handleClick2() {
  let h1 = document.querySelector("h1");
  h1.style.color = "red";
  h1.style.fontSize = "30px";
  h1.style.textAlign = "center";
  h1.style.padding = "20px";
  h1.style.borderRadius = "10px";
  h1.style.width = "200px";
  h1.style.margin = "0 auto";
  h1.style.marginTop = "100px";
  h1.style.cursor = "pointer";
  h1.style.transition = "all 0.3s ease-in-out";
  h1.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  h1.style.transition = "all 0.3s ease-in-out";
  h1.style.transform = "scale(1.1)";
  h1.style.transition = "all 0.3s ease-in-out";
  h1.style.transition = "all 0.3s ease-in-out";
  h1.style.backgroundColor = "yellow";
}

//Viết chương trình khai báo mảng names chứa họ tên của người dùng, tiến hành in tất cả các tên trong mảng lên danh sách trên màn hình trình duyệt.
//Ví dụ: khai báo mảng [“Nguyễn Văn A”, “Vũ Thị B”, “Nguyễn Minh C”] sẽ tạo ra danh sách:
let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let ul1 = document.createElement("ul");
for (let i = 0; i < names.length; i++) {
  let li = document.createElement("li");
  li.innerText = names[i];
  ul1.appendChild(li);
}
document.body.appendChild(ul1);

//Tạo giao diện như hình, mỗi khi bấm vào nút thì thêm giá trị trong ô input vào danh sách.

let input = document.createElement("input");
input.type = "text";
document.body.appendChild(input);

let btn3 = document.createElement("button");
btn3.innerText = "Add";
btn3.onclick = function () {
  let li = document.createElement("li");
  li.innerText = input.value;
  ul1.appendChild(li);
  input.value = "";
};
document.body.appendChild(btn3);

//tạo giao diện như hình, mỗi khi bấm vào nút thì thêm giá trị trong ô input vào danh sách, mỗi giá trị phải có màu sắc khác nhau.
let input1 = document.createElement("input");
input1.type = "text";
document.body.appendChild(input1);

let btn4 = document.createElement("button");
btn4.innerText = "Add";
btn4.onclick = function () {
  let li = document.createElement("li");
  li.innerText = input1.value;
  li.style.color = "red";
  ul1.appendChild(li);
  input1.value = "";
};
document.body.appendChild(btn4);

// tạo giao diện như hình mỗi khi bấm vào nút thì thêm một hàng mới vào bảng có 3 cột, mỗi cột chứa giá trị trong 3 ô input

let table = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");
td1.appendChild(input2);
td2.appendChild(input3);
td3.appendChild(input4);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
table.appendChild(tr);
document.body.appendChild(table);

let btn5 = document.createElement("button");
btn5.innerText = "Add";
btn5.onclick = function () {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let input2 = document.createElement("input");
  let input3 = document.createElement("input");
  let input4 = document.createElement("input");
  td1.appendChild(input2);
  td2.appendChild(input3);
  td3.appendChild(input4);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
  input2.value = "";
  input3.value = "";
  input4.value = "";
};
document.body.appendChild(btn5);

//tạo giao diện như hình là một bảng gồm có một nút nhấn ở cuối bảng mỗi khi nhấn vào nút thì thêm một hàng mới vào bảng,một nút nhấn ở cuối hàng mỗi khi nhấn vào nút thì xóa hàng đó khỏi bảng
let table1 = document.createElement("table");
let tr1 = document.createElement("tr");
let td11 = document.createElement("td");
let td22 = document.createElement("td");
let td33 = document.createElement("td");
let td44 = document.createElement("td");
let input11 = document.createElement("input");
let input21 = document.createElement("input");
let input31 = document.createElement("input");
let input41 = document.createElement("button");
input41.innerText = "Delete";
input41.onclick = function () {
  table1.removeChild(tr1);
};
td11.appendChild(input11);
td22.appendChild(input21);
td33.appendChild(input31);
td44.appendChild(input41);
tr1.appendChild(td11);
tr1.appendChild(td22);
tr1.appendChild(td33);
tr1.appendChild(td44);
table1.appendChild(tr1);
document.body.appendChild(table1);

let btn6 = document.createElement("button");
btn6.innerText = "Add";
btn6.onclick = function () {
  let tr1 = document.createElement("tr");
  let td11 = document.createElement("td");
  let td22 = document.createElement("td");
  let td33 = document.createElement("td");
  let td44 = document.createElement("td");
  let input11 = document.createElement("input");
  let input21 = document.createElement("input");
  let input31 = document.createElement("input");
  let input41 = document.createElement("button");
  input41.innerText = "Delete";
  input41.onclick = function () {
    table1.removeChild(tr1);
  };
  td11.appendChild(input11);
  td22.appendChild(input21);
  td33.appendChild(input31);
  td44.appendChild(input41);
  tr1.appendChild(td11);
  tr1.appendChild(td22);
  tr1.appendChild(td33);
  tr1.appendChild(td44);
  table1.appendChild(tr1);
  input11.value = "";
  input21.value = "";
  input31.value = "";
};
document.body.appendChild(btn6);

//Tạo giao diện như hình, mỗi khi bấm vào nút Edit thì tên người dùng tương ứng được hiển thị lên ô input, sau khi tiến hành chỉnh sửa và ấn nút Edit item thì danh sách được cập nhật.
let names1 = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];
let ul2 = document.createElement("ul");

function createListItem(name) {
  let li = document.createElement("li");
  li.innerText = name;
  let btn7 = document.createElement("button");
  btn7.innerText = "Edit";
  btn7.onclick = function () {
    input5.value = li.innerText;
    btn8.innerText = "Update item";
    editingLi = li;
  };
  li.appendChild(btn7);
  return li;
}

for (let i = 0; i < names1.length; i++) {
  ul2.appendChild(createListItem(names1[i]));
}
document.body.appendChild(ul2);

let input5 = document.createElement("input");
document.body.appendChild(input5);

let btn8 = document.createElement("button");
btn8.innerText = "Add item";
document.body.appendChild(btn8);

let editingLi = null;

btn8.onclick = function () {
  if (btn8.innerText === "Add item") {
    ul2.appendChild(createListItem(input5.value));
    input5.value = "";
    input5.focus();
  } else if (btn8.innerText === "Update item") {
    if (editingLi) {
      editingLi.firstChild.nodeValue = input5.value;
      btn8.innerText = "Add item";
      input5.value = "";
      input5.focus();
      editingLi = null;
    }
  }
};



//Tìm hiểu về innerText, textContent và innerHTML, Sự khác biệt giữa 3 thuộc tính này và lấy ví dụ cho sự khác biệt.
// innerText: Lấy nội dung của một phần tử, bỏ qua các thẻ HTML và các khoảng trắng thừa.
document.getElementById("example").innerText; // Output: "Hello World!"

// textContent: Lấy nội dung của một phần tử, bao gồm cả các thẻ HTML và các khoảng trắng thừa.
document.getElementById("example").textContent; // Output: " Hello World! "

// innerHTML: Lấy nội dung của một phần tử, bao gồm cả các thẻ HTML và các khoảng trắng thừa.
document.getElementById("example").innerHTML; // Output: " Hello <span>World</span>! "











