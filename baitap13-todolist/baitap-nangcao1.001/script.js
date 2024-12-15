//nâng cao
//1. quản lí danh sách sinh viên
//2. thêm sinh viên
//3. sửa  thông tin sinh viên
//4. xóa sinh viên
//5. hiển thị danh sách sinh viên
//6. tìm kiếm sinh viên
//7. sắp xếp sinh viên
//8. thoát chương trình

// 1 sinh viên : tên , mã sv , ngày sinh , sdt , email =>1 mảng có 5 phần tử
// 2. nhiều sinh viên



// let students = [
//                ["Nguyen Van A", "SV001", "01/01/2000", "0123456789", "XXXXXXXXXXXXXXXXXXXX"],
//                ["Nguyen Van B", "SV002", "02/02/2000", "0123456789", "XXXXXXXXXXXXXXXXXXXX"],
//                ["Nguyen Van C", "SV003", "03/03/2000", "0123456789", "XXXXXXXXXXXXXXXXXXXX"],
//                ["Nguyen Van D", "SV004", "04/04/2000", "0123456789", "XXXXXXXXXXXXXXXXXXXX"],
//                ["Nguyen Van E", "SV005", "05/05/2000", "0123456789", "XXXXXXXXXXXXXXXXXXXX"]
// ];


// let students = [];
// let student = [];
// while (true) {
// let choice = "Quản lí danh sách sinh viên\n" +
//      "1. Thêm sinh viên\n" +
//      "2. Sửa thông tin sinh viên\n" +
//      "3. Xóa sinh viên\n" +
//      "4. Hiển thị danh sách sinh viên\n" +
//      "5. Tìm kiếm sinh viên\n" +
//      "6. Sắp xếp sinh viên\n" +
//      "7. Thoát chương trình";

//     let input = prompt(choice);
//     switch (input) {
//         case "1":// them sinh vien
//             let name = prompt("Nhap vao ten sinh vien:");
//             let id = prompt("Nhap vao ma sinh vien:");
//             let dob = prompt("Nhap vao ngay sinh:");
//             let phone = prompt("Nhap vao so dien thoai:");
//             let email = prompt("Nhap vao email:");
//             student = [name, id, dob, phone, email];
//               students.push(student);
//               console.log("Danh sách sinh viên:");
//               for (let i = 0; i < students.length; i++) {
//                    if (students[i] === undefined) {
//                     continue;
//                    }
//                    for (let j = 0; j < student.length; j++) {

//                    flags = student[j].join(" - ");
//                 }
//                 console.log(`${i + 1}. ${students[i][0]} . ${flags}`); // Hien thi ten sinh vien theo thu tu cua mang students[i]);
//             }
//             break;
//         case "2":
//           //   editStudent();
//             break;
//          case "3":
//               //   deleteStudent();
//               let id_delete = prompt("Nhập mã sinh viên cần xóa:");
//               for (let i = 0; i < students.length; i++) {
//                    if (students[i] === undefined) {// undefined la mang rong
//                     continue;
//                 }
//                 if (students[i][1] == id_delete) {// neu mang students[i][1] == id_delete thi xoa mang students[i]
//                     students.splice(i, 1);
//                     break;
//                 }
//               }
//                 console.log(`Danh sách sinh viên sau khi xóa: ${id_delete}`);students[i];// in ra mang students
//             break;
            
              
              
//          case "4":
//               //   displayStudents();
//               console.log("Danh sách sinh viên:");
//               for (let i = 0; i < students.length; i++) {
//                    if (students[i] === undefined) {
//                     continue;
//                    }
//                    for (let j = 0; j < students[i].length; j++) {

//                    flags = student[i].join(" - ");
//                 }
//                 console.log(`${i + 1}. ${students[i][0]} . ${flags}`); // Hien thi ten sinh vien theo thu tu cua mang students[i]);
//             }
//             break;
//         case "5":
//           //   searchStudent();
//             break;
//         case "6":
//           //   sortStudents();
//             break;
//         case "7":
//           //   exitProgram();
//             break;
//         default:
//             console.log("Lựa chọn không hợp lệ.");
//      break;
//     }
// if (input == 7) {
// break;
// }
// }


// let students = [];
// let student = [];
// let styleName = ["Tên","Mã sinh viên","Ngày sinh","Số điện thoại","Email"];
// let text =["Nhập vào tên sinh viên:","Nhập vào mã sinh viên:","Nhập vào ngày sinh:","Nhập vào số điện thoại:","Nhập vào email:"];
// while (true) {
//     let choice = "Quản lí danh sách sinh viên\n" +
//         "1. Thêm sinh viên\n" +
//         "2. Sửa thông tin sinh viên\n" +
//         "3. Xóa sinh viên\n" +
//         "4. Hiển thị danh sách sinh viên\n" +
//         "5. Tìm kiếm sinh viên\n" +
//         "6. Sắp xếp sinh viên\n" +
//         "7. Thoát chương trình";

//     let input = prompt(choice);
//     switch (input) {
//         case "1": // Thêm sinh viên

//               while (true) {
//             for (let j=0; j<= students.length; j++) {
                
//             for (let i = 0; i < styleName.length; i++) {
//                 student[i] = prompt(text[i]);
//                 student.push(student[i]);
//             }
//             // let name = prompt("Nhập vào tên sinh viên:");
//             // let id = prompt("Nhập vào mã sinh viên:");
//             // let dob = prompt("Nhập vào ngày sinh:");
//             // let phone = prompt("Nhập vào số điện thoại:");
//             // let email = prompt("Nhập vào email:");
//             // student = [name, id, dob, phone, email];
//             students.push(student);
//                 console.log("Sinh viên đã được thêm thành công!");
            
//                 let addMore = prompt("Bạn có muốn thêm sinh viên không? (Y/N)").toUpperCase();
//                 if (addMore === "N") {
//                     break;
//                 }else if (addMore === "Y") {
//                     continue;
//                 }
//                  console.log("Danh sách sinh viên:");
//                 console.log(`${j + 1}. ${students[j].join(" - ")}`);
//             }
//             }
//             break;
            
    
               

//         case "2": // Sửa thông tin sinh viên
//             let id_edit = prompt("Nhập mã sinh viên cần sửa:");
//             for (let i = 0; i <= students.length; i++) {
//                 if (students[i][1] === id_edit) {
//                     students[i][0] = prompt("Nhập tên mới:", students[i][0]);
//                     students[i][2] = prompt("Nhập ngày sinh mới:", students[i][2]);
//                     students[i][3] = prompt("Nhập số điện thoại mới:", students[i][3]);
//                     students[i][4] = prompt("Nhập email mới:", students[i][4]);
//                     console.log("Thông tin sinh viên đã được cập nhật!");
//                     break;
//                 }
//             }
//             break;

//         case "3": // Xóa sinh viên
//             let id_delete = prompt("Nhập mã sinh viên cần xóa:");
//             for (let i = 0; i < students.length; i++) {
//                 if (students[i][1] === id_delete) {
//                     students.splice(i, 1);
//                     console.log("Sinh viên đã được xóa!");
//                     break;
//                 }
//             }
//             console.log("Danh sách sinh viên:");
//             for (let i = 0; i < students.length; i++) {
//                 console.log(`${i + 1}. ${students[i].join(" - ")}`);
//             }
//             break;

//         case "4": // Hiển thị danh sách sinh viên
//             console.log("Danh sách sinh viên:");
//             for (let i = 0; i < students.length; i++) {
//                 console.log(`${i + 1}. ${students[i].join(" - ")}`);
//             }
//             break;

//         case "5": // Tìm kiếm sinh viên
//             let search_term = prompt("Nhập tên hoặc mã sinh viên cần tìm:");
//             console.log("Kết quả tìm kiếm:");
//             for (let i = 0; i < students.length; i++) {
//                 if (students[i][0].includes(search_term) || students[i][1].includes(search_term)) {
//                     console.log(`${i + 1}. ${students[i].join(" - ")}`);
//                 }
//             }
//             console.log("Danh sách sinh viên:");
//             for (let i = 0; i < students.length; i++) {
//                 console.log(`${i + 1}. ${students[i].join(" - ")}`);
//             }
//             break;

//         case "6": // Sắp xếp sinh viên
//             students.sort((a, b) => a[0].localeCompare(b[0]));
//             console.log("Danh sách sinh viên đã được sắp xếp!");
//             break;

//         case "7": // Thoát chương trình
//             console.log("Thoát chương trình.");
//             break;

//         default:
//             console.log("Lựa chọn không hợp lệ.");
//             break;
//     }

//     if (input === "7") {
//         break;
//     }
// }

// let students = [];
// let styleName = [
//     "Tên",
//     "Mã sinh viên",
//     "Ngày sinh",
//     "Số điện thoại",
//     "Email",
//     "Diểm trung bình",
//     "môn toán",
//     "môn hóa",
//     "môn sinh",
//     "môn vật lý",
//     "môn đại số"
// ];
// let text = [
//     "Nhập vào tên sinh viên:",
//     "Nhập vào mã sinh viên:",
//     "Nhập vào ngày sinh:",
//     "Nhập vào số điện thoại:",
//     "Nhập vào email:",
//     "Nhập vào điểm trung bình:",
//     "Nhập vào điểm môn toán:",
//     "Nhập vào điểm môn hóa:",
//     "Nhập vào điểm môn sinh:",
//     "Nhập vào điểm môn vật lý:",
//     "Nhập vào điểm môn đại số:"
// ];
// students.push(styleName);
// while (true) {
//     let choice = prompt(
//         "Quản lí danh sách sinh viên\n" +
//         "1. Thêm sinh viên\n" +
//         "2. Sửa thông tin sinh viên\n" +
//         "3. Xóa sinh viên\n" +
//         "4. Hiển thị danh sách sinh viên\n" +
//         "5. Tìm kiếm sinh viên\n" +
//         "6. Sắp xếp sinh viên\n" +
//         "7. Thoát chương trình"
//     );

//     switch (choice) {
//         case "1": // Thêm sinh viên
//             while (true) {//nhiều sinh viên
//                 let student = [];
//                 for (let i = 0; i < styleName.length; i++) {//nhập nhieu sinh viên
//                     student.push(prompt(text[i]));//nhập nhieu sinh viên
//                 }
//                 students.push(student);//thêm sinh viên vào mảng students
//                 console.log("Sinh viên đã được thêm thành công!");

//             console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {//hiển thị danh sách sinh viên
//                 console.log(`${index + 1}. ${student.join(" - ")}`);//hiện thị danh sách sinh viên
//             });
//                 let choice;
//                 while (true) {
//                     choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//                     if (choice === "Y" || choice === "N") {
//                         break;
//                     } else {
//                         console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
//                     }
//                 }

//                 if (choice === "N") {
//                     console.log("Kết thúc chương trình.");
//                     break;
//                 }
//             }
//             break;

//         case "2": // Sửa thông tin sinh viên
//             while (true) {
                
//             let id_edit = prompt("Nhập mã sinh viên cần sửa:");//nhập mã sinh viên cần sửa
//             for (let i = 0; i < students.length; i++) {//sửa thống tin sinh viên
//                 if (students[i][1] === id_edit) {//gán giá trị mới cho sinh viên
//                     // students[i][0] = prompt(`Nhập ${styleName[0]} mới:`, students[i][0]);//gán giá trị mới cho sinh viên
//                     // students[i][2] = prompt(`Nhập ${styleName[2]} mới:`, students[i][2]);//gán giá trị mới cho sinh viên
//                     // students[i][3] = prompt(`Nhập ${styleName[3]} mới:`, students[i][3]);//gán giá trị mới cho sinh viên
//                     // students[i][4] = prompt(`Nhập ${styleName[4]} mới:`, students[i][4]);//gán giá trị mới cho sinh viên
//                     for (let j = 0; j < styleName.length; j++) {//gán giá trị mới cho sinh viên
//                         students[i][j] = prompt(`Nhập ${styleName[j]} mới:`, students[i][j]);//gán giá trị mới cho sinh viên
//                     }
//                     console.log("Thông tin sinh viên đã được cập nhật!");
//                     break;
//                 }
//             }
//                 console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {
//                 console.log(`${index + 1}. ${student.join(" - ")}`);
//             });
//                 // let addMore = prompt("Bạn có muốn sửa thêm thông tin sinh viên nào khác không? (Y/N)").toUpperCase();
//                 // if (addMore === "N") break;
//                 // else if (addMore === "Y") continue;//chọn Y thì tiếp tục nhập sinh viên
//                 // else console.log("Lựa chọn không hợp lệ.");//yêu cầu chọn Y hoặc N
//                 let choice;
//                 while (true) {
//                     choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//                     if (choice === "Y" || choice === "N") {
//                         break;
//                     } else {
//                         console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
//                     }
//                 }

//                 if (choice === "N") {
//                     console.log("Kết thúc chương trình.");
//                     break;
//                 }
//             }
//             break;

//         case "3": // Xóa sinh viên
//             while (true) {
//                 let id_delete = prompt("Nhập mã sinh viên cần xóa:");
//                 for (let i = 0; i < students.length; i++) {
//                     if (students[i][1] === id_delete) {
//                         students.splice(i, 1);
//                         console.log("Sinh viên đã được xóa!");
//                         break;
//                     }
//                 }
//                  console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {
//                 console.log(`${index + 1}. ${student.join(" - ")}`);
//             });
//                 let addMore = prompt("Bạn có muốn xóa thêm thông tin sinh viên nào khác không? (Y/N)").toUpperCase();
//                 if (addMore === "N") break;
//                 else if (addMore === "Y") continue;//chọn Y thì tiếp tục nhập sinh viên
//                 else console.log("Lựa chọn không hợp lệ.");//yêu cầu chọn Y hoặc N
//             }
//             break;

//         case "4": // Hiển thị danh sách sinh viên
//             console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {
//                 console.log(`${index + 1}. ${student.join(" - ")}`);
//             });
//             break;

//         case "5": // Tìm kiếm sinh viên
//             while (true) {
//                 let search_term = prompt("Nhập tên hoặc mã sinh viên cần tìm:");
//                 console.log("Kết quả tìm kiếm:");
//                 students.forEach((student, index) => {
//                     if (student[0].includes(search_term) || student[1].includes(search_term)) {
//                         console.log(`${index + 1}. ${student.join(" - ")}`);
//                     }
//                 });
//                 console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {
//                 console.log(`${index + 1}. ${student.join(" - ")}`);
//             });
//                 // let addMore = prompt("Bạn có muốn tìm kiếm thêm thông tin sinh viên nào khác không? (Y/N)").toUpperCase();
//                 // if (addMore === "N") break;
//                 // else if (addMore === "Y") continue;//chọn Y thì tiếp tục nhập sinh viên
//                 // else console.log("Lựa chọn không hợp lệ.");//yêu cầu chọn Y hoặc N
//                 let choice;
//                 while (true) {
//                     choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//                     if (choice === "Y" || choice === "N") {
//                         break;
//                     } else {
//                         console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
//                     }
//                 }

//                 if (choice === "N") {
//                     console.log("Kết thúc chương trình.");
//                     break;
//                 }
//             }
//             break;

//         case "6": // Sắp xếp sinh viên
//             students.sort((a, b) => a[0].localeCompare(b[0]));//sắp xếp sinh viên
//             console.log("Danh sách sinh viên đã được sắp xếp!");
//             console.log("Danh sách sinh viên:");
//             students.forEach((student, index) => {
//                 console.log(`${index + 1}. ${student.join(" - ")}`);
//             });
//             break;

//         case "7": // Thoát chương trình
//             console.log("Thoát chương trình.");
//             break;

//         default:
//             console.log("Lựa chọn không hợp lệ.");
//             break;
//     }

//     if (choice === "7") {
//         break;
//     }
// }

let students = [];
let styleName = [
    "Tên",
    "Mã sinh viên",
    "Ngày sinh",
    "Số điện thoại",
    "Email",
    "Điểm trung bình",
    "Môn toán",
    "Môn hóa",
    "Môn sinh",
    "Môn vật lý",
    "Môn đại số"
];
let text = [
    "Nhập vào tên sinh viên:",
    "Nhập vào mã sinh viên:",
    "Nhập vào ngày sinh:",
    "Nhập vào số điện thoại:",
    "Nhập vào email:",
    "Nhập vào điểm trung bình:",
    "Nhập vào điểm môn toán:",
    "Nhập vào điểm môn hóa:",
    "Nhập vào điểm môn sinh:",
    "Nhập vào điểm môn vật lý:",
    "Nhập vào điểm môn đại số:"
];
students.push(styleName);

while (true) {
    let choice = prompt(
        "Quản lí danh sách sinh viên\n" +
        "1. Thêm sinh viên\n" +
        "2. Sửa thông tin sinh viên\n" +
        "3. Xóa sinh viên\n" +
        "4. Hiển thị danh sách sinh viên\n" +
        "5. Tìm kiếm sinh viên\n" +
        "6. Sắp xếp sinh viên\n" +
        "7. Thoát chương trình"
    );

    switch (choice) {
        case "1": // Thêm sinh viên
            while (true) {
                let student = [];
                for (let i = 0; i < styleName.length; i++) {
                    student.push(prompt(text[i]));
                }
                students.push(student);
                console.log("Sinh viên đã được thêm thành công!");

                console.log("Danh sách sinh viên:");
                students.forEach((student, index) => {
                    console.log(`${index /*+ 1*/}. ${student.join(" - ")}`);
                });

                // let continueChoice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
                // if (continueChoice === "N") {
                //     console.log("Kết thúc chương trình nhập sinh viên.");
                //     break;
                // }
                let choice;
                while (true) {
                    choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
                    if (choice === "Y" || choice === "N") {
                        break;
                    } else {
                        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
                    }
                }

                if (choice === "N") {
                    console.log("Kết thúc chương trình.");
                    break;
                }
            }
            break;

        case "2": // Sửa thông tin sinh viên
            while (true) {
                let id_edit = prompt("Nhập mã sinh viên cần sửa:");
                for (let i = 0; i < students.length; i++) {
                    if (students[i][1] === id_edit) {
                        for (let j = 0; j < styleName.length; j++) {
                            students[i][j] = prompt(`Nhập ${styleName[j]} mới:`, students[i][j]);
                        }
                        console.log("Thông tin sinh viên đã được cập nhật!");
                        break;
                    }
                }

                console.log("Danh sách sinh viên:");
                students.forEach((student, index) => {
                    console.log(`${index + 1}. ${student.join(" - ")}`);
                });

                // let continueChoice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
                // if (continueChoice === "N") {
                //     console.log("Kết thúc chương trình.");
                //     break;
                // }
                let choice;
                while (true) {
                    choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
                    if (choice === "Y" || choice === "N") {
                        break;
                    } else {
                        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
                    }
                }

                if (choice === "N") {
                    console.log("Kết thúc chương trình.");
                    break;
                }
            }
            break;

        case "3": // Xóa sinh viên
            while (true) {
                let id_delete = prompt("Nhập mã sinh viên cần xóa:");
                for (let i = 0; i < students.length; i++) {
                    if (students[i][1] === id_delete) {
                        students.splice(i, 1);
                        console.log("Sinh viên đã được xóa!");
                        break;
                    }
                }

                console.log("Danh sách sinh viên:");
                students.forEach((student, index) => {
                    console.log(`${index + 1}. ${student.join(" - ")}`);
                });

                // let continueChoice = prompt("Bạn có muốn xóa thêm sinh viên nào khác không? (Y/N)").toUpperCase();
                // if (continueChoice === "N") {
                //     break;
                // }
                let choice;
                while (true) {
                    choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
                    if (choice === "Y" || choice === "N") {
                        break;
                    } else {
                        console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
                    }
                }

                if (choice === "N") {
                    console.log("Kết thúc chương trình.");
                    break;
                }
            }
            break;

        case "4": // Hiển thị danh sách sinh viên
            console.log("Danh sách sinh viên:");
            students.forEach((student, index) => {
                console.log(`${index /*+ 1*/}. ${student.join(" - ")}`);
            });
            break;

        case "5": // Tìm kiếm sinh viên
            while (true) {
                let search_term = prompt("Nhập tên hoặc mã sinh viên cần tìm:");
                console.log("Kết quả tìm kiếm:");
                students.forEach((student, index) => {
                    if (student[0].includes(search_term) || student[1].includes(search_term)) {
                        console.log(`${index + 1}. ${student.join(" - ")}`);
                    }
                });

                // let continueChoice = prompt("Bạn có muốn tìm kiếm thêm sinh viên nào khác không? (Y/N)").toUpperCase();
                // if (continueChoice === "N") {
                //     break;
                // }
                let choice;
                while (true) {
                    choice = prompt("Nhap lai chuc nang (Y/N)").toUpperCase();
                    if (choice === "Y" || choice === "N") {
                        break;
                    } else {
                        console.log("Lieu chuong trinh khong hop le. Vui long nhap lai.");
                    }
                }
                if (choice === "N") {
                    console.log("Ket thuc chuong trinh.");
                    break;
                }
            }
            break;

        case "6": // Sắp xếp sinh viên
            
                students.sort((a, b) => a[0].localeCompare(b[0]));
                console.log("Danh sách sinh viên đã được sắp xếp!");
                console.log("Danh sách sinh viên:");
                students.forEach((student, index) => {
                    console.log(`${index+ 1}. ${student.join(" - ")}`);
                });
            
            break;

        case "7": // Thoát chương trình
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }

    if (choice === "7") {
        break;
    }
}








