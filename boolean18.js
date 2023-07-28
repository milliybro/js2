let x1 = 7;
let y1 = 1;

let x2 = 8;
let y2 = 2;

resx = Math.abs(x1 - x2);
resy = Math.abs(y1 - y2);

let res = (resx == 1 && resy == 0) || (resx == 0 && resy == 1) || (resx == 1 && resy == 1);

console.log(res);