/*
const data = {
    schoolName: "Al Farouk",
    capacity: 1000,
    grades: [
      {
        grade: "First",
        numberOfClasses: 3,
        classes: [
          {
            avg: 0,
            classNumber: "01",
            classScores: [89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49],
          },
          {
            avg: 0,
            classNumber: "02",
            classScores: [
              87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100,
            ],
          },
          {
            avg: 0,
            classNumber: "03",
            classScores: [74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70],
          },
        ],
      },
      {
        grade: "Second",
        numberOfClasses: 2,
        classes: [
          {
            avg: 0,
            classNumber: "01",
            classScores: [71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60],
          },
          {
            avg: 0,
            classNumber: "02",
            classScores: [86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70],
          },
        ],
      },
      {
        grade: "Third",
        numberOfClasses: 2,
        classes: [
          {
            avg: 0,
            classNumber: "01",
            classScores: [11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58],
          },
          {
            avg: 0,
            classNumber: "02",
            classScores: [62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42],
          },
        ],
      },
      {
        grade: "Forth",
        numberOfClasses: 4,
        classes: [
          {
            avg: 0,
            classNumber: "01",
            classScores: [63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52],
          },
          {
            avg: 0,
            classNumber: "02",
            classScores: [
              100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49,
            ],
          },
          {
            avg: 0,
            classNumber: "03",
            classScores: [97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87],
          },
          {
            avg: 0,
            classNumber: "04",
            classScores: [
              64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72,
            ],
          },
        ],
      },
    ],
  };
  


//console.log(data.grades[0].classes[0].avg); 

let sum=0; 

for (let i = 0; i < data.grades.length; i++) {
   for (let j = 0; j < data.grades[i].classes.length; j++) {
        for (let index = 0; index < data.grades[i].classes[j].classScores.length; index++) {
            sum+= data.grades[i].classes[j].classScores[index]; 
        }
        data.grades[i].classes[j].avg=Math.round(sum/data.grades[i].classes[j].classScores.length);
        console.log(data.grades[i].classes[j].avg);
        console.log(sum);
        sum=0; 
   }
}

console.log(data); 




// class-08 - Q1  
let names = {
  "Romio Joliat": 35,
  "Mario Ristrova": 39,
  "Sofia firnando": 50,
};


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
console.log( customerAndAge(names)); 



// class-08 - Q2
let recipeInfo = {
  name: "pizza",
  ingredients: ["bread", "tomato", "chicken", "mayo"],
  cookTime: "twoHours",
  price: "25$",
};


const getEntries = (obj) => {
   // write your code here
   let recipe = Object.entries(obj);
   for (let i = 0; i < recipe.length; i++) {
     recipe[i]= recipe[i].toString(); 
     recipe[i]= recipe[i].replace(',', ': '); 
     
   }
   return  recipe; 
};

console.log( getEntries(recipeInfo));



// class-08 - Q3
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

  
  console.log(coursesName, studentsName);
  return { coursesName, studentsName };
};
getInfo(courses);




// class-08 - Q4
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

let Names= ["Daley", "Pru"];


const getStudents = (arr) => {
  // write your code here
  let Std_course = []; 
  let Stud_info = function(std_name, cor){
    this.Student=std_name;
    this.course=cor;
  }; 

  for (const name of Names) {
    for (const iterator of arr) {
      for (let i = 0; i < iterator.Students.length; i++) {
        if (name == iterator.Students[i]){
          Std_course.push( new Stud_info(name, iterator.course)); 
        }

      }
    }
  }
  console.log(Std_course);
 
};

getStudents(courses); 


*/


