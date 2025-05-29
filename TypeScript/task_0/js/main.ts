interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'London'
};

const studentsList: Student[] = [student1, student2];

// Create container
const container = document.createElement('div');
container.style.maxWidth = '800px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.fontFamily = 'Arial, sans-serif';

// Create title
const title = document.createElement('h1');
title.textContent = 'Student Directory';
title.style.textAlign = 'center';
title.style.color = '#333';
title.style.marginBottom = '30px';
container.appendChild(title);

// Create table
const table = document.createElement('table');
table.style.width = '100%';
table.style.borderCollapse = 'collapse';
table.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)';
table.style.borderRadius = '8px';
table.style.overflow = 'hidden';

// Create table header
const thead = document.createElement('thead');
thead.style.backgroundColor = '#009879';
thead.style.color = '#ffffff';

const headerRow = document.createElement('tr');
const headers = ['First Name', 'Last Name', 'Age', 'Location'];
headers.forEach(header => {
  const th = document.createElement('th');
  th.textContent = header;
  th.style.padding = '12px 15px';
  th.style.textAlign = 'left';
  headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table body
const tbody = document.createElement('tbody');
tbody.style.backgroundColor = '#f8f8f8';

studentsList.forEach((student, index) => {
  const row = document.createElement('tr');
  row.style.borderBottom = '1px solid #dddddd';
  if (index % 2 === 0) {
    row.style.backgroundColor = '#ffffff';
  }

  // First Name
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.padding = '12px 15px';
  row.appendChild(firstNameCell);

  // Last Name
  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = student.lastName;
  lastNameCell.style.padding = '12px 15px';
  row.appendChild(lastNameCell);

  // Age
  const ageCell = document.createElement('td');
  ageCell.textContent = student.age.toString();
  ageCell.style.padding = '12px 15px';
  row.appendChild(ageCell);

  // Location
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  locationCell.style.padding = '12px 15px';
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
container.appendChild(table);

// Add some additional information
const info = document.createElement('div');
info.style.marginTop = '20px';
info.style.textAlign = 'center';
info.style.color = '#666';
info.innerHTML = `
  <p>Total Students: ${studentsList.length}</p>
  <p>Average Age: ${(studentsList.reduce((acc, student) => acc + student.age, 0) / studentsList.length).toFixed(1)}</p>
`;
container.appendChild(info);

// Add to document
document.body.appendChild(container); 