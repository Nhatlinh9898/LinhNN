let courseList = JSON.parse(localStorage.getItem("arrayCourses")) || []; // đọc từ local về
console.log("array", courseList);

// let studentsList = []; // [...1,2,3,4 , 5,6,7,8 ]
// courseList.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     // them arrayStudent vao mảng studentList
//     // cú pháp destructoring của ES6
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });

// // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   let html = "";
//   students.forEach(function (student) {
//     html += `<tr>
//                     <td>${student.studentId}</td>
//                     <td>${student.studentName}</td>
//                     <td>${student.year}</td>
//                     <td>${student.address}</td>
//                     <td>${student.email}</td>
//                     <td>${student.phone}</td>
//                     <td>${student.sex ? "Nam" : "Nữ"}</td>
//                     <td>${student.status}</td>

//                     <td>
//                         <button type="button" class="btn btn-warning">Edit</button>
//                     </td>
//                     <td>
//                         <button type="button" class="btn btn-danger">Delete</button>
//                         </td>
//                     </tr>`;
//   });
//   // chèn vào thẻ tbody của table
//   document.getElementById("tbody").innerHTML = html;
// }

// showListStudent(studentsList); // hiển thị lần đầu

// // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
// // // Hàm lấy ra arrayCourses từ localStorage
// function getArrayCourses() {
//   return JSON.parse(localStorage.getItem("arrayCourses")) || [];
// }

// // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
// // // Hàm lấy ra arrayClass từ arrayCourses
// function getArrayClasses() {
//   let courseList = getArrayCourses();
//   let classList = [];
//   courseList.forEach(function (course) {
//     let classArray = course.arrayClass || [];
//     classList = [...classList, ...classArray];
//   });
//   return classList;
// }

// // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
// // // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   let html = "";
//   students.forEach(function (student) {
//     html += `<tr>
//                     <td>${student.STT (index + 1)}</td>
//                     <td>${student.studentId}</td>
//                     <td>${student.studentName}</td>
//                     <td>${student.year}</td>
//                     <td>${student.address}</td>
//                     <td>${student.email}</td>
//                     <td>${student.phone}</td>
//                     <td>${student.sex ? "Nam" : "Nữ"}</td>
//                     <td>${student.status}</td>
//                     <td>
//                         <button type="button" class="btn btn-warning">Edit</button>
//                     </td>
//                     <td>
//                         <button type="button" class="btn btn-danger">Delete</button>
//                     </td>
//                 </tr>`;
//   });
//   document.getElementById("tbody").innerHTML = html;
// }

// // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
// // // Hàm hiển thị danh sách khóa học
// function showListCourses(courses) {
//   let html = "";
//   courses.forEach(function (course) {
//     html += `<tr>
//                     <td>${course.STT(index + 1)}</td>
//                     <td>${course.courseId}</td>
//                     <td>${course.courseName}</td>
//                     <td>${course.courseTime}</td>
//                     <td>${course.status}</td>
//                     <td>
//                         <button type="button" class="btn btn-warning">Edit</button>
//                     </td>
//                     <td>
//                         <button type="button" class="btn btn-danger">Delete</button>
//                     </td>
//                 </tr>`;
//   });
//   document.getElementById("tbodyCourses").innerHTML = html;
// }

// // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
// // // Hàm hiển thị danh sách lớp học
// function showListClasses(classes) {
//   let html = "";
//   classes.forEach(function (classItem) {
//     html += `<tr>
//                     <td>${classItem.STT(index + 1)}</td>
//                     <td>${classItem.classId}</td>
//                     <td>${classItem.className}</td>
//                     <td>${classItem.teacher}</td>
//                     <td>${classItem.schedule}</td>
//                     <td>${classItem.room}</td>
//                     <td>${classItem.status}</td>
//                     <td>
//                         <button type="button" class="btn btn-warning">Edit</button>
//                     </td>
//                     <td>
//                         <button type="button" class="btn btn-danger">Delete</button>
//                     </td>
//                 </tr>`;
//   });
//   document.getElementById("tbodyClasses").innerHTML = html;
// }

// // Sử dụng các hàm để lấy và hiển thị dữ liệu
// let arrayCourses = getArrayCourses();
// showListCourses(arrayCourses);

// let arrayClasses = getArrayClasses();
// showListClasses(arrayClasses);

// let studentsList = [];
// arrayCourses.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });
// showListStudent(studentsList);


// // Hàm lấy ra arrayCourses từ localStorage
// function getArrayCourses() {
//   // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
//   return JSON.parse(localStorage.getItem("arrayCourses")) || [];
// }

// // Hàm lấy ra arrayClass từ arrayCourses
// function getArrayClasses() {
//   // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
//   let courseList = getArrayCourses();
//   let classList = [];
//   courseList.forEach(function (course) {
//     let classArray = course.arrayClass || [];
//     classList = [...classList, ...classArray];
//   });
//   return classList;
// }

// // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
//   let html = "";
//   students.forEach(function (student, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${student.studentId}</td>
//                 <td>${student.studentName}</td>
//                 <td>${student.year}</td>
//                 <td>${student.address}</td>
//                 <td>${student.email}</td>
//                 <td>${student.phone}</td>
//                 <td>${student.sex ? "Nam" : "Nữ"}</td>
//                 <td>${student.status}</td>
//                 <td>${student.className}</td>
//                 <td>${student.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbody").innerHTML = html;
// }

// // Hàm hiển thị danh sách khóa học
// function showListCourses(courses) {
//   // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
//   let html = "";
//   courses.forEach(function (course, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${course.courseId}</td>
//                 <td>${course.courseName}</td>
//                 <td>${course.courseTime}</td>
//                 <td>${course.status}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyCourses").innerHTML = html;
// }

// // Hàm hiển thị danh sách lớp học
// function showListClasses(classes) {
//   // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
//   let html = "";
//   classes.forEach(function (classItem, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${classItem.classId}</td>
//                 <td>${classItem.className}</td>
//                 <td>${classItem.lecturer}</td>
//                 <td>${classItem.descriptions}</td>
//                 <td>${classItem.totalNumber}</td>
//                 <td>${classItem.status}</td>
//                 <td>${classItem.courseID}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyClasses").innerHTML = html;
// }

// // Sử dụng các hàm để lấy và hiển thị dữ liệu
// let arrayCourses = getArrayCourses();
// showListCourses(arrayCourses);

// let arrayClasses = getArrayClasses();
// showListClasses(arrayClasses);

// let studentsList = [];
// arrayCourses.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });
// showListStudent(studentsList);


// // Hàm lấy ra arrayCourses từ localStorage
// function getArrayCourses() {
//   // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
//   return JSON.parse(localStorage.getItem("arrayCourses")) || [];
// }

// // Hàm lấy ra arrayClass từ arrayCourses
// function getArrayClasses() {
//   // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
//   let courseList = getArrayCourses();
//   let classList = [];
//   courseList.forEach(function (course) {
//     let classArray = course.arrayClass || [];
//     classList = [...classList, ...classArray];
//   });
//   return classList;
// }

// // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
//   let html = "";
//   students.forEach(function (student, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${student.studentId}</td>
//                 <td>${student.studentName}</td>
//                 <td>${student.year}</td>
//                 <td>${student.address}</td>
//                 <td>${student.email}</td>
//                 <td>${student.phone}</td>
//                 <td>${student.sex ? "Nam" : "Nữ"}</td>
//                 <td>${student.status}</td>
//                 <td>${student.className}</td>
//                 <td>${student.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbody").innerHTML = html;
// }

// // Hàm hiển thị danh sách khóa học
// function showListCourses(courses) {
//   // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
//   let html = "";
//   courses.forEach(function (course, index) {
//     html += `<tr>   
//                 <td>${index + 1}</td>
//                 <td>${course.courseId}</td>
//                 <td>${course.courseName}</td>
//                 <td>${course.courseTime}</td>                 
//                 <td>${course.status}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyCourses").innerHTML = html;
// }

// // Hàm hiển thị danh sách lớp học
// function showListClasses(classes) {
//   // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
//   let html = "";
//   classes.forEach(function (classItem, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${classItem.classId}</td>
//                 <td>${classItem.className}</td>
//                 <td>${classItem.lecturer}</td>
//                 <td>${classItem.descriptions}</td>
//                 <td>${classItem.totalNumber}</td>
//                 <td>${classItem.status}</td>
//                 <td>${classItem.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyClasses").innerHTML = html;
// }

// // Sử dụng các hàm để lấy và hiển thị dữ liệu
// let arrayCourses = getArrayCourses();
// showListCourses(arrayCourses);

// let arrayClasses = getArrayClasses();
// showListClasses(arrayClasses);

// let studentsList = [];
// arrayCourses.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });
// showListStudent(studentsList);

// // Hàm lấy ra arrayCourses từ localStorage
// function getArrayCourses() {
//   // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
//   return JSON.parse(localStorage.getItem("arrayCourses")) || [];
// }

// // Hàm lấy ra arrayClass từ arrayCourses
// function getArrayClasses() {
//   // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
//   let courseList = getArrayCourses();
//   let classList = [];
//   courseList.forEach(function (course) {
//     let classArray = course.arrayClass || [];
//     classList = [...classList, ...classArray];
//   });
//   return classList;
// }

// // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
//   let html = "";
//   students.forEach(function (student, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${student.studentId}</td>
//                 <td>${student.studentName}</td>
//                 <td>${student.year}</td>
//                 <td>${student.address}</td>
//                 <td>${student.email}</td>
//                 <td>${student.phone}</td>
//                 <td>${student.sex ? "Nam" : "Nữ"}</td>
//                 <td>${student.status}</td>
//                 <td>${student.className}</td>
//                 <td>${student.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbody").innerHTML = html;
// }

// // Hàm hiển thị danh sách khóa học
// function showListCourses(courses) {
//   // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
//   let html = "";
//   courses.forEach(function (course, index) {
//     html += `<tr>   
//                 <td>${index + 1}</td>
//                 <td>${course.courseId}</td>
//                 <td>${course.courseName}</td>
//                 <td>${course.courseTime}</td>                 
//                 <td>${course.status}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyCourses").innerHTML = html;
// }

// // Hàm hiển thị danh sách lớp học
// function showListClasses(classes) {
//   // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
//   let html = "";
//   classes.forEach(function (classItem, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${classItem.classId}</td>
//                 <td>${classItem.className}</td>
//                 <td>${classItem.lecturer}</td>
//                 <td>${classItem.descriptions}</td>
//                 <td>${classItem.totalNumber}</td>
//                 <td>${classItem.status}</td>
//                 <td>${classItem.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyClasses").innerHTML = html;
// }

// // Sử dụng các hàm để lấy và hiển thị dữ liệu
// let arrayCourses = getArrayCourses();
// showListCourses(arrayCourses);

// let arrayClasses = getArrayClasses();
// showListClasses(arrayClasses);

// let studentsList = [];
// arrayCourses.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });
// showListStudent(studentsList);

// // Hàm lấy ra arrayCourses từ localStorage
// function getArrayCourses() {
//   // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
//   return JSON.parse(localStorage.getItem("arrayCourses")) || [];
// }

// // Hàm lấy ra arrayClass từ arrayCourses
// function getArrayClasses() {
//   // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
//   let courseList = getArrayCourses();
//   let classList = [];
//   courseList.forEach(function (course) {
//     let classArray = course.arrayClass || [];
//     classList = [...classList, ...classArray];
//   });
//   return classList;
// }

// // Hàm hiển thị danh sách sinh viên
// function showListStudent(students) {
//   // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
//   let html = "";
//   students.forEach(function (student, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${student.studentId}</td>
//                 <td>${student.studentName}</td>
//                 <td>${student.year}</td>
//                 <td>${student.address}</td>
//                 <td>${student.email}</td>
//                 <td>${student.phone}</td>
//                 <td>${student.sex ? "Nam" : "Nữ"}</td>
//                 <td>${student.status}</td>
//                 <td>${student.className}</td>
//                 <td>${student.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbody").innerHTML = html;
// }

// // Hàm hiển thị danh sách khóa học
// function showListCourses(courses) {
//   // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
//   let html = "";
//   courses.forEach(function (course, index) {
//     html += `<tr>   
//                 <td>${index + 1}</td>
//                 <td>${course.courseId}</td>
//                 <td>${course.courseName}</td>
//                 <td>${course.courseTime}</td>                 
//                 <td>${course.status}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyCourses").innerHTML = html;
// }

// // Hàm hiển thị danh sách lớp học
// function showListClasses(classes) {
//   // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
//   let html = "";
//   classes.forEach(function (classItem, index) {
//     html += `<tr>
//                 <td>${index + 1}</td>
//                 <td>${classItem.classId}</td>
//                 <td>${classItem.className}</td>
//                 <td>${classItem.lecturer}</td>
//                 <td>${classItem.descriptions}</td>
//                 <td>${classItem.totalNumber}</td>
//                 <td>${classItem.status}</td>
//                 <td>${classItem.courseName}</td>
//                 <td>
//                     <button type="button" class="btn btn-warning">Edit</button>
//                 </td>
//                 <td>
//                     <button type="button" class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>`;
//   });
//   document.getElementById("tbodyClasses").innerHTML = html;
// }

// // Sử dụng các hàm để lấy và hiển thị dữ liệu
// let arrayCourses = getArrayCourses();
// showListCourses(arrayCourses);

// let arrayClasses = getArrayClasses();
// showListClasses(arrayClasses);

// let studentsList = [];
// arrayCourses.forEach(function (course) {
//   let classArray = course.arrayClass || [];
//   classArray.forEach(function (classes) {
//     studentsList = [...studentsList, ...classes.arrayStudent];
//   });
// });
// showListStudent(studentsList);

// Hàm lấy ra arrayCourses từ localStorage
function getArrayCourses() {
  // Giải thích: Hàm này đọc dữ liệu từ localStorage với khóa là "arrayCourses", sau đó chuyển đổi chuỗi JSON thành mảng JavaScript. Nếu không có dữ liệu nào trong localStorage, nó sẽ trả về một mảng rỗng.
  return JSON.parse(localStorage.getItem("arrayCourses")) || [];
}

// Hàm lấy ra arrayClass từ arrayCourses
function getArrayClasses() {
  // Giải thích: Hàm này đầu tiên gọi hàm getArrayCourses để lấy danh sách các khóa học. Sau đó, nó duyệt qua từng khóa học và lấy ra mảng arrayClass từ mỗi khóa học. Cuối cùng, nó gộp tất cả các mảng arrayClass lại thành một mảng duy nhất và trả về.
  let courseList = getArrayCourses();
  let classList = [];
  courseList.forEach(function (course) {
    let classArray = course.arrayClass || [];
    classList = [...classList, ...classArray];
  });
  return classList;
}

// Hàm hiển thị danh sách sinh viên
function showListStudent(students) {
  // Giải thích: Hàm này nhận vào một mảng sinh viên và tạo ra các hàng HTML để hiển thị thông tin của từng sinh viên. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbody.
  let html = "";
  students.forEach(function (student, index) {
    html += `<tr>
                <td>${index + 1}</td>
                <td>${student.studentId}</td>
                <td>${student.studentName}</td>
                <td>${student.year}</td>
                <td>${student.address}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.sex ? "Nam" : "Nữ"}</td>
                <td>${student.status}</td>
                <td>${student.className}</td>
                <td>${student.courseName}</td>
                <td>
                    <button type="button" class="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>`;
  });
  document.getElementById("tbody").innerHTML = html;
}

// Hàm hiển thị danh sách khóa học
function showListCourses(courses) {
  // Giải thích: Hàm này nhận vào một mảng khóa học và tạo ra các hàng HTML để hiển thị thông tin của từng khóa học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyCourses.
  let html = "";
  courses.forEach(function (course, index) {
    html += `<tr>   
                <td>${index + 1}</td>
                <td>${course.courseId}</td>
                <td>${course.courseName}</td>
                <td>${course.courseTime}</td>                 
                <td>${course.status}</td>
                <td>
                    <button type="button" class="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>`;
  });
  document.getElementById("tbodyCourses").innerHTML = html;
}

// Hàm hiển thị danh sách lớp học
function showListClasses(classes) {
  // Giải thích: Hàm này nhận vào một mảng lớp học và tạo ra các hàng HTML để hiển thị thông tin của từng lớp học. Sau đó, nó chèn các hàng này vào phần tử HTML có id là tbodyClasses.
  let html = "";
  classes.forEach(function (classItem, index) {
    html += `<tr>
                <td>${index + 1}</td>
                <td>${classItem.classId}</td>
                <td>${classItem.className}</td>
                <td>${classItem.teacher}</td>
                <td>${classItem.description}</td>
                <td>${classItem.size}</td>
                <td>${classItem.status}</td>
                <td>
                    <button type="button" class="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>`;
  });
  document.getElementById("tbodyClasses").innerHTML = html;
}

// Hàm hiển thị arrayCourses để kiểm tra giá trị
function displayArrayCourses() {
  let courses = getArrayCourses();
  console.log("Array Courses:", courses);
}

// Hàm hiển thị arrayClasses để kiểm tra giá trị
function displayArrayClasses() {
  let classes = getArrayClasses();
  console.log("Array Classes:", classes);
}

// Sử dụng các hàm để lấy và hiển thị dữ liệu
let arrayCourses = getArrayCourses();
showListCourses(arrayCourses);

let arrayClasses = getArrayClasses();
showListClasses(arrayClasses);

let studentsList = [];
arrayCourses.forEach(function (course) {
  let classArray = course.arrayClass || [];
  classArray.forEach(function (classes) {
    studentsList = [...studentsList, ...classes.arrayStudent];
  });
});
showListStudent(studentsList);

// Hiển thị arrayCourses và arrayClasses để kiểm tra giá trị
displayArrayCourses();
displayArrayClasses();

