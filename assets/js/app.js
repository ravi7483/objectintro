console.log("app.js file");

// var fname = "john";
// var lname = "doe";
// var profile ="MEAN Stack";
// var place = "puna";

// console.log(fname);
// console.log(lname);
// console.log(profile);
// console.log(place);

// Object :- where we can store multiple information in the form of key value pairs,
//           which are seprated by comma.



var person = {
    fname : "johne",
    lname: "doe",
    profile : "MEAN Stack",
    place : "puna",
    candrive : true
}

console.log(person,typeof person);

var getProfile = person.profile;
console.log(getProfile,typeof getProfile);

var getFname = person.fname;
console.log(getFname,typeof getFname);

var getLname = person.lname;
console.log(getLname, typeof getLname);

person.age = 30;
console.log(person);

var getAge = person.age;
console.log(getAge,typeof getAge);

var getCandrive = person.candrive;
console.log(getCandrive,typeof getCandrive);

// person.place = "udgir";
// console.log(person);

// delete person.place;
// console.log(person);


// if we want to add new key value pairs in object
// object.keyName = value

person.nickName = "jhonny";
console.log(person);

// write only = read only

// if we want to remove any key : value pairs form object, use 'delete objectName.keyName'

delete person.age;
console.log(person);

person.place = "london";
console.log(person);


var person1 = {
    fname : "tony ",
    lname : "stark",
    nickName : "IronMan",
    indu : "stark indu",
    age : 55
}

// to get any info / data from object

console.log(person1);

// get value from object
var getNickname = person1.nickName;
console.log(getNickname);
console.log(person1.age);

var getName = person1.fname + person1.age;
console.log(getName);

// delete

delete person1.nickName;
console.log(person1);

// change value of object key 

person1.age = 45;
console.log(person1);


// Create // Add key and value from outside of the object

person1.country = "us"
console.log(person1);

person1.country = "indian";
console.log(person1);

person1.country = "india";
console.log(person1);

person1.country = "Hindustan";
console.log(person1);

person1.country = "Bharat";
console.log(person1);

person1.state = "Maharastra";
console.log(person1);

person1.state = "karnataka";
console.log(person1);

person1.state = "Andrepradesh";
console.log(person1);


// change value of object key

person1.country = "india";
console.log(person1);

person1.age = 60;
console.log(person1);

person1.fname = "peter";
console.log(person1);

person1.lname = "parkar";
console.log(person1);

person1.indu = "still man";
console.log(person1);

person1.age = 65;
console.log(person1);

person1.country = "us";
console.log(person1);


// delete key and value pairs of object

delete person1.fname;
console.log(person1);

delete person1.lname ;
console.log(person1);

delete person1.indu;
console.log(person1);

delete person1.age;
console.log(person1);

delete person1.state;
console.log(person1);

delete person1.country;
console.log(person1);