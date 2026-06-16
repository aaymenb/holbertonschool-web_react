function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  if (isHeader) {
    const rowClass = 'bg-table-header opacity-[66%]';
    const thClass = 'border border-gray-400 p-2';
    if (textSecondCell === null) {
      return (
        <tr className={rowClass}>
          <th colSpan="2" className={`${thClass} text-center`}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={rowClass}>
        <th className={thClass}>{textFirstCell}</th>
        <th className={thClass}>{textSecondCell}</th>
      </tr>
    );
  }

  const tdClass = 'border border-gray-400 pl-2';
  return (
    <tr className="bg-table-rows opacity-[45%]">
      <td className={tdClass}>{textFirstCell}</td>
      <td className={tdClass}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
