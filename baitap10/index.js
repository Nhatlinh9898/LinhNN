// //tạo một ứng dụng to do list
// //đầu tiên tạo ra một mảng chứa các công việc
// let todoList = [];
// //tạo ra một biến để lưu trữ công việc
// let input = prompt("What would you like to do?");
// while (input !== "quit") {
//     if (input === "new") {
//         let newTodo = prompt("Enter new todo");
//         todoList.push(newTodo);
//         console.log(`${newTodo} added to list`);
//     } else if (input === "list") {
//         console.log("**********");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i}: ${todoList[i]}`);
//         }
//         console.log("**********");
//     } else if (input === "delete") {
//         let index = parseInt(prompt("Enter index of todo to delete"));
//         if (!Number.isNaN(index)) {
//             let deleted = todoList.splice(index, 1);
//             console.log(`Deleted ${deleted[0]}`);
//         } else {
//             console.log("Unknown index");
//         }
//     }
//     input = prompt("What would you like to do?");
// }
// console.log("OK, YOU QUIT THE APP");
//tạo một ứng dung to do list
// cho một ứng dụng to do list
// let todoList = [];
// let input = prompt("hãy nhập kế hoạch về một công việc ?");
//cho ngươi dùng nhập kế hoạch về một công việc vào 5 mục C/R/U/D/E
//. C - cho người dùng nhập kế hoạch về một công việc mới, thêm công việc mới vào cuối mảng.sau đó in ra một ứng dụng to do list
//. R - in ra một ứng dụng to do list
//. U - thay đổi một công việc, hỏi ngươi dùng vị trí của công việc muôn thay đổi, sau đó in ra một ứng dụng to do list
//. N -cho phét người dùng ghi chú vào một công việc, sau đó in ra một ứng dụng to do list
//. D - xóa một công việc
//. E - thoát biến chương trình thành vòng lập vĩnh cửu cho tới khi ngươig dùng chọn E thì thoát khỏi biến chương trình

// while (input !== "E") {
//      if (input === "C") {
//           let newTodo = prompt("Enter new todo");
//           todoList.push(newTodo);
//           console.log(`${newTodo} added to list`);
//      } else if (input === "R") {
//           console.log("**********");
//           for (let i = 0; i < todoList.length; i++) {
//                console.log(`${i}: ${todoList[i]}`);
//           }
//           console.log("**********");
//      } else if (input === "U") {
//           let index = parseInt(prompt("Enter index of todo to update"));
//           if (!Number.isNaN(index)) {
//                let newTodo = prompt("Enter new todo");
//                todoList.splice(index, 1, newTodo);
//                console.log(`Updated ${newTodo} at index ${index}`);
//           } else {
//                console.log("Unknown index");
//           }
//      } else if (input === "D") {
//           let index = parseInt(prompt("Enter index of todo to delete"));
//           if (!Number.isNaN(index)) {
//                let deleted = todoList.splice(index, 1);
//                console.log(`Deleted ${deleted[0]}`);
//           } else {
//                console.log("Unknown index");
//           }
//      }
//      input = prompt("What would you like to do?");
//      if (input === "E") {
//           console.log("OK, YOU QUIT THE APP");
          
//      }
// }


//      switch (input) {
//           case "C":
//                let newTodo = prompt("Enter new todo");
//                todoList.push(newTodo);
//                console.log(`${newTodo} added to list`);
//                break;
//           case "R":
//                console.log("**********");
//                for (let i = 0; i < todoList.length; i++) {
//                     console.log(`${i}: ${todoList[i]}`);
//                }
//                console.log("**********");
//                break;
//           case "U":
//                let index = parseInt(prompt("Enter index of todo to update"));
//                if (!Number.isNaN(index)) {
//                     let newTodo = prompt("Enter new todo");
//                     todoList.splice(index, 1, newTodo);
//                     console.log(`Updated ${newTodo} at index ${index}`);
//                } else {
//                     console.log("Unknown index");
//                }
//                break;
//           case "D":
//                let index = parseInt(prompt("Enter index of todo to delete"));
//                if (!Number.isNaN(index)) {
//                     let deleted = todoList.splice(index, 1);
//                     console.log(`Deleted ${deleted[0]}`);
//                } else {
//                     console.log("Unknown index");
//                }
//                break;
//           case "E":
//                console.log("OK, YOU QUIT THE APP");
//                break;
//           default:
//                console.log("Unknown command");
//                break;
// }    

// //sủ dụng switch case while for vòng lập vĩnh cửu cho tới khi người dùng chọn E thì thoát khỏi biến chương trình

//           switch (input) {
//                case "C":
//                     let newTodo = prompt("Enter new todo");
//                     todoList.push(newTodo);
//                     console.log(`${newTodo} added to list`);
//                     break;
//                case "R":
//                     console.log("**********");
//                     for (let i = 0; i < todoList.length; i++) {
//                          console.log(`${i}: ${todoList[i]}`);
//                     }
//                     console.log("**********");
//                     break;
//                case "U":
//                     let index = parseInt(prompt("Enter index of todo to update"));
//                     if (!Number.isNaN(index)) {
//                          let newTodo = prompt("Enter new todo");
//                          todoList.splice(index, 1, newTodo);
//                          console.log(`Updated ${newTodo} at index ${index}`);
//                     } else {
//                          console.log("Unknown index");
//                     }
//                     break;
//                case "D":
//                     let index = parseInt(prompt("Enter index of todo to delete"));
//                     if (!Number.isNaN(index)) {
//                          let deleted = todoList.splice(index, 1);
//                          console.log(`Deleted ${deleted[0]}`);
//                     } else {
//                          console.log("Unknown index");
//                     }
//                     break;
//                case "E":
//                     console.log("OK, YOU QUIT THE APP");
//                     break;
//                default:
//                     console.log("Unknown command");
//                     break;
//           }




// while (true) {
//      let menu = "--------------------MENU---------------------\n" +
//           "1. In ra tổng các số chính phương từ 1 -> 100\n" +
//           "2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko\n" +
//           "3. Kiểm tra 1 số có phải số hoàn hảo hay ko\n" +
//           "4. Thoát"
//      let choice = prompt(menu);
//      switch (choice) {
//           case "C":
//                alert("Đang thực hiện chức năng 1");
//                let i = 1;
//                while (i > 0) {
//                     if (i*i <= 100) {
//                          console.log(i*i);
//                          i++; }
//                     else {
//                          break;
//                     }
//                }
//                break;
//           case "2":
//                alert("Đang thực hiện chức năng 2");
//               //tìm số nguyên tố của 1 số nhập vào 
//                { let n = 1;
//                     while(n > 0){
//                          let n = prompt("nhap n:");
//                          if(n % 2 == 0){
//                               console.log(n + " la so nguyen to");
//                               break;
//                          }else{
//                               console.log(n + " khong la so nguyen to");
//                               break;
//                          }
//                     }

//                }
//                break;
//           case "3":
//                alert("Đang thực hiện chức năng 3");
//                // kiểm tra số hoàn hảo của 1 số nhap vao
//                { let m = 1;
//                     while(m > 0){
//                          let m = prompt("nhap m:");
//                          let sum = 0;
//                          for(let i = 1; i < m; i++){
//                               if(m % i == 0){
//                                    sum += i;
//                               }
//                          }
//                          if(sum == m){
//                               console.log(m + " la so hoan hao");
//                               break;
//                          }else{
//                               console.log(m + " khong la so hoan hao");
//                               break;
//                          }
//                     }

//                }
//                break;
//           case "4":
//                break;
//           default:
//                alert("Please enter a valid choice");
//                break;

//      }
//      if(choice == "4"){
//           break;
//      }
// }

     let choice = "hãy nhập kế hoạch về một công việc ?\n" +
     "C - nhập kế hoạch về một công việc mới, thêm công việc mới\n" +
     "R - xem toàn bộ kế hoạch về công việc của bạn\n" +
     "U - thay đổi một công việc, \n" + //vị trí của công việc muôn thay đổi, sau đó in ra một ứng dụng to do list
     "D - xóa một mục trong kế hoạch của bạn \n" +//, sau đó in ra một ứng dụng to do list
     "N - ghi chú các các công việc\n" +//, sau đó in ra mô ứng dụng to do list
     "E - thoát biến chương trình";
    
     let input = prompt(choice).toUpperCase();
switch (input) {
   
     case "C":
          console.log("kế hoạch công việc");
     
          let todoLists = ["*"];
          while (true) {
                         
                                                                           if (todoLists != []) {
                                                                                for (let i = 0; i < todoLists.length; i++) {
                                                                                let todoLists[i] = prompt("nhập kế hoạch về một công việc mới, thêm công việc mới");
                                                                                     todoLists.splice(i, todoList);
                                                                                     console.log(`${i + 1}: ${todoLists[i]}`);
                                                                                     console.log(todoLists);
                                                                                }
                                                                           } else {
                                                                                for (let i = 0; i < todoLists.length; i++) {
                                                                                let todoList = [prompt("nhập kế hoạch về một công việc mới, thêm công việc mới")];
                                                                                     todoLists.push(todoList);
                                                                                     console.log(`${i + 1}: ${todoLists[i]}`);
                                                                                     console.log(todoLists);
                                                                                }
                                                                           }
                                                                      
                              let choice = prompt("Bạn có muốn thêm công việc mới không? (Y/N)").toUpperCase();
                              if (choice === "N") {
                                   break;
                              }
                         }
      break;
}
                                        
                              
                              
                         
          
                         
                             
                              
