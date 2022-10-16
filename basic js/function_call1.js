//function call and function apply is similar
//but function call takes arguements separately
//whereas function apply takes arguements as an array

const object1 = {
    fullname: function(address) {
        return (this.firstname + " " + this.lastname + " from " + address + "  ❣️");

    }
}
const person1 = {
    firstname: "sahadev",
    lastname: "Dahit"
}
const person2 = {
    firstname: "Love",
    lastname: "Robin"
}
console.log(object1.fullname.call(person1, "Lalpur"));
console.log(object1.fullname.call(person2, "Dhangadhi"));
console.log(object1.fullname.apply(person1, ["Attariya"]));
console.log(object1.fullname.apply(person2, ["kathmandu"]));