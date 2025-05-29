/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

// Create a teacher
const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
};

// Create subjects
const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

// Set teacher for each subject
cpp.setTeacher(cTeacher);
react.setTeacher(cTeacher);
java.setTeacher(cTeacher);

// Test the subjects
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nReact');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('\nJava');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher()); 