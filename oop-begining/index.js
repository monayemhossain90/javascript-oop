const person= {
    firstname:"monayem",
    lastname:"hossain",
    age:30,
    getFullName:()=>{
         return `Hi I am ${person.firstname} ${person.lastname}`;
    
    }

}

console.log(person.firstname);
console.log(person.getFullName());