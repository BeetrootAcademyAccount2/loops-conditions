let a = "50";

// for (let i = 0; i <= 7; i++) {
//   console.log("Player ", a + i);
// }
// let counter = 0;
// while (counter <= 7) {
//   counter++;
//   console.log("Player ", a++);
// }

/*
do {
  counter++;
  console.log("Player ", a++);
} while (counter >= 7);
*/

// while (a > 20 && typeof a === "number") {
//   a--;
//   console.log("Player", a);
// }

do {
  a--;
  console.log("Player", a);
} while (a > 20 && typeof a === "number");

console.log("End");
