
const person = {
    firstname:"mm",
    lastname:"hossain",
    age:32,
    getName: ()=>{
        return `${person.firstname}  ${person.lastname}`
    },

}

// console.log(person.getName())

// create instance of object

const people = new Object();
 
people.firstname = "abdul";
people.lastname = "karim";
people.age = 32;
people.isBangladeshi = true;
people.getName = ()=>{
    return `${people.firstname}  ${people.lastname}`
}

// console.log(people)
console.log(people.getName())