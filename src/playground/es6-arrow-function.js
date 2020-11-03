// const square = function(x){
//     return x * x;
// };
// console.log(square(4));

// const squareArrow = (x) =>{
//     return x * x;
// };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(6));

const getFirstName = (fullName) => fullName.split(' ')[0];
const getLasttName = (fullName) => fullName.split(' ')[1];

const name = 'First last';

console.log(getFirstName(name));
console.log(getLasttName(name));
