let user1 = {
    name: "user",
    email: "",
    password: "",
    getName(){
        console.log(this);  // this refers to the user1 object
        return this.name;  // this refers to the user1 object
    }
}
console.log(user1.getName());

console.log("------");

// Or, we can also use the object name instead of this keyword to access the properties of the object, but it is not recommended because it will not work if we change the name of the object or if we want to reuse the method for another object.

let user2 = {
    name: "user",
    email: "",
    password: "",
    getName(){
        console.log(this);  
        return user2.name; 
    }
}
console.log(user2.getName());
console.log("------");


let user3 = {
    name: "user",
    email: "",
    password: "",
    getName: () =>{
        console.log(this);  // arrow functions do not have their own this, they inherit this from the surrounding context (the window / global object in this case)
        return this.name;  // this refers to the window / global object, which does not have a name property, so it will return undefined
    }
}
console.log(user3.getName());

console.log("------");

// So, solution is given below, we can user arrow function inside the method to access the properties of the object, because arrow functions do not have their own this, they inherit this from the surrounding context (user4 object in this case)

let user4 = {
    name: "user",
    email: "",
    password: "",
    getName(){
        const func = () => {
            console.log(this);  // this refers to the user4 object, because arrow functions do not have their own this, they inherit this from the surrounding context (user4 object in this case)
            return this.name;  // this refers to the user4 object, so it will return "user"
        }
        return func();
    }

}
console.log(user4.getName());

console.log("------");



//* this => object

function globalFunc(){
    console.log(this);  // this refers to the global object (window in browsers)
}
globalFunc();


//! class

class User{
    // name;
    // email;
    #password;  // private property defined with # symbol

    // constuctor
    constructor(name,email,password){
        this.name = name;   // this refers to the instance of the class that is being created
        this.email = email;
        this.#password = password;
    }

    getPassword(){
        return this.#password
    }
}

const ram = new User("Ram","ram@gmail.com","12345678");
const hari = new User("Hari","ram@gmail.com","87654321");

console.log(ram);
console.log(ram.name);
// console.log(ram.#password); // Property is not accessible
console.log(ram.getPassword()); 
console.log(hari.getPassword()); 




//TODO: class Student {name, email, password, rollno, phoneNo, faculty}

class Student extends User{ // Student class inherits from User class, so it can access the properties and methods of the User class

    // #password; // private property must be defined before the constructor

    constructor(name, email, password, rollno, phoneNo, faculty){
        super(name,email,password);  // call the constructor of the parent class (User) to initialize name, email, and password
        // this.name = name;
        // this.email = email;
        // this.#password = password;
        this.rollno = rollno;
        this.phoneNo = phoneNo;
        this.faculty = faculty;
    }
    // getPassword(){
    //     return this.#password;
    // }
    // display(){
    //     console.log(this.name)
    //     console.log(this.email)
    //     console.log(this.#password)
    //     console.log(this.rollno)
    //     console.log(this.phoneNo)
    //     console.log(this.faculty)
    // }
};


const john = new Student("John", "john@gmail.com", "12345678", 22, 9800959580, "IT");
// john.display();
// console.log("------");
const dipak = new Student("Dipak", "dipak@gmail.com", "12341234", 11, 9800959581, "CS");
// dipak.display();
console.log("------");
console.log(john);
console.log("------");
console.log(dipak);
console.log("------");
console.log(john.getPassword());  // this will call the getPassword method from the User class, which will return the password of the john object



// !static 
// properties 
// methods

// calculator

class Calculator{
    // add 
    static app_name = "Simple Calculator"; // instance property, it will be created for each instance of the Calculator class

    static add(a,b){
        return a+b;
    }

    // sub
    static sub(a,b){
        return a-b;
    }

    // div
    static div(a,b){
        return a/b;
    }
}

console.log(Calculator.add(12, 23)); // TypeError: Calculator.add is not a function, because add is an instance method, it can only be called on an instance of the Calculator class. // NoError: After making it static, we can call it directly on the class without creating an instance, which will return 35

// const calc1 = new Calculator();
// console.log(calc1.add(12, 23)); // Before dm and mf were static, this will call the add method on the calc1 instance, which will return 35 but after making dm and mf static, it is can not create an instance to call the add method, because it is a static method, we can call it directly on the class as shown above. So, it will return error if we try to call it on an instance, because static methods are not accessible through instances of the class.


