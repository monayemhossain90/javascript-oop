// class variable object function

class Person{
    firstname="monayem";
    lastname="hossain";
    age = 50;
    getFullName=()=>{
        return `this is me ${this.firstname} ${this.lastname}`
    }
};

// create instance of Person

let personObj = new Person();
console.log(personObj.age)

console.log(personObj)