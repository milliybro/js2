"Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil"

let abc = 909;

c = abc % 10;
b = Math.trunc((abc % 100) / 10);
a = Math.trunc(abc / 100);

res = a==c;

console.log(res);