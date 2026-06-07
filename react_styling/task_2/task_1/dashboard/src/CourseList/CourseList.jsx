import WithLogging from '../HOC/WithLogging';
import CourseListRow from './CourseListRow';

function CourseList({ courses = [] }) {
  return (
    <div className="w-4/5 mx-auto my-5">
      <table id="CourseList" className="w-full border-collapse">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader
          />
        </thead>
        <tbody>
          {courses.length === 0 ? (
            <CourseListRow textFirstCell="No course available yet" />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
