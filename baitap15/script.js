while  (true){
     
let choin = prompt("Bài tập ứng dụng\n" +
     "1. Tiếm phần tử trong mảng\n" +
     "2. Viết hoa chữ cái đầu\n" +
     "3. Thoát");

switch (choin){
    case"1":
         {
// Viết chương trình khai báo mảng gồm nhiều chuỗi bất kỳ, yêu cầu người dùng nhập vào 1 phần tử bất kỳ.
 // Xây dựng hàm có 2 tham số là 1 mảng và 1 phần tử, kết quả trả về là tất cả các phần tử trong mảng có chứa phần tử vừa nhập.
// Gọi hàm với mảng và phần tử đã nhập và in kết quả ra màn hình.

          {
               let arr = [];
               let n = parseInt(prompt("Nhập số lượng phần tử của mảng: "));
               for (let i = 0; i < n; i++) {
                    arr[i] = prompt("Nhập phần tử thứ " + (i + 1));
               }
               console.log(arr);

               let element = prompt("Nhập phần tử cần tìm: ");

               function timPhanTu(arr, element) {
                    for (let i = 0; i < arr.length; i++) {
                         if (arr[i] == element) {
                              return i;
                         }
                    }
                    return -1;
               }

               function soPhanTu(arr, element) {
                    let count = 0;
                    for (let i = 0; i < arr.length; i++) {
                         if (arr[i] == element) {
                              count++;
               console.log("Phần tử: " + element  + " ;xuất hiện ở vị trí index: " + i );
                              
                         }
                    }
                    return count;
               }

               console.log("Phần tử: " + element  + " ;xuất hiện đầu tiên ở vị trí index: " + timPhanTu(arr, element));
               console.log("Số lần xuất hiện của phần tử " + element + " trong mảng là: " + soPhanTu(arr, element));
          }
          break; 
     }

     case "2": {
// Viết chương trình khai báo chuỗi bất kỳ,
// xây dựng hàm có tham số là 1 chuỗi và kết quả trả về là chuỗi được truyền vào nhưng viết hoa tất cả các chữ cái đầu.Gọi hàm với chuỗi đã được khai báo và in kết quả ra màn hình.
// let str = prompt("Nhập chuỗi: ");


let str = prompt("Nhập chuỗi: ");
console.log("Chuỗi ban đầu: " + str);

// Hàm vietHoa chia chuỗi thành các từ, viết hoa chữ cái đầu tiên của mỗi từ, sau đó nối lại các từ thành một chuỗi duy nhất.
function vietHoa(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Câu lệnh console.log in kết quả vào bảng điều khiển.
console.log("Chuỗi sau khi viết hoa chữ cái đầu: " + vietHoa(str));
     }
     break;
     case "3": {
          console.log("Thoát");
          break;
     }
     default: {
          console.log("Không hợp lệ");
          break;
     }
}
     if (choin == "3") {
          break;
     }
}






