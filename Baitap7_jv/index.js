

{
//Nhúng javascript vào file html bằng 2 cách khác nhau để hiển thị một lời chào khi người dùng vào trang web.
//Cách 1
document.write("Hello World");
//Cách 2
window.alert("Hello World");
}
{
// Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra màn hình console .

// Biến i kiểu số nguyên, có giá trị là 10

// Biến f kiểu số thực, có giá trị là 20.5

// Biến b kiểu logic, có giá trị là true

// Biến s kiểu chuỗi, có giá trị là "Hà Nội".

let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";
console.log("Biến i kiểu số nguyên, có giá trị là 10:" , i);
console.log("Biến f kiểu số thực, có giá trị là 20.5:" , f);
console.log("Biến b kiểu logic, có giá trị là true:" , b?"true":"false");
console.log("Biến s kiểu chuỗi, có giá trị là \"Hà Nội\":" , s);
document.getElementById("demo1").innerHTML="Biến i kiểu số nguyên, có giá trị là 10:" + i;
document.getElementById("demo2").innerHTML="Biến f kiểu số thực, có giá trị là 20.5:" + f;
document.getElementById("demo3").innerHTML="Biến b kiểu logic, có giá trị là true:" + b;
document.getElementById("demo4").innerHTML = "Biến s kiểu chuỗi, có giá trị là \"Hà Nội\":" + s;
}



{
// Viết một đoạn mã Javascript,
// khai báo
// biến width chứa giá trị độ rộng của hình chữ nhật,
// biến height chứa giá trị chiều cao của hình chữ nhật.
//  In ra màn hình trình duyệt diện tích của hình chữ nhật đó.

let width = 100;
let height = 50;
console.log("biến width chứa giá trị độ rộng của hình chữ nhật: ", width);
console.log("biến height chứa giá trị chiều cao của hình chữ nhật: ", height);
console.log("diện tích hình chữ nhật: " + width * height);
document.getElementById("demo5").innerHTML = "biến width chứa giá trị độ rộng của hình chữ nhật: " + width;
document.getElementById("demo6").innerHTML = "biến height chứa giá trị chiều cao của hình chữ nhật: " + height;
document.getElementById("demo7").innerHTML = "diện tích hình chữ nhật: " + width*height;
}


{
// Hiển thị một hộp thoại thông báo và yêu cầu người dùng phải xác nhận với nội dung: “bạn đã đủ 18 tuổi chưa!”.

let age = prompt("Nhập tuổi của bạn: ");
if(age >= 18){
     console.log("Bạn đã đủ 18 tuổi");
     alert("Bạn đã đủ 18 tuổi");
}else{
     console.log("Bạn chưa đủ 18 tuổi");
     alert("Bạn chưa đủ 18 tuổi");
}
}

{
// Viết chương trình yêu cầu nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
// Sau đó hiển thị tổng điểm và điểm trung bình 3 môn này lên màn hình console.
const vatly = prompt("Nhập điểm vật ly: ");// prompt lây giá trị nhap vao,
const hoahoc = prompt("Nhập điểm hóa học: ");// prompt lây giá trị nhap vao,
const sinhhoc = prompt("Nhập điểm sinh học: ");// prompt lây giá trị nhap vao,
const tongdiem = parseInt(vatly) + parseInt(hoahoc) + parseInt(sinhhoc);// parseInt chuyển đổi gía trị chuỗi sang số nguyên, parseFloat chuyển đổi gía trị chuỗi sang số thục,
const diemtrungbinh = tongdiem / 3;
console.log("Vật ly: " + vatly);
console.log("Hóa học: " + hoahoc);
console.log("Sinh học: " + sinhhoc);
console.log("Tổng điểm: " + tongdiem);
console.log("Điểm trung bình: " + diemtrungbinh); 
document.getElementById("demo10").innerHTML = "Vật ly: " + vatly;
document.getElementById("demo11").innerHTML = "Hóa học: " + hoahoc;
document.getElementById("demo12").innerHTML = "Sinh học: " + sinhhoc;
document.getElementById("demo8").innerHTML = "Tổng điểm: " + tongdiem;
document.getElementById("demo9").innerHTML = "Điểm trung bình: " + diemtrungbinh;
}


{
// Viết chương trình yêu cầu nhập một giá trị là độ C (Celsius) và chuyển nó sang độ F (Fahrenheit), in kết quả ra màn hình console.
//[Hướng dẫn: C / 5 = (F - 32) / 9].
let doC = prompt("Nhập do C: ");//prompt nâng câp, lây giá trị nhập với người dùng, prompt lây giá trị nhập với người dùng,doC = giá trị nhập với người dùng
let doF = (doC / 5) * (9) + 32;//doF = (doC / 5) * (9) + 32
console.log("Độ C: " + doC);
console.log("Độ F: " + doF);
document.getElementById("demo13").innerHTML = "Độ C: " + doC;
document.getElementById("demo14").innerHTML = "Độ F: " + doF;
}



{
// Viết chương trình yêu cầu nhập chiều dài và chiều rộng của một hình chữ nhật.
// Tính toán và in chu vi, diện tích hình chữ nhật đó ra màn hình console.
let lRectangle = prompt("Nhập chiều dài: ");//prompt nâng câp, lây giá trị nhập với người dùng, prompt lây giá trị nhập với người dùng,lRectangle = giá trị nhập với người dùng,lRectangle:length of rectangle
let wRectangle = prompt("Nhập chiều rong: ");//prompt nâng câp, lây giá trị nhập với người dùng, prompt lây giá trị nhập với người dùng,wRectangle = giá trị nhập với người dùng,wRectangle:width of rectangle
let pRectangle = (lRectangle + wRectangle) * 2;//pRectangle = perimeter of rectangle
let sRectangle = lRectangle * wRectangle;//sRectangle = area of rectangle
console.log("Chiều dài: " + lRectangle);
console.log("Chiều rộng: " + wRectangle);
console.log("Chu vi hình chữ nhật: " + pRectangle);
console.log("Diện tích hình chữ nhật: " + sRectangle);
document.getElementById("demo15").innerHTML = "Chiều dài: " + lRectangle;
document.getElementById("demo16").innerHTML = "Chiều rộng: " + wRectangle;
document.getElementById("demo17").innerHTML = "Chu vi hình chữ nhật: " + pRectangle;
document.getElementById("demo18").innerHTML = "Diện tích hình chữ nhật: " + sRectangle;    
}


{
// Viết chương trình khai báo hằng số PI và yêu cầu nhập bán kính của một hình tròn,
// tính toán và in chu vi, diện tích hình tròn đó ra màn hình console.
const PI = 3.14;
let R = prompt("Nhập bán kính: ");//prompt nâng câp, lây giá trị nhập với người dùng, prompt lây giá trị nhập với người dùng,R = giá trị nhập với người dùng,R:radius
let pCenter = 2 * PI * R;//pCenter = perimeter of circle
let sCenter = PI * R * R;//sCenter = area of circle
console.log("Bán kính: " + R);
console.log("Chu vi hình tròn: " + pCenter);
console.log("Diện tích hình tròn: " + sCenter);
document.getElementById("demo19").innerHTML = "Bán kính: " + R;
document.getElementById("demo20").innerHTML = "Chu vi hình tròn: " + pCenter;
document.getElementById("demo21").innerHTML = "Diện tích hình tròn: " + sCenter;
}


// {
// // Chạy chương trình sau, kiểm tra kết quả trong màn hình console và giải thích bằng comment trong code :

//      let a = 10;
//      let b = 2;
//      console.log(a);
//      console.log(b);
//      console.log(a==b);//false 
//      console.log(a!=b);//true
//      console.log(a === b);//false
//      console.log(a !== b);//true
//      console.log(a > b);//true
//      document.getElementById("demo22").innerHTML = "Giá trị a: " + a + "<br>" + "Giá trị b: " + b;
//      document.getElementById("demo23").innerHTML = "Kết quả a bằng nhau với b: " +'a == b:' + (a == b) + "<br>" + "Kết quả a khóng bằng nhau với b: " +'a != b:' + (a != b) + "<br>" + "Kết quả a bằng nhau với b: " +'a === b:' + (a === b) + "<br>" + "Kết quả a khóng bằng nhau với b: " +'a !== b:'+ (a !== b);
//      document.getElementById("demo24").innerHTML = "Kết quả a lơn hơn b: " +'a > b:' + (a > b) + "<br>" + "Kết quả a nhỏ hơn b: " +'a < b:' + (a < b) + "<br>" + "Kết quả a lớn hơn hoăc bằng b: " +'a >= b:' + (a >= b) + "<br>" + "Kết quả a nhỏ hơn hoặc bằng b: " +'a <= b:' + (a <= b);

// }
{
// Chạy chương trình sau, kiểm tra kết quả trong màn hình console và giải thích bằng comment trong code :

     let a = 5;
     let b = 5;
     console.log(a);
     console.log(b);
     console.log(a==b);//true
     console.log(a!=b);//false
     console.log(a === b);//true
     console.log(a !== b);//false
     console.log(a > b);//false
     document.getElementById("demo22").innerHTML = "Giá trị a: " + a + "<br>" + "Giá trị b: " + b;
     document.getElementById("demo23").innerHTML = "Kết quả a bằng nhau với b: " +'a == b:' + (a == b) + "<br>" + "Kết quả a khóng bằng nhau với b: " +'a != b:' + (a != b) + "<br>" + "Kết quả a bằng nhau với b: " +'a === b:' + (a === b) + "<br>" + "Kết quả a khóng bằng nhau với b: " +'a !== b:'+ (a !== b);
     document.getElementById("demo24").innerHTML = "Kết quả a lơn hơn b: " +'a > b:' + (a > b) + "<br>" + "Kết quả a nhỏ hơn b: " +'a < b:' + (a < b) + "<br>" + "Kết quả a lớn hơn hoăc bằng b: " +'a >= b:' + (a >= b) + "<br>" + "Kết quả a nhỏ hơn hoặc bằng b: " +'a <= b:' + (a <= b);

}




{
// Cho đoạn mã sau,
// tính toán giá trị của result và giá trị của biến a sau khi thực hiện chương trình và giải thích sự khác nhau giữa++a và a++ bằng comment trong code.

     let a = 6;
     console.log(a);
     document.getElementById("demo25").innerHTML = "Giá trị a khi bắt đầu: "+ a;
     let result = ++a + a + a++ + ++a + a;//(1+6)+7+7+(1+8)+9=39
     console.log(result);
     document.getElementById("demo26").innerHTML = "Giá trị result: " + result + "<br>" + "Giá trị a sau khi thực hiện chương trình: " + a;
     document.getElementById("demo27").innerHTML = "phép tính được thuật toán:((1+6)+7+7+(1+8)+9) = 39"; 
     
}












