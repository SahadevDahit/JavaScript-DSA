"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var user = [{
  username: "Admin",
  password: "1234"
}, _objectSpread({}, biodata)];
console.log(user); // console.log(biodata[1].name)
// biodata.map((value, key) => {
//     console.log(key)
//     console.log(value.name)
//     console.log(value.contact)
// })

var display = function display(data) {
  console.log(data);
}; // 
// biodata.map(value => {
//     display(value.name)
// })