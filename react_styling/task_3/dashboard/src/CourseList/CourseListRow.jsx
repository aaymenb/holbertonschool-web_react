function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  if (isHeader) {
    const thClass = 'border border-gray-400 bg-table-header/66 p-2';
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2" className={`${thClass} text-center`}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr>
        <th className={thClass}>{textFirstCell}</th>
        <th className={thClass}>{textSecondCell}</th>
      </tr>
    );
  }

  const tdClass = 'border border-gray-400 bg-table-rows/45 pl-2';
  return (
    <tr>
      <td className={tdClass}>{textFirstCell}</td>
      <td className={tdClass}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
