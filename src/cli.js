"use strict";

function randomKey() {
  var abc = "abcdefghijklmnopqrstuvyxwzABCEDEFGHIJKLMNOPQRSTUVYWXZ0123456789";
  var max = abc.length;
  function key(arg1, i) {
    if (i == 6) return arg1;
    var index = Math.floor(Math.random() * max);
    var letter = abc[index];
    arg1 += letter;
    return key(arg1, ++i);
  }
  try {
    return key("", 0);
  } catch (e) {
    return "ko";
  }
}

function deBounce(func, timeout) {
  //   let timer: NodeJS.Timeout;
  var timer;
  return () => {
    // var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(args);
    }, timeout);
  };
}

var result = deBounce(function () {
  var res = randomKey();
  console.log(res);
}, 2000);
result();
setTimeout(function () {
  return result();
}, 1000);
setTimeout(function () {
  return result();
}, 1500);
