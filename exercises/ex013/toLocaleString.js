// number.toLocaleString(locale, {options});

let num = 12345.789;
num = num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(num);

let num2 = 10;
num2 = num2.toLocaleString(undefined, { style: "percent" });
console.log(num2);

let num3 = 200;
num3 = num3.toLocaleString(undefined, { style: "unit", unit: "fahrenheit" });
console.log(num3);

let num4 = 200;
num4 = num4.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(num4);
