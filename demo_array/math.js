let array = [0,1,2,3,4];
let arrNew = Array.from(array, x => x * x);
console.log(arrNew);
// 等同于
let arrNew = Array.from(array).map(x => x * x);