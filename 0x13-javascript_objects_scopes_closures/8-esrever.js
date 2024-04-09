#!/usr/bin/node
exports.esrever = function (list) {
  let ary2 = [];
  for (let i = list.length - 1; i >= 0; i--) {
    ary2.push(list[i]);
  }
  return ary2;
};
