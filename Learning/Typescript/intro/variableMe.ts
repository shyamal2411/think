let greetings: string = "Hello Shyamal";

greetings.toLowerCase()
console.log(greetings);

let userId: number = 24.12;
// let userId = 24.12;
// userId = "Shyamal"; //wont work because we have declared userId as number
console.log(userId);
userId.toFixed()

// boolean
let isUserLoggedIn: boolean = true;
console.log(isUserLoggedIn);

// any
let hero;
// When typescript doesn't know the type of a variable, it is of type any
// so assign it any value, to avoid errors
let heroo: string;
function getHero(){
    return "SG"
}

hero = getHero();

export {}