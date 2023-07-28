"Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega";

let abc = 451;

c = abc % 10;
b = Math.trunc((abc % 100) / 10);
a = Math.trunc(abc / 100);

res = (a < b && b < c) || (a > b && b > c);

console.log(res);
