function generic<T>(a: T, b?: T):T[]{
return b?[a,b]:[a]
}
console.log(generic<number>(12,54));
console.log(generic<string>("Sahadev ","Dahit"));
console.log(generic<Array<number>>([12,34]));