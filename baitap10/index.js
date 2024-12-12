// // Sử dụng cấu trúc if…else, viết chương trình yêu cầu người dùng nhập vào câu trả lời cho câu hỏi “Bạn sinh năm bao nhiêu”.
// // Nếu câu trả lời nhập vào là một số thì hiển thị số tuổi của người dùng, nếu không thì hiển thị giá trị không hợp lệ.

// let age = prompt("Nhập tuổi của bạn");
// if (age) {
//      age = Number(age);
//      alert("Tuổi của bạn là: " + age);
// } else {
//      alert("Tuổi của bạn không hợp lệ");
// }

// // Viết chương trình yêu cầu người dùng nhập vào một số bất kỳ. Tiến hành kiểm tra số nhập vào và in ra theo 3 trường hợp: số chẵn, số lẻ và không hợp lệ.

// let number = prompt("Nhập một số bất kỳ");
// if (number) {
//      number = Number(number);
//      if (number % 2 == 0) {
//           alert("Số bạn nhập là số chẵn");
//      } else {
//           alert("Số bạn nhập là số lẻ");
//      }
// } else {
//      alert("Số bạn nhập không hợp lệ");
// }



// // Viết chương trình yêu cầu nhập vào một số và hiển thị ngày trong tuần tương ứng với số vừa nhập.
// // Khi người dùng nhập 2 thì hiển thị monday, 3 thì hiển thị tuesday,... 8 thì hiển thị sunday, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let day = prompt("Nhập một số từ 1 đến 7");
// if (day) {
//      day = Number(day);
//      switch (day) {
//           case 1:
//                alert("Monday");
//                break;
//           case 2:
//                alert("Tuesday");
//                break;
//           case 3:
//                alert("Wednesday");
//                break;
//           case 4:
//                alert("Thursday");
//                break;
//           case 5:
//                alert("Friday");
//                break;
//           case 6:
//                alert("Saturday");
//                break;
//           case 7:
//                alert("Sunday");
//                break;
//           default:  
//                alert("Số bạn nhập không hợp lệ");
//                break;
//      }
// }


// // Viết chương trình yêu cầu nhập vào một số, sử dụng toán tử 3 ngôi để hiển thị xem số đó là số âm hay số dương.
// // Khi người dùng nhập 0 thì hiển thị khóa, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let number1 = prompt("Nhập một số bất kỳ");
// if (number1) {
//      number1 = Number(number1);
//      if (number1 > 0) {
//           alert("Số bạn nhập là số dương");
//      } else if (number1 < 0) {
//           alert("Số bạn nhập là số âm");
//      } else {
//           alert("Số bạn nhập không hợp lệ");
//      }
// }

// // Viết chương trình yêu cầu nhập vào một số, sử dụng toán tử 3 ngôi để hiển thị xem số đó là số âm hay số dương.

// let a = prompt("Nhập một số bất kỳ");
// if (a) {
//      a = Number(a);
//      if (a > 0) {
//           alert("Số bạn nhập là số dương");
//      } else if (a < 0) {
//           alert("Số bạn nhập là số âm");
//      } else {
//           alert("Số bạn nhập không hợp lệ");
//      }
// }



// // Viết chương trình yêu cầu nhập vào một số, sử dụng toán tử ? để hiển thị xem số đó là số âm hay số dương.
// // Khi người dùng nhập 0 thì hiển thị khóa, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let b = prompt("Nhập một số bất kỳ b");
// if (b) {
//      b = Number(b);
//      (b > 0) ? alert("Số bạn nhập là số dương") : (b < 0) ? alert("Số bạn nhập là số âm") : alert("Số bạn nhập không hợp lệ");
// }



// // Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kỳ, in ra các số nguyên dương là số chẵn  từ 1 đến số vừa nhập lên màn hình console.
// // Khi người dùng nhập 0 thì hiển thị khóa, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let c = prompt("Nhập một số c");
// if (c) {
//      c = Number(c);
//      for (let i = 1; i <= c; i++) {
//           if (i % 2 == 0) {
//                console.log(i);
//           }
//      }
// }


// // Viết chương trình yêu cầu người dùng nhập vào một số nguyên dương bất kỳ, tính toán giai thừa của số vừa nhập và in ra màn hình console.
// // Khi người dùng nhập 0 thì hiển thị khóa, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let d = prompt("Nhập một số d");
// if (d) {
//      d = Number(d);
//      for (let i = 1; i <= d; i++) {
//           // i = factorial(i);
//           i = i * i;
//           console.log(i); 
          
//      } 
//      }





// // tính giai thừa cơ bản của 1 số nguyên dương bất kỳ (vd: 5! = 1 * 2 * 3 * 4 * 5)

// let e = prompt("Nhập một số e");
// if (e) {
//      e = Number(e);
//      for (let i = 1; i <= e; i++) {
//           i = i * i;
//           console.log(i); 
          
//      } 
//      }

// // Viết chương trình hiển thị các số từ 1 đến 100 lên màn hình console.
// // Nếu số đó chia hết cho 3 thì hiển thị là “Fizz”, nếu số đó chia hết cho 5 thì hiển thị là “Buzz”.
// // Nếu số đó chia hết cho 3 và 5 thì hiển thị “FizzBuzz”.

// for (let i = 1; i <= 100; i++) {
//      if (i % 3 == 0 && i % 5 == 0) {
//           console.log("FizzBuzz");
//      } else if (i % 3 == 0) {
//           console.log("Fizz");
//      } else if (i % 5 == 0) {
//           console.log("Buzz");
//      } else {
//           console.log(i);
//      }
// }

// // Viết chương trình yêu cầu nhập vào hai số nguyên dương a và b, In ra các số chia hết cho b trong khoảng từ 1 đến a lên màn hình console.
// // Khi người dùng nhập 0 thì hiển thị khóa, bất kỳ giá trị nào khác thì hiển thị không hợp lệ.

// let f = prompt("Nhập một số f");
// let g = prompt("Nhập một số g");
// if (f && g) {
//      f = Number(f);
//      g = Number(g);
//      for (let i = 1; i <= f; i++) {
//           if (i % g == 0) {
//                console.log(i);
//           }
//      }
// }    

// // Hãy sử dụng các thẻ <p>, <hr>, <h1-6>, <br> để tạo một đoạn văn bản như sau:

// //     <p>
// //     <hr>
// //     <h1>
// //     <h2>
// //     <h3>
// //     <h4>
// //     <h5>
// //     <h6>
// //     <br>    
// //     <hr>

// let h = document.getElementById("h");
// let hr = document.getElementById("hr");
// let p = document.getElementById("p");
// let h1 = document.getElementById("h1");
// let h2 = document.getElementById("h2");
// let h3 = document.getElementById("h3");
// let h4 = document.getElementById("h4"); 
// let h5 = document.getElementById("h5");


// // Hãy sử dụng các thẻ danh sách để tạo một danh sách

// // let list = document.getElementById("list");
// // let li = document.createElement("li");
// // li.innerHTML = "Item 1";
// // list.appendChild(li);

// // let list2 = document.getElementById("list2");
// // let li2 = document.createElement("li");
// // li2.innerHTML = "Item 2";
// // list2.appendChild(li2);

// // Hãy sử dụng các semantic elements để tạo giao diện web

// let header = document.getElementById("header");
// let nav = document.getElementById("nav");
// let section = document.getElementById("section");
// let article = document.getElementById("article");
// let aside = document.getElementById("aside");
// let main = document.getElementById("main");
// let div = document.getElementById("div");
// let span = document.getElementById("span");
// let ul = document.getElementById("ul");
// let ol = document.getElementById("ol");
// let li3 = document.getElementById("li3");
// let table = document.getElementById("table");
// let tr = document.getElementById("tr");
// let th = document.getElementById("th");
// let td = document.getElementById("td");
// let form = document.getElementById("form");
// let label = document.getElementById("label");
// let input = document.getElementById("input");
// let button = document.getElementById("button");
// let select = document.getElementById("select");
// let option = document.getElementById("option");
// let textarea = document.getElementById("textarea");
// let img = document.getElementById("img");
// let audio = document.getElementById("audio");
// let video = document.getElementById("video");
// let iframe = document.getElementById("iframe");
// let embed = document.getElementById("embed");
// let object = document.getElementById("object");
// let param = document.getElementById("param");
// let source = document.getElementById("source");
// let style = document.getElementById("style");
// let link = document.getElementById("link");
// let meta = document.getElementById("meta");
// let script = document.getElementById("script");
// let title = document.getElementById("title");
// let h6 = document.getElementById("h6");
// let p2 = document.getElementById("p2");
// let hr2 = document.getElementById("hr2");
// let h7 = document.getElementById("h7");
// let h8 = document.getElementById("h8");
// let h9 = document.getElementById("h9");
// let h10 = document.getElementById("h10");
// let h11 = document.getElementById("h11");
// let h12 = document.getElementById("h12");
// let h13 = document.getElementById("h13");
// let h14 = document.getElementById("h14");
// let div2 = document.getElementById("div2");
// let span2 = document.getElementById("span2");
// let ul2 = document.getElementById("ul2");
// let ol2 = document.getElementById("ol2");
// let li4 = document.getElementById("li4");
// let table2 = document.getElementById("table2");
// let tr2 = document.getElementById("tr2");
// let th2 = document.getElementById("th2");
// let td2 = document.getElementById("td2");
// let form2 = document.getElementById("form2");
// let label2 = document.getElementById("label2");
// let input2 = document.getElementById("input2");
// let button2 = document.getElementById("button2");
// let select2 = document.getElementById("select2");
// let option2 = document.getElementById("option2");
// let textarea2 = document.getElementById("textarea2");
// let img2 = document.getElementById("img2");
// let audio2 = document.getElementById("audio2");
// let video2 = document.getElementById("video2");
// let iframe2 = document.getElementById("iframe2");
// let embed2 = document.getElementById("embed2");
// let object2 = document.getElementById("object2");
// let param2 = document.getElementById("param2");
// let source2 = document.getElementById("source2");
// let style2 = document.getElementById("style2");
// let link2 = document.getElementById("link2");
// let meta2 = document.getElementById("meta2");
// let script2 = document.getElementById("script2"); 
// let title2 = document.getElementById("title2");
// let h15 = document.getElementById("h15");
// let p3 = document.getElementById("p3");
// let hr3 = document.getElementById("hr3");
// let footer = document.getElementById("footer");
// let div3 = document.getElementById("div3");
// let span3 = document.getElementById("span3");
// let ul3 = document.getElementById("ul3");
// let ol3 = document.getElementById("ol3");
// let li5 = document.getElementById("li5");
// let table3 = document.getElementById("table3");
// let tr3 = document.getElementById("tr3");
// let th3 = document.getElementById("th3");
// let td3 = document.getElementById("td3");
// let form3 = document.getElementById("form3");
// let label3 = document.getElementById("label3");
// let input3 = document.getElementById("input3");
// let button3 = document.getElementById("button3");
// let select3 = document.getElementById("select3");
// let option3 = document.getElementById("option3");
// let textarea3 = document.getElementById("textarea3");
// let img3 = document.getElementById("img3");
// let audio3 = document.getElementById("audio3");
// let video3 = document.getElementById("video3");
// let iframe3 = document.getElementById("iframe3");
// let embed3 = document.getElementById("embed3");
// let object3 = document.getElementById("object3");
// let param3 = document.getElementById("param3");
// let source3 = document.getElementById("source3");
// let style3 = document.getElementById("style3");
// let link3 = document.getElementById("link3");
// let meta3 = document.getElementById("meta3");
// let script3 = document.getElementById("script3"); 
// let title3 = document.getElementById("title3");



// Hãy tạo một thời khoá biểu đơn giản
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let time = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
console.log(time);

// Hãy cập nhật thời khóa biểu ở phần trước để được kết quả
let date2 = new Date();
let day2 = date2.getDate();
let month2 = date2.getMonth() + 1;
let year2 = date2.getFullYear();
let hour2 = date2.getHours();
let minute2 = date2.getMinutes();
let second2 = date2.getSeconds();
let time2 = day2 + "/" + month2 + "/" + year2 + " " + hour2 + ":" + minute2 + ":" + second2;
console.log(time2);

// Hãy tạo hình một bàn cờ vua
let board = document.getElementById("board");
for (let i = 1; i <= 9; i++) {
     let square = document.createElement("div");
     square.classList.add("square");
     board.appendChild(square);
}
let square = document.getElementsByClassName("square");
for (let i = 0; i < square.length; i++) {
     square[i].style.width = "100px";
     square[i].style.height = "100px";
     square[i].style.backgroundColor = "red";
     square[i].style.display = "inline-block";
     square[i].style.margin = "10px";
     square[i].style.border = "1px solid black";
     square[i].style.cursor = "pointer";
}


// Hãy tạo lịch của một tháng,1 năm
let month3 = document.getElementById("month3");
let year3 = document.getElementById("year3");
let calendar = document.getElementById("calendar");
let date3 = new Date(year3.value, month3.value, 1);
let days = ["Chuật", "Thu hai", "Thu ba", "Thu tử", "Thu làm", "Thu náy", "Thu sách"];
let monthName = ["Tháng mô", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
let day3 = date3.getDay();
let dayCount = new Date(year3.value, month3.value + 1, 0).getDate();
for (let i = 0; i < days.length; i++) {
     let day = document.createElement("div");
     day.classList.add("day");
     day.innerHTML = days[i];
     calendar.appendChild(day);
}
for (let i = 1; i <= dayCount; i++) {
     let day = document.createElement("div");
     day.classList.add("day");
     day.innerHTML = i;
     calendar.appendChild(day);
}

// Hãy sử dụng các thẻ table, tr, td để tạo một danh sách công ty
let table4 = document.getElementById("table4");
let tr4 = document.createElement("tr");
let td4 = document.createElement("td");
let td5 = document.createElement("td");
let td6 = document.createElement("td");
let td7 = document.createElement("td");
let td8 = document.createElement("td");
let td9 = document.createElement("td");
let td10 = document.createElement("td");
tr4.appendChild(td4);
tr4.appendChild(td5);
tr4.appendChild(td6);
tr4.appendChild(td7);
tr4.appendChild(td8);
tr4.appendChild(td9);
tr4.appendChild(td10);
table4.appendChild(tr4);
td4.innerHTML = "Công ty 1";
td5.innerHTML = "Công ty 2";
td6.innerHTML = "Công ty 3";
td7.innerHTML = "Công ty 4";
td8.innerHTML = "Công ty 5";
td9.innerHTML = "Công ty 6";
td10.innerHTML = "Công ty 7";


// Hãy sử dụng các thẻ table, tr, td để tạo một image gallery 
let table5 = document.getElementById("table5");
let tr5 = document.createElement("tr");
let td11 = document.createElement("td");
let td12 = document.createElement("td");
let td13 = document.createElement("td");
let td14 = document.createElement("td");



// Hãy tạo một form với các trường như sau:
// TextBox để nhập “Họ và tên” đặt tên là: yourname .

// TextBox để nhập “Email” đặt tên là: email .

// Các CheckBox sở thích đặt cùng tên là :

// Nút “Gửi thông tin” là nút Submit Form .

// Nút “Nhập lại” là nút Reset Form .

// Chú ý căn chỉnh, màu sắc và font chữ .
let form4 = document.getElementById("form4");
let yourname = document.getElementById("yourname");
let email = document.getElementById("email");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");


// Tạo form survey khách hàng 
let form5 = document.getElementById("form5");
let name5 = document.getElementById("name5");
let email5 = document.getElementById("email5");
let phone5 = document.getElementById("phone5");
let address5 = document.getElementById("address5");
let gender5 = document.getElementById("gender5");
let button5 = document.getElementById("button5");

// Hãy tạo một trang web đơn giản với nội dung bao gồm 1 tiêu đề và 1 đoạn văn
let form6 = document.getElementById("form6");
let title6 = document.getElementById("title6");
let content6 = document.getElementById("content6");
let button6 = document.getElementById("button6");

// Hãy tạo một trang web đơn giản với nội dung bao gồm 1 tiêu đề và 1 đoạn văn
// Phần 1: Hãy thay đổi màu sắc của văn bản sử dụng inline-style

// Phần 2: Hãy thay đổi màu sắc của văn bản sử dụng internal-style

// Phần 3: Hãy thay đổi màu sắc của văn bản sử dụng external-style
let form7 = document.getElementById("form7");
let title7 = document.getElementById("title7");
let content7 = document.getElementById("content7");
let button7 = document.getElementById("button7");

// Trong phần này, chúng ta sẽ luyện tập việc nhúng css, sử dụng các thuộc tính CSS để trang trí cho một trang web đọc truyện đơn giản. Bố cục của trang web có thể tuỳ ý thiết kế.
// Bước 1: Tạo các mục lục truyện

// Bước 2: Tạo nội dung ứng với từng mục lục truyện

// Bước 3: Tạo liên kết từng mục lục. Mỗi lần click vào một mục lục chuyển đến nội dung tương ứng.

// Bước 4: Tạo ảnh truyện đặt ở đầu trang.

// Bước 5: Sử dụng thẻ <h5> cho từng mục lục truyện
let form8 = document.getElementById("form8");
let title8 = document.getElementById("title8");
let content8 = document.getElementById("content8");
let button8 = document.getElementById("button8");
let chapter1 = document.getElementById("chapter1");
let chapter2 = document.getElementById("chapter2");
let chapter3 = document.getElementById("chapter3");
let chapter4 = document.getElementById("chapter4");
let chapter5 = document.getElementById("chapter5");
let chapter6 = document.getElementById("chapter6");
let chapter7 = document.getElementById("chapter7");
let chapter8 = document.getElementById("chapter8");
let chapter9 = document.getElementById("chapter9");
let chapter10 = document.getElementById("chapter10");
let chapter11 = document.getElementById("chapter11");
let chapter12 = document.getElementById("chapter12");
let chapter13 = document.getElementById("chapter13");


// Trong phần này, chúng ta sẽ luyện tập việc nhúng css, sử dụng các thuộc tính CSS để trang trí cho một form thanh toán
let form9 = document.getElementById("form9");
let title9 = document.getElementById("title9");
let content9 = document.getElementById("content9");
let button9 = document.getElementById("button9");

// Mỗi khi di chuột lên phần tử nào trong danh sách chữ sẽ đổi thành màu đỏ
let form10 = document.getElementById("form10");
let title10 = document.getElementById("title10");
let content10 = document.getElementById("content10");
let button10 = document.getElementById("button10");

// Tạo hiệu ứng khi di chuột lên hình ảnh
let form11 = document.getElementById("form11");
let title11 = document.getElementById("title11");
let content11 = document.getElementById("content11");
let button11 = document.getElementById("button11");


// Sử dụng thuộc tính box-shadow để tạo giao diện theo
let form12 = document.getElementById("form12");
let title12 = document.getElementById("title12");
let content12 = document.getElementById("content12");
let button12 = document.getElementById("button12");


// Áp dụng các kiến thức đã học về CSS layout, hãy xây dựng giao diện trên theo các yêu cầu :

// Chiều dài và chiều cao của các khối là: 150 x 150 .

// 3 khối hình trên phải căn ra chính giữa màn hình máy tính .

// Nội dung bên trong các khối phải căn ra chính giữa .

// Màu sắc có thể tùy biến .

// Font chữ phải là họ chữ không có chân (Tìm hiểu thêm) .

// Khoảng cách giữa các phần tử là 10px 
let form13 = document.getElementById("form13");
let title13 = document.getElementById("title13");
let content13 = document.getElementById("content13");
let button13 = document.getElementById("button13");


// Áp dụng các kiến thức đã học về jS layout, hãy xây dựng giao diện trên theo các yêu cầu :

// Tạo 3 khối hình trên trên trang.

// Chiều dài và chiều cao của các khối là: 150 x 150 .
let form15 = document.getElementById("form15");
let title15 = document.getElementById("title15");
let content15 = document.getElementById("content15");
let button15 = document.getElementById("button15");


// Hình trên phải căn ra chính giữa màn hình máy tính .
let form16 = document.getElementById("form16");
let title16 = document.getElementById("title16");
let content16 = document.getElementById("content16");
let button16 = document.getElementById("button16");

// Chiều dài và chiều cao của các khối là: 150 x 150 .
let form17 = document.getElementById("form17");
let title17 = document.getElementById("title17");
let content17 = document.getElementById("content17");
let button17 = document.getElementById("button17");


// 3 khối hình trên phải căn ra chính giữa màn hình máy tính .
let form18 = document.getElementById("form18");
let title18 = document.getElementById("title18");
let content18 = document.getElementById("content18");
let button18 = document.getElementById("button18");


// Nội dung bên trong các khối phải căn ra chính giữa .
let form19 = document.getElementById("form19");
let title19 = document.getElementById("title19");
let content19 = document.getElementById("content19");
let button19 = document.getElementById("button19");

// Màu sắc có thể tùy biến .
let form20 = document.getElementById("form20");
let title20 = document.getElementById("title20");
let content20 = document.getElementById("content20");
let button20 = document.getElementById("button20");

// Font chữ phải là họ chữ không có chân (Tìm hiểu thêm) .
let form21 = document.getElementById("form21");
let title21 = document.getElementById("title21");
let content21 = document.getElementById("content21");
let button21 = document.getElementById("button21");

// Khoảng cách giữa các phần tử là 10px 
let form14 = document.getElementById("form14");
let title14 = document.getElementById("title14");
let content14 = document.getElementById("content14");
let button14 = document.getElementById("button14");














