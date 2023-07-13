"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

// You are given an object that contains name and age of some customers
// Write a function that returns an array of strings that follow the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]

const customerAndAge = (obj) => {
  // write your code here
  let Name_age_arr = [];
  const Names = Object.keys(obj);
  const Age = Object.values(obj);
  for (let i = 0; i < Names.length; i++) {
    Name_age_arr[i] = "Customer Name :" + Names[i] + " , Age :" + Age[i];
  }
  return Name_age_arr;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02
// Required:
//
// Write a function that takes recipe info object and returns an array of recipe info as strings
// as in the example

// Input:
// let recipeInfo = {
//   name: "pizza",
//   ingredients: ["bread", "tomato", "chicken", "mayo"],
//   cookTime: "twoHours",
//   price: "25$",
// };
//
// Output:
// ["name: pizza", "ingredients: bread,tomato,chicken,mayo", "cookTime: twoHours", "price: 25$"]
//
// Note:
// You can solve this challenge by using Object.entries

const getEntries = (obj) => {
   // write your code here
   let recipe = Object.entries(obj);
   for (let i = 0; i < recipe.length; i++) {
     recipe[i]= recipe[i].toString(); 
     recipe[i]= recipe[i].replace(',', ': '); 
     
   }
   return  recipe; 
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:

// Write a function that takes an array of objects (courses) and returns object of 2 new arrays
// first one is containing the names of all of the courses in the data set.
// second one is containing the names of all the students

const courses = [
  {
    course: 'Java',
    Instructor: 'David',
    Students: ['Lincoln', 'Ruth', 'Briana', 'Suzy', 'Greta'],
    GroupName: 'Stars',
  },
  {
    course: 'JavaScript',
    Instructor: 'Van',
    Students: ['Alphonso', 'Daley', 'Dax', 'Karter', 'Jorja'],
    GroupName: 'Nerd-ware',
  },
  {
    course: 'Python',
    Instructor: 'Delaney',
    Students: ['Barney', 'Kalé', 'Alisha'],
    GroupName: 'Whats-Up',
  },
  {
    course: 'DotNet',
    Instructor: 'Keanna',
    Students: ['Oli', 'Gisselle', 'Pru'],
    GroupName: 'Lol',
  },
];

const getInfo = (arr) => {
  let coursesName = [];
  let studentsName = [];
  let count=0; 
  // write your code here
  for (const iterator of arr) {
    coursesName[count]= iterator.course; 
    for (let i = 0; i < iterator.Students.length; i++) {
      studentsName.push(iterator.Students[i]); 
    }

    count ++; 
  }
  

  return { coursesName, studentsName };
};
// -------------------------------------------------------------------------------------------------------

//  ------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:

// The Head manager wants to get more organized info about some students, he wants you to find the students from the courses dataset
// and return their info following the below structure
//
// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output: 
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

let test1 = ['Kalé', 'Alisha','Alphonso', 'Briana'];


const getStudents = (arr) => {
  // write your code here

  let Std_course = []; 
  let Stud_info = function(std_name, cor){
    this.Student=std_name;
    this.course=cor;
  }; 

  for (const name of test1 ) {
    for (const iterator of arr) {
      for (let i = 0; i < iterator.Students.length; i++) {
        if (name == iterator.Students[i]){
          Std_course.push( new Stud_info(name, iterator.course)); 
        }

      }
    }
  }
  return Stud_info; 
};
//  ------------------------------------------------------------------------------------------------------

module.exports = {
  customerAndAge,
  getEntries,
  courses,
  getInfo,
  getStudents,
};
