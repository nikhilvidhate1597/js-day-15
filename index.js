// // console.log("Working");

// // function Student(name, greater,age){
// //     this.name = name;
// //     this.greater = greater;
// //     this.age = age;
// // }

// // const student1= new Student(Ravi, Male, 22);
// // const student2= new Student(Nikhil, Male, 22);
// // const student3= new Student(Mari, feMale, 22);

// // console.log(student1,student2,student3);
// let employee1 = {

//     name: "Rahul",
//     designation: "CSE",
//     id: 111,
//     //     showDetails: function(age, gender) {
//     //         console.log(this.name, this.id, this.designation);
//     //     }
// }

// // function showDetails(){
// //     console.log()
// // }

// // employee1.showDetails();

// let employee2 = {

//     name: "Karan",
//     designation: "IT",
//     id: 112,

// }

// let employee3 = {

//     name: "Raju",
//     designation: "ECE",
//     id: 113,

// }

// // employee1.showDetails.call(employee2); //passing the 
// // function add() {
// //     console.log("I am an addition fn");
// // }

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 3, 4, 5];

// let student1 = {
//     fname: "Sidhant",
//     lname: "Gupta",
//     age: 23,
// }

// let student2 = {
//     fname: "Raju",
// }

// // student2.__proto__ = student1;
// // console.log(student2);

// // console.log(arr1.__proto__);
// // console.log(arr1.__proto__.__proto__);
// // console.log(arr1.__proto__.__proto__.__proto__);

// let employee = {

//     name: "Rahul",
//     designation: "CSE",
//     id: 111,
//     // showDetails: function(age, gender) {
//     //     console.log(this.name, this.id, this.designation);
//     // }

// }

// function showDetails(age, gender) {
//     console.log(this.name, this.id, this.designation, age, gender);
// }


// showDetails.call(employee2, 22, "m");
// showDetails.call(employee1, 22, "m");
// showDetails.call(employee3, 22, "m");

// showDetails.apply(employee3, [22, "m"]);
// showDetails.apply(employee3), [22, "m"];
// showDetails.apply(employee3, [22, "m"]);

// showDetails.bind(employee1)(23, "M");
// let res2 = showDetails.bind(employee2);
// res2(22, "m")
// let res3 = showDetails.bind(employee3);
// res3(22, "m")



//..............................

const StudentPrototype = {
    calcAge() {
        console.log(2022 - this.bYear);
    },
    initialise(fname, lname, bYear) {
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }


}
const remash = Object.create(StudentPrototype);

remash.fname = "Remash";
remash.lname = "Thakur";
remash.bYear = "1990";

remash.calcAge();

console.log(remash);

const kirsten = Object.create(StudentPrototype);
console.log(kirsten);

kirsten.initialise("Kristen", "Stewart", 1986);
kirsten.calcAge();

console.log(kirsten);


//Classes - 

//Classes in js dosnot work exactly the some way an that of classes in java/c++
//they are just a syntactic suga prototype instances that we have read. 
//they are special kind of function with some variations
// 1. classes are also first class funtion 
//2. classes are not hoisted/ donot support hoisting

const ClassPrototype = class {
    constructor(fname, lname, bYear) {
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
    calcAge() {
        console.log(2022 - this.bYear)
    }

}
const jarvis = new ClassPrototype("Jarvis", "Valley", 1982);
console.log(jarvis);
jarvis.calcAge();

console.log(jarvis.__proto__);

ClassPrototype.prototype.great = function() {
    console.log("Hii I am Someone")
}
jarvis.great();
console.log(jarvis.__proto__);

console.log("22" + 22);
console.log("Hi" + 22);

console.log(2022 - "1988");
console.log(2022 / "2");
console.log(2022 * "2");
console.log(2022 % "2");

console.log(2 ^ "2");
console.log("22" ^ 2);


// function showDetails(){
//     console.log()
// }

// employee1.showDetails();

// let employee2 = {

//     name: "Karan",
//     designation: "IT",
//     id: 112,

// }


// function add() {
//     console.log("I am an addition fn");
// }
// let arr = (1, 2, 3, 4, 5);
// let arr1 = (5, 6, 7, 8, 9);
// let arr2 = (5, 6, 7, 8, 9);


// let student1 = {
//     fname: "Nikhil",
//     lname: "Vidhate",
//     age: 18,
// }

// let student2 = {
//     fname: "Raju",
// }
// student2.__proto__ = student1;
// console.log(student2)
// console.log(student2.lname);

// console.log(arr1.__proto__);
// console.log(arr1.__proto__.__proto__);

// // let employee4 = {}

// let employee1 = {
//     name: "Raju",
//     degegnation: "Nashik",
//     id: 45,
//     showDitals: function(Parrams) {
//         console.log(this.name, this.degegnation, this.id);
//     }
// }
// employee1.showDitals();




// // let employee2 = {
// //     fname: "Ram",
// //     degegnation: "Pune",
// //     id: 54,
// // }
// // let employee3 = {
// //     fname: "Raju",
// //     degegnation: "Mumbai",
// //     Id: 55,
// // }
// // employee2.__proto__ = employee1;
// // console.log(employee1);
// // console.log(employee1.fname);
// // console.log(employee1.id);
// // console.log(employee1.degegnation);

// // employee3.__proto__ = employee2;
// // console.log(employee2);
// // console.log(employee2.fname);
// // console.log(employee2.id);
// // console.log(employee2.degegnation);

// // employee4.__proto__ = employee3;
// // console.log(employee3);
// // console.log(employee3.fname);
// // console.log(employee3.Id);
// // console.log(employee3.degegnation);