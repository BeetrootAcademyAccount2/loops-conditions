let a = 5;
let convert = a;
/*
if (convert >= 7) {
  console.log("show this");
} else if (convert > 5) {
  console.log("Number is bigger than 5");
} else if (convert > 4) {
  console.log("Number is bigger than 4");
  console.log("Number is bigger than 3");
  console.log("Number is bigger than 2");
} else {
  console.log("Not sure");
}
*/

/*
convert >= 7
  ? console.log("show this")
  : convert > 5
  ? console.log("Number is bigger than 5")
  : convert > 4
  ? console.log("Number is bigger than 4")
  : console.log("Not sure");
  */
/*
if (convert >= 7) {
  neededValue = "A very big value";
} else {
  neededValue = "The value is not as big";
}

const neededValue =
  convert >= 7 ? "A very big value" : "The value is not as big";

console.log(neededValue);
*/

// if (convert == 7) {
// } else if (convert === 5) {
// } else {
// }

switch (convert) {
  case 7:
  case 6:
  case 5:
  case 4:
  case 3:
    console.log("Number is bigger than 3");
    break;
  case 2:
    console.log("Number is 2");
    break;
  default:
    console.log("I do not recognize this number");
}

console.log("End");
