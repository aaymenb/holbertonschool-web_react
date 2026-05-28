import { render } from '@testing-library/react';
import CourseList from './CourseList';

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('CourseList component', () => {
  test('renders 5 rows when 3 courses are provided (2 header rows + 3 body rows)', () => {
    const { container } = render(<CourseList courses={coursesList} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(5);
  });

  test('renders 1 body row with "No course available yet" when courses is empty', () => {
    const { container } = render(<CourseList courses={[]} />);
    const bodyRows = container.querySelectorAll('tbody tr');
    expect(bodyRows).toHaveLength(1);
    expect(bodyRows[0]).toHaveTextContent('No course available yet');
  });
});
