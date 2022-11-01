function multiply(a: number, b: number): void{
console.log(a*b);
}
multiply(2,3);


//fat arrow function
let sum=(a:number,b?:number):number =>{
return  b?a+b:a;
}
console.log(sum(3,6))