"use strict";
exports.__esModule = true;
var greetings = "Hello Shyamal";
greetings.toLowerCase();
console.log(greetings);
var userId = 24.12;
// let userId = 24.12;
// userId = "Shyamal"; //wont work because we have declared userId as number
console.log(userId);
userId.toFixed();
// boolean
var isUserLoggedIn = true;
console.log(isUserLoggedIn);
// any
var hero;
// When typescript doesn't know the type of a variable, it is of type any
// so assign it any value, to avoid errors
var heroo;
function getHero() {
    return "SG";
}
hero = getHero();
