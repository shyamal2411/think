function addTwo(num: number) {
  // num.toUpperCase()
  return num + 2;
}

addTwo(5); //function shows 'any' which is a problem
// addTwo("5") //still a problem

// below, the arguement number says that the num should necessarily be a number, and after
//  the arguement, the number says that function should return a number - both are different
function addTwo2(num: number): number {
  // return num + "2";
  return num + 2;
}
addTwo2(5);

function getUpper(val: String) {
  return val.toUpperCase();
}

getUpper("Shyamal");

function signUpUser(name: string, email: string, isPaid: boolean) {
  return name + " " + email + " " + isPaid;
}

signUpUser("Shyamal", "gmail.com", true);

function getValue(myval: number) {
  if (myval > 10) {
    return true;
  }
  return "200";
}

const getHello = (s: string): string => {
  return "";
};

// const heros = ["SG", "DS"]
const heros = [1, 2, 3]; //typesript is smart enough to identify itself that the array is a number array, strigs etc.

heros.map((hero) => {
  return `hero is ${hero}`;
});

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errormsg: string): void {
  console.log(errormsg);
}

// For handling errors, there is a special type called 'never', 
// which means the function never returns anything.
// close to the 'void', but used for errors.
//function throws an exeption or terminates the program
function handleError(errormsg: string): never {
  throw new Error(errormsg);
}

export {};
