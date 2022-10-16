"use strict";

var biodata = [{
    name: "Sahadev",
    contact: 9800
}, {
    name: "Dahit",
    contact: 7788
}, {
    name: "Robin",
    contact: 9988
}];
var user = {
    username: "Admin",
    password: "1234"
}; // console.log(biodata[1].name)
biodata.map((value, key) => {
    console.log(key)
    console.log(value.name)
    console.log(value.contact)
})

var display = function display(data) {
    console.log(data);
}; // 
// biodata.map(value => {
//     display(value.name)
// })