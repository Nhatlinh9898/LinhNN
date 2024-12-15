// Viết chương trình khai báo mảng có sẵn gồm nhiều phần tử, yêu cầu người dùng nhập vào giá trị bất kỳ và tìm kiếm trong mảng. 
// In ra vị trí của phần tử trong mảng nếu tìm thấy, nếu không thì in “phần tử không tồn tại” lên màn hình console.

// while (true) {
     
//      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//      let value = Number(prompt("Nhập vào giá trị bất kỳ:"));
//      let index = arr.indexOf(value);
//      if (index !== -1) { // Nếu tìm thấy phần tử trong mảng
//           console.log(`Phần tử ${value} được tìm thấy tại vị trí ${index}`);
//      } else {
//           console.log(`phần tử ${value} không tồn tại trong mảng arr`);
     
//      }
//      while (true) {
//           let choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//           if (choice === "Y" || choice === "N") {
//                break;
//           }
//           else {
//                console.log("Lựa chọn không hợp lệ. Kết thúc chương trình.");
//                continue;
//           }
//      }
//      if (choice === "N") break;
//           console.log("Kết thúc chương trình.");
//      if (choice === "Y")      continue ;
// }
// while (true) {
//     let arr = [1, 2, 3, 4, 5, "aa",66, 7, 8, 9, 10,true,false];
//     let value = Number(prompt("Nhập vào giá trị bất kỳ:"));
//     let index = arr.indexOf(value);

//     if (index !== -1) {
//         console.log(`Phần tử ${value} được tìm thấy tại vị trí ${index}`);
//     } else {
//         console.log(`Phần tử ${"value"} không tồn tại trong mảng arr`);
//     }

//     let choice;
//     while (true) {
//         choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//         if (choice === "Y" || choice === "N") {
//             break;
//         } else {
//             console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
//         }
//     }

//     if (choice === "N") {
//         console.log("Kết thúc chương trình.");
//         break;
//     }
// }
// let arr = [1, 2, 3, 4, 5, "aa", 66, 7, 8, 9, 10, true, false];

// for (;;) {
//     let value = (prompt("Nhập vào giá trị bất kỳ:"));
//     let index = arr.indexOf(value);
//      if (value === "true" || value === "false") {
//         value = value === "true" ? true : false;
//      }
//      if (value === "null") {
//         value = null;
//      }
//      if (value === "undefined") {
//         value = undefined;
//      }
//      if (value===number || value===string) {
//         value = Number(value);
//      }
//     if (index !== -1 ) {
//         console.log(`Phần tử ${value} được tìm thấy tại vị trí ${index}`);
//     } else {
//         console.log(`Phần tử ${value} không tồn tại trong mảng arr`);
//     }

//     let choice;
//     while (true) {
//         choice = prompt("Bạn có muốn tiếp tục không? (Y/N)").toUpperCase();
//         if (choice === "Y" || choice === "N") {
//             break;
//         } else {
//             console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
//         }
//     }

//     if (choice === "N") {
//         console.log("Kết thúc chương trình.");
//         break;
//     }
// }
let arr = [1, 2, 3, 4, 5, "aa", 66, 7, 8, 9, 10, true, false];

for (;;) {
    let value = prompt("Nhập vào giá trị bất kỳ:");

    // Convert the input value to the appropriate type
    if (value === "true" || value === "false") {
        value = value === "true";
    } else if (value === "null") {
        value = null;
    } else if (value === "undefined") {
        value = undefined;
    } else if (!isNaN(value)) { //kiểm tra xem giá trị nhập vào có phải là số hay chuỗi 
        value = Number(value);
    }

    let index = arr.indexOf(value);

    if (index !== -1) {//kieểm tra xem phần tử có tìm thấy trong mảng hay khong, điều kiện này dùng để xác định vị trí của phần tử trong mảng arr và đảm bảo phần tử đó được in ra theo  vị trí trong mảng.
        console.log(`Phần tử ${value} được tìm thấy tại vị trí ${index}`);
    } else {
        console.log(`Phần tử ${value} không tồn tại trong mảng arr`);
    }
     //tạo thêm vòng lập để thực hiện yêu cầu có tiếp tục hay khong.chọn Y để tiếp tục, N để kết thúc chương trình, chọn giá trị không phải Y hoặc N thi là lựa chọn không hợp lệ,yêu cầu nhập lại
     
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
