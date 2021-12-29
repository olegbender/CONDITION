'use strict';

// if (1) {
//   console.log('Ok!');
// } else {
//   console.log('Not ok!');
// }

const num = 50;

// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('To few!');
// } else {
//   console.log('In point!');
// }

//num === 50 ? console.log(true) : console.log(false);
switch (num) {
  case 49:
    console.log('Wrong!');
    break;
  case 100:
    console.log('Wrong!');
    break;
  case 51:
    console.log('True!');
    break;
  default:
    console.log('Nothing!');
    break;
}
