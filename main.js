//Loop
// for (let i = 100; 0 < i; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; ) {
//   console.log(i);
//   i++;
//   i + i;
// }
// let karra1q

// let karra2 = "";
// for (let i = 1; i < 10; i++) {
//   karra2 = karra2 +  i + " x 2 =" + i * 2 + " \n ";
// }

// let karra3 = ""
// for (let i = 1; i < 10; i++) {
//   karra3 = karra3 +  i + " x 3 =" + i * 3 + " \n ";
// }

// let karra4 = ""
// for (let i = 1; i < 10; i++) {
//   karra4 = karra4 +  i + " x 4 =" + i * 4 + " \n ";
// }

// let karra5 = ""
// for (let i = 1; i < 10; i++) {
//   karra5 = karra5 +  i + " x 5 =" + i * 5 + " \n ";
// }

// karra1q = karra2 + karra3 + karra4 + karra5
// console.log(karra1q)

// for (let i = 2; i <= 9; i++) {
//   for (let j = 2; j <= 9; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
//   console.log("");
// }

// let output = "";

// for (let i = 2; i <= 9; i++) {
//   for (let j = 2; j <= 9; j++) {
//     output += `${i} * ${j} = ${i * j}\n`;
//   }
// }

// console.log(output);

// let output = "";

// for (let i = 2; i <= 9; i+=2) {
//   for (let j = 2; j <= 9; j++) {
//     output += `${i} * ${j} = ${i * j}\t`;
//   }
//   output += "\n";
// }

// console.log(output);

const numbers = [0, 1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 

const printTable = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let row = '';
    for (let j = 0; j < numbers.length; j++) {
      row += (numbers[i] * numbers[j]) + '\t';
    }
    console.log(row);
  }
};

printTable(numbers);


