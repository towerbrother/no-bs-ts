"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchdata = exports.printFormat = exports.format = exports.addDefaultStrings = exports.addStrings = exports.addNumbers = void 0;
var addNumbers = function (a, b) {
    return a + b;
};
exports.addNumbers = addNumbers;
var addStrings = function (str1, str2) {
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
var addDefaultStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = "tvb"; }
    return "".concat(str1, " ").concat(str2);
};
exports.addDefaultStrings = addDefaultStrings;
/* union type (|) - one parameter can be of different types */
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
var fetchdata = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchdata = fetchdata;
/* multiple arguments and coalesce them into an array */
var introduce = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
};
exports.introduce = introduce;
/* types are enforced at compile-time not run-time */
/* with this implementation there is no type checking */
// export const getName = (user: { first: string; last: string }): string => {
//   return `${user.first} ${user.last}`;
// };
/* better implementation */
var getName = function (user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "first", " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "last");
};
exports.getName = getName;
