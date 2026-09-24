// // to print he first 5 number

// let  i = 0
// for (i = 0; yi <= 5; i++ ){
//     console.log(i);
// }

// let i = 0;
// for (i = 1; i <= 9; i = i + 2) {
//     console.log(i);
// }

// let i = 0;
// for (i = 0; i <= 8; i = i + 2) {
//     console.log(i);
// }

// let i = 0;
// for (i = 10; i <= 20; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is Even");
//     } else {
//         console.log(i + " is Odd");
//     }}
      

    // wile loop: allows the code to be excuted repateadly 
    // sytacs:
    // while (...)
    // {
    //     ...
    // }
    // do while loop: checks for the condition after excuting the statmetns
    // sytacs:
    // do {
    //     ...
    // }
    // while (...)

//    let i = 1;
// while (i <= 9) {
//     console.log(i);
//     i += 2;
// }


// let i = 2
// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }

// let  i = 1;

// while (i<= 20) {
//     if (i %2==0){
//         console.log (i+" number is even")
        
//     } else {console.log (i+" number is odd") 
        
//     }
//     i++;
// }

// do while loop
 
// let i=1
// do{
//     console.log(i);
//     i ++;

// }while (i <=5);

// let i=2
// do{ 
//     console.log(i);
// i +=2;

// }while (i <= 10);

// let i = 1;
// do{
//     if(i%2 == 0) {
//         console.log(i + " Is even");
//     }else {
//         console.log(i +" Is odd");
//     }
//     i++;
// }while (i<=20);    








let i = 1;
while (i <= 10) {
    if (i == 5) {
        i++;
        continue
    }
    console.log(i);
    i++;
}