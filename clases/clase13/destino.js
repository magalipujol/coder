"use strict";

var obj = {
  name: 'Coder'
};
var name = obj === null || obj === void 0 ? void 0 : obj.name;
var lista = [1, 2, 3];
lista.map(function (item) {
  return item * 2;
}).forEach(function (item) {
  return console.log(item);
});
