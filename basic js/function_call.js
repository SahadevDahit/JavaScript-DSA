//function call and function apply is similar
//but function call takes arguements separately
//whereas function apply takes arguements as an array
const object1 = {
    fullname: function name() {
        return (this.firstname + " " + this.lastname);

    }
}
const person1 = {
    firstname: "sahadev",
    lastname: "Dahit"
}
const person2 = {
    firstname: "Love",
    lastname: "Destruction"
}
console.log(object1.fullname.call(person1));
console.log(object1.fullname.call(person2));

console.log(object1.fullname.apply(person1));
console.log(object1.fullname.apply(person2));