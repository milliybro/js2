"Ushbu sonning raqamlari ketama-ket osuvchi bolib joylashgan"

let abc=178;

c= abc%10;
b= Math.trunc((abc%100)/10);
a= Math.trunc(abc/100);

res= a<b&&b<c;

console.log(res);