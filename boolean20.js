let x1 = 7;
let y1 = 1;

let x2 = 8;
let y2 = 3;

resx = Math.abs(x1 - x2);
resy = Math.abs(y1 - y2);

let res = (resx == 1 && resy == 2) || (resx == 2 && resy == 1);

console.log(res);