"use strict";
exports.__esModule = true;
var User = {
    name: "Shyamal",
    email: "sgp@dal.ca",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Shyamal", isPaid: true });
// function createCourse() <-function parameter
// function createCourse():{} <- function return type
// function createCourse(){}{} <- function definition
function createCourse() {
    return { name: "React", price: 100 };
}
console.log(createCourse());
