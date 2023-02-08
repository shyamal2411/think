const User ={
    name: "Shyamal",
    email: "sgp@dal.ca",
    isActive: true
}

function createUser ({name: string, isPaid: boolean}){
    
}

createUser({name: "Shyamal", isPaid: true})

// function createCourse() <-function parameter
// function createCourse():{} <- function return type
// function createCourse(){}{} <- function definition

function createCourse():{name:string, price:number}{
    // return {name: "React", price: 100}
    return {"React", 100}
}

console.log(createCourse());

export{}