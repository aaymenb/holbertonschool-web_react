import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

const wrap = (ui) => render(<table><tbody>{ui}</tbody></table>);

describe('CourseListRow component', () => {
  describe('when isHeader is true', () => {
    test('renders one th with colspan=2 when textSecondCell is null', () => {
      const { container } = wrap(
        <CourseListRow isHeader textFirstCell="Available courses" />
      );
      const ths = container.querySelectorAll('th');
      expect(ths).toHaveLength(1);
      const header = screen.getByRole('columnheader');
      expect(header).toHaveAttribute('colspan', '2');
      expect(header).toHaveTextContent('Available courses');
    });

    test('renders two th cells when textSecondCell is not null', () => {
      const { container } = wrap(
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      );
      const ths = container.querySelectorAll('th');
      expect(ths).toHaveLength(2);
      expect(ths[0]).toHaveTextContent('Course name');
      expect(ths[1]).toHaveTextContent('Credit');
    });
  });

  describe('when isHeader is false', () => {
    test('renders two td elements within a tr', () => {
      const { container } = wrap(
        <CourseListRow textFirstCell="ES6" textSecondCell={60} />
      );
      const tr = container.querySelector('tr');
      expect(tr).toBeInTheDocument();
      const tds = tr.querySelectorAll('td');
      expect(tds).toHaveLength(2);
      expect(tds[0]).toHaveTextContent('ES6');
      expect(tds[1]).toHaveTextContent('60');
    });
  });
});
