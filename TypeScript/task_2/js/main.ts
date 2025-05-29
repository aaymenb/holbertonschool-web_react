interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Create sample data
const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);
const employee3 = createEmployee('$500');

// Create container
const container = document.createElement('div');
container.style.maxWidth = '1200px';
container.style.margin = '50px auto';
container.style.padding = '20px';
container.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

// Create title
const title = document.createElement('h1');
title.textContent = 'Employee Management System';
title.style.textAlign = 'center';
title.style.color = '#2c3e50';
title.style.marginBottom = '40px';
title.style.fontSize = '2.5em';
title.style.fontWeight = '600';
title.style.textShadow = '2px 2px 4px rgba(0,0,0,0.1)';
container.appendChild(title);

// Create status card
const createStatusCard = (title: string, content: any) => {
  const card = document.createElement('div');
  card.style.marginBottom = '30px';
  card.style.padding = '25px';
  card.style.backgroundColor = '#ffffff';
  card.style.borderRadius = '15px';
  card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
  card.style.cursor = 'pointer';

  // Hover effect
  card.onmouseover = () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
  };
  card.onmouseout = () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  };

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = title;
  cardTitle.style.color = '#3498db';
  cardTitle.style.marginBottom = '15px';
  cardTitle.style.fontSize = '1.5em';
  cardTitle.style.borderBottom = '2px solid #f0f0f0';
  cardTitle.style.paddingBottom = '10px';
  card.appendChild(cardTitle);

  const contentDiv = document.createElement('div');
  contentDiv.style.backgroundColor = '#f8f9fa';
  contentDiv.style.padding = '20px';
  contentDiv.style.borderRadius = '10px';
  contentDiv.style.fontSize = '1.1em';
  contentDiv.style.lineHeight = '1.6';

  // Format content with better styling
  const formattedContent = Object.entries(content).map(([key, value]) => {
    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    return `<div style="margin-bottom: 10px;">
      <strong style="color: #2c3e50;">${formattedKey}:</strong>
      <span style="color: #34495e; margin-left: 10px;">${value}</span>
    </div>`;
  }).join('');

  contentDiv.innerHTML = formattedContent;
  card.appendChild(contentDiv);

  return card;
};

// Add employee status cards
container.appendChild(createStatusCard('👨‍💼 Employee 1 (Salary: 200)', {
  type: employee1 instanceof Director ? 'Director' : 'Teacher',
  workStatus: executeWork(employee1),
  homeStatus: employee1.workFromHome(),
  breakStatus: employee1.getCoffeeBreak()
}));

container.appendChild(createStatusCard('👨‍💼 Employee 2 (Salary: 1000)', {
  type: employee2 instanceof Director ? 'Director' : 'Teacher',
  workStatus: executeWork(employee2),
  homeStatus: employee2.workFromHome(),
  breakStatus: employee2.getCoffeeBreak()
}));

container.appendChild(createStatusCard('👨‍💼 Employee 3 (Salary: $500)', {
  type: employee3 instanceof Director ? 'Director' : 'Teacher',
  workStatus: executeWork(employee3),
  homeStatus: employee3.workFromHome(),
  breakStatus: employee3.getCoffeeBreak()
}));

// Add teaching schedule
const scheduleSection = document.createElement('div');
scheduleSection.style.marginTop = '40px';
scheduleSection.style.padding = '30px';
scheduleSection.style.backgroundColor = '#ffffff';
scheduleSection.style.borderRadius = '15px';
scheduleSection.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';

const scheduleTitle = document.createElement('h2');
scheduleTitle.textContent = '📚 Teaching Schedule';
scheduleTitle.style.color = '#2c3e50';
scheduleTitle.style.marginBottom = '20px';
scheduleTitle.style.fontSize = '1.8em';
scheduleTitle.style.borderBottom = '2px solid #f0f0f0';
scheduleTitle.style.paddingBottom = '10px';
scheduleSection.appendChild(scheduleTitle);

const scheduleContent = document.createElement('div');
scheduleContent.innerHTML = `
  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
    <div style="margin-bottom: 15px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
      <p style="margin: 0; font-size: 1.1em;">
        <span style="color: #3498db; font-weight: bold;">📐 Math Class:</span>
        <span style="margin-left: 10px; color: #34495e;">${teachClass('Math')}</span>
      </p>
    </div>
    <div style="padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
      <p style="margin: 0; font-size: 1.1em;">
        <span style="color: #3498db; font-weight: bold;">📚 History Class:</span>
        <span style="margin-left: 10px; color: #34495e;">${teachClass('History')}</span>
      </p>
    </div>
  </div>
`;
scheduleSection.appendChild(scheduleContent);
container.appendChild(scheduleSection);

// Add to document
document.body.appendChild(container); 