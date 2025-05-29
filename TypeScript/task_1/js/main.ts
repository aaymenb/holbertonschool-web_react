interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create sample data
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const student = new StudentClass('John', 'Doe');

// Create container
const container = document.createElement('div');
container.style.maxWidth = '800px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.fontFamily = 'Arial, sans-serif';

// Create title
const title = document.createElement('h1');
title.textContent = 'School Management System';
title.style.textAlign = 'center';
title.style.color = '#333';
title.style.marginBottom = '30px';
container.appendChild(title);

// Create sections
const createSection = (title: string, content: any) => {
  const section = document.createElement('div');
  section.style.marginBottom = '30px';
  section.style.padding = '20px';
  section.style.backgroundColor = '#f8f8f8';
  section.style.borderRadius = '8px';
  section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  sectionTitle.style.color = '#009879';
  sectionTitle.style.marginBottom = '15px';
  section.appendChild(sectionTitle);

  const contentDiv = document.createElement('div');
  contentDiv.innerHTML = `<pre>${JSON.stringify(content, null, 2)}</pre>`;
  contentDiv.style.backgroundColor = '#fff';
  contentDiv.style.padding = '15px';
  contentDiv.style.borderRadius = '4px';
  section.appendChild(contentDiv);

  return section;
};

// Add sections
container.appendChild(createSection('Teacher Information', teacher3));
container.appendChild(createSection('Director Information', director1));
container.appendChild(createSection('Student Information', {
  name: student.displayName(),
  status: student.workOnHomework()
}));

// Add to document
document.body.appendChild(container); 