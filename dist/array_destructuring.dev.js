"use strict";

var arr = [{
  id: 1,
  name: "Dahit",
  address: "Lalpur"
}, {
  id: 2,
  name: "Sahadev",
  address: "Attriya"
}, {
  id: 3,
  name: "tihad",
  address: "Dhangadhi"
}];
arr.map(function (value, key) {
  var id = value.id,
      name = value.name,
      address = value.address;
  console.log("ID" + id);
  console.log("Name is " + name);
  console.log("And Address is " + address);
});