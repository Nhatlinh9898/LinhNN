// dom

// // truy xuất phần tử
// // truy xuất theo id
// var headingNode = document.getElementById('heading');
// console.log(headingNode);
// // truy xuất theo class
// var headingNodes = document.getElementsByClassName('heading');
// console.log(headingNodes);
// // truy xuất theo tag
// var headingNodes = document.getElementsByTagName('h1');
// console.log(headingNodes);
// // truy xuất theo css selector
// var headingNodes = document.querySelector('.box .heading-2');
// console.log(headingNodes);
// // truy xuất theo css selector
// var headingNodes = document.querySelectorAll('.box .heading-2');
// console.log(headingNodes);

// // thay đổi css
// var headingNode = document.querySelector('.heading');
// headingNode.style.color = 'red';
// headingNode.style.fontSize = '2rem';

// // thay đổi nội dung
// var headingNode = document.querySelector('.heading');
// headingNode.innerHTML = 'New Heading';

// // thêm phần tử
// var boxNode = document.querySelector('.box-1');
// boxNode.innerHTML = '<h1>Heading</h1>';
// boxNode.innerHTML = '<h1>Heading</h1>';
// boxNode.innerHTML = '<h1>Heading</h1>';

// truy xuất theo ID,class,tagname
let box = document.getElementById("box"); //lấy về duy nhất 1 đối tượng HTMLElement,
let h1Array = document.getElementsByClassName("title"); // HTMLCollection -danh sách các đối tượng HTMLElement
let pArray = document.getElementsByTagName("p"); // HTMLCollection -danh sách các đối tượng HTMLElement

// h1Array.forEach(function(element){ // không thể sử dụng forEach với HTMLCollection, chỉ sử dụng với NodeList,h1Array.forEach is not a function
//     console.log(element);
// })

console.log("box: ", box);
console.log("h1Array: ", h1Array);
console.log("pArray before: ", pArray); //HTMLCollection  tự động cập nhật khi thêm phần tử mới vào DOM

// let newP = document.createElement("p"); //tạo ra 1 thẻ p mới
// newP.innerText = "New Paragraph Nguyen Nhat Linh"; //thêm nội dung cho thẻ p
// document.body.appendChild(newP); //thêm thẻ p vào body của trang web, cap nhat HTMLCollection

console.log("pArray after: ", pArray); //HTMLCollection  tự động cập nhật khi thêm phần tử mới vào DOM
// truy xuất theo css selector
let boxNode = document.querySelector("#box"); //node
// let boxList = document.querySelectorAll(".title");//nodelist
let boxList = document.querySelectorAll("p"); //nodelist

boxList.forEach(function (element) {
  console.log(element);
});
console.log("boxNode: ", boxNode);
console.log("boxList before: ", boxList);

let newP = document.createElement("p"); //tạo ra 1 thẻ p mới
newP.innerText = "New Paragraph Nguyen Nhat Linh"; //thêm nội dung cho thẻ p
document.body.appendChild(newP); //thêm thẻ p vào body của trang web, khong cap nhat HTMLCollection

console.log("boxList after: ", boxList);


// sự kiện
// chuột
// bàn phím
// con lăn


// thông qua sự kiện thao tác của người dùng, chúng ta sử dụng function trong js dể xây dựng, thiết kế tính năng cho ứng dụng web


//để tạo chức năng cho một sự kiện, chúng ta sử dụng phương thức addEventListener() của đối tượng document, chính sử dụng phương thức nay, chúng ta sử dụng function trong js dể xây dựng, thiết kế tính năng cho ứng dụng web
// lấy đối tượng thực hiện event bằng cách truy xuất phần tử 
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
// bắt và xử lý event
//cách 1: trực tiếp trên giao diện bằng cách thêm thuộc tính onclick vào thẻ html và gán giá trị là function cần thực thi ví dụ onclick = "handleBtn1()"
//được ưa chuộng vì dễ hiểu, dễ thực thi, dễ bảo trì, dễ debug
//hàm xử lý sự kiện cho btn1
function handleBtn1() {
  console.log("Hello World");
}
btn1.addEventListener("click", function () {
  console.log("Hello World");
});

// cách 2: sử dụng phương thức addEventListener() của đối tượng document để bắt sự kiện click vào button và thực thi function handleBtn2()
function handleBtn2() {
  console.log("good bye");
}

// btn2.addEventListener("click", handleBtn2 //function handleBtn2() sẽ được thực thi khi sự kiện click xảy ra trên button2 viec thuc thi function handleBtn2() se duoc thuc hien khi su kien click xay ra tren button2 va cos the tai su dung function handleBtn2() cho cac su kien khac 
//  );
btn2.addEventListener("click", function () {//hàm nặng danh chi thực thi 1 lần duy nhất khong  thể tái sử dụng
  console.log("good bye");
});

//cachs 3: sử dụng thuộc tính của đối tượng HTMLelemen để thêm sự kiện
btn2.onclick = function () { //hàm nặng danh chi thực thi 1 lần duy nhất khong  thể tái sử dụng
     console.log("good bye"); 
}






// chuột trái
// let btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   console.log("Click");
// });

// btn2.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   console.log("Right Click");
// });
// chuột phải
// let btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", function () {
//   console.log("Click");
// });
//bàn phím
// btn2.addEventListener("keydown", function (event) {
//      console.log(event.key);
// })
//phím esc
// btn2.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     console.log("Escape");
//   }
// });
// //con trỏ chuột
// btn2.addEventListener("mousemove", function (event) {
//   console.log(event.offsetX, event.offsetY);
// });
// //thay đổi kích thước màn hình
// window.addEventListener("resize", function (event) {
//   console.log(window.innerWidth, window.innerHeight);
// });
// // scroll
// window.addEventListener("scroll", function (event) {
//   console.log(window.scrollX, window.scrollY);
// });
// // con lăn chuột
// window.addEventListener("wheel", function (event) {
//   console.log(event.deltaY);
// });
// // form
// let form = document.getElementById("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Submit");
// });
// // input
// let input = document.getElementById("input");
// input.addEventListener("input", function (event) {
//   console.log(event.target.value);
// });
// // change
// let select = document.getElementById("select");
// select.addEventListener("change", function (event) {
//   console.log(event.target.value);
// });
// // focus
// let input2 = document.getElementById("input2");
// input2.addEventListener("focus", function (event) {
//   console.log("Focus");
// });
// // blur
// input2.addEventListener("blur", function (event) {
//   console.log("Blur");
// });
// // keyup
// input2.addEventListener("keyup", function (event) {
//   console.log(event.target.value);
// });
// // keydown
// input2.addEventListener("keydown", function (event) {
//   console.log(event.target.value);
// });
// // keypress
// input2.addEventListener("keypress", function (event) {
//   console.log(event.target.value);
// });
// // event.target
// let ul = document.getElementById("ul"); //node
// ul.addEventListener("click", function (event) {
//   console.log(event.target);
// });
// // event.preventDefault()
// let link = document.getElementById("link");
// link.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Click");
// });
// // event.stopPropagation()
// let link2 = document.getElementById("link2");
// link2.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("Click");
// });
// // event.stopImmediatePropagation()
// let link3 = document.getElementById("link3");
// link3.addEventListener("click", function (event) {
//   event.stopImmediatePropagation();
//   console.log("Click");
// });
// // event.currentTarget
// let link4 = document.getElementById("link4");
// link4.addEventListener("click", function (event) {
//   console.log(event.currentTarget);
// });
// // event.preventDefault()
// let link5 = document.getElementById("link5");
// link5.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Click");
// });
// // event.stopPropagation()
// let link6 = document.getElementById("link6");
// link6.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("Click");
// });
// // event.stopImmediatePropagation()
// let link7 = document.getElementById("link7");
// link7.addEventListener("click", function (event) {
//   event.stopImmediatePropagation();
//   console.log("Click");
// });






