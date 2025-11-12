// object create by object literal

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

// object create by object instance

let person2 = new Object();

person2.firstname= "monayem";
person2.lastname= "hossain";
person2.age= 50;

person2.getFullName=()=>{
`my name is ${person2.firstname}  ${person2.lastname}`
}

console.log(person2)
