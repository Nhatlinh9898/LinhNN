let students = [
  { id: "SV001", name: "Nguyễn Văn A", phone: "0893846534", sex: true },
  { id: "SV002", name: "Nguyễn Văn B", phone: "0893435535", sex: false },
  { id: "SV003", name: "Nguyễn Văn C", phone: "0893845636", sex: true },
];

let menu = `
-----------------menu------------------
1. Hiển thị danh sách sinh viên
2. Thêm sinh viên
3. Xóa sinh viên
4. Sửa sinh viên
5. Thoát
----------------------------------------
Nhập lựa chọn của bạn: `;
// Hàm hình thị danh sách sinh viên
function showStudent() {
  let str = "";
  for (let i = 0; i < students.length; i++) {
    str += `${i + 1}. id: ${students[i].id} -- name: ${
      students[i].name
    } -- phone: ${students[i].phone} -- sex: ${
      students[i].sex ? "nam" : "nữ"
    }\n`;
  }
  alert(str);
}
// Hàm thêm sinh viên
function addStudent() {
  let id = prompt("Nhập id sinh viên: ");
  let name = prompt("Nhập tên sinh viên: ");
  let phone = prompt("Nhập số điện thoại: ");
  let sex = confirm("Nhập giới tính: Nam (OK) / Nữ (Cancel)");
  let student = { id, name, phone, sex };
  students.push(student);
}
// Hàm xóa sinh viên
function deleteStudent() {
  let id = prompt("Nhập id sinh viên cần xóa: ");
  let index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    alert(`Xóa thành công sinh viên ${id}`);
  } else {
    alert("Xóa thất bại");
  }
}
// Hàm sửa sinh viên
function editStudent() {
  let id = prompt("Nhập id sinh viên cần sửa: ");
  let student = students.find((student) => student.id === id);
  if (student) {
    student.name = prompt("Nhập tên sinh viên: ", student.name);
    student.phone = prompt("Nhập số điện thoại: ", student.phone);
    student.sex = confirm("Nhập giới tính: Nam (OK) / Nữ (Cancel)");
  } else {
    alert("Không tìm thấy sinh viên");
  }
}
// Hàm chiều quản lí sinh viên
while (true) {
  let choice = prompt(menu);
  switch (choice) {
    case "1":
      showStudent();
      break;
    case "2":
      addStudent();
      break;
    case "3":
      deleteStudent();
      break;
    case "4":
      editStudent();
      break;
    case "5":
      alert("Thoát chương trình");
      break;
    default:
      alert("Lựa chọn không hợp lệ");
      break;
  }
  if (choice === "5") {
    break;
  }
}
