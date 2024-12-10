/*
--------------MENU---------------
1. In ra tổng các số chính phương từ 1 -> 100
2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko
3. Kiểm tra 1 số có phải số hoàn hảo hay ko
4. Thoát
*/
// // 1. In ra tổng các số chính phuong từ 1 -> 100
// let i = 1;
// while(i <= 100){
//      console.log(i*i);
//      i++;
// }
// // 2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko
// let n = 1;
// while(n > 0){
//      let n = prompt("nhap n:");
//      if(n % 2 == 0){
//           console.log(n + " la so nguyen to");
//           break;
//      }else{
//           console.log(n + " khong la so nguyen to");
//           break;
//      }
// }
// // 3. Kiểm tra 1 số có phải số hoàn hảo hay ko
// let m = 1;
// while(m > 0){
//      let m = prompt("nhap m:");
//      let sum = 0;
//      for(let i = 1; i < m; i++){
//           if(m % i == 0){
//                sum += i;
//           }
//      }
//      if(sum == m){
//           console.log(m + " la so hoan hao");
//           break;
//      }else{
//           console.log(m + " khong la so hoan hao");
//           break;
//      }
// }
//Cách làm :
while (true) {
     let menu = "--------------------MENU---------------------\n" +
          "1. In ra tổng các số chính phương từ 1 -> 100\n" +
          "2. Kiểm tra 1 số nhập vào có phải số nguyên tố hay ko\n" +
          "3. Kiểm tra 1 số có phải số hoàn hảo hay ko\n" +
          "4. Thoát"
     let choice = prompt(menu);
     switch (choice) {
          case "1":
               alert("Đang thực hiện chức năng 1");
               let i = 1;
               while (i > 0) {
                    if (i*i <= 100) {
                         console.log(i*i);
                         i++; }
                    else {
                         break;
                    }
               }
               break;
          case "2":
               alert("Đang thực hiện chức năng 2");
              //tìm số nguyên tố của 1 số nhập vào 
               { let n = 1;
                    while(n > 0){
                         let n = prompt("nhap n:");
                         if(n % 2 == 0){
                              console.log(n + " la so nguyen to");
                              break;
                         }else{
                              console.log(n + " khong la so nguyen to");
                              break;
                         }
                    }

               }
               break;
          case "3":
               alert("Đang thực hiện chức năng 3");
               // kiểm tra số hoàn hảo của 1 số nhap vao
               { let m = 1;
                    while(m > 0){
                         let m = prompt("nhap m:");
                         let sum = 0;
                         for(let i = 1; i < m; i++){
                              if(m % i == 0){
                                   sum += i;
                              }
                         }
                         if(sum == m){
                              console.log(m + " la so hoan hao");
                              break;
                         }else{
                              console.log(m + " khong la so hoan hao");
                              break;
                         }
                    }

               }
               break;
          case "4":
               break;
          default:
               alert("Please enter a valid choice");
               break;

     }
     if(choice == "4"){
          break;
     }
}

