"A, B, C sonlardan faqat ikkitasi musbat son"

let A = 9;
let B = -5;
let C = 1;

res = A > 0 && B > 0 && C < 0 || A > 0 && B > 0 && C < 0 || A < 0 && B > 0 && C > 0  ;

console.log(res);
