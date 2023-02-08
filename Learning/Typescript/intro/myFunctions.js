"use strict";
exports.__esModule = true;
function addTwo(num) {
    num.toUpperCase();
    return num + 2;
}
addTwo(5); //function shows 'any' which is a problem
// addTwo("5") //still a problem
function addTwo2(num) {
    return num + 2;
}
addTwo2(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Shyamal");
function signUpUser(name, email, isPaid) {
    return (name + " " + email + " " + isPaid);
}
signUpUser("Shyamal", "gmail.com", true);
