function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  if (isHeader) {
    const rowStyle = {
      backgroundColor: 'var(--color-table-header)',
      opacity: 0.66,
    };
    const thClass = 'border border-gray-400 p-2';
    if (textSecondCell === null) {
      return (
        <tr style={rowStyle}>
          <th colSpan="2" className={`${thClass} text-center`}>
            {textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr style={rowStyle}>
        <th className={thClass}>{textFirstCell}</th>
        <th className={thClass}>{textSecondCell}</th>
      </tr>
    );
  }

  const rowStyle = {
    backgroundColor: 'var(--color-table-rows)',
    opacity: 0.45,
  };
  const tdClass = 'border border-gray-400 pl-2';
  return (
    <tr style={rowStyle}>
      <td className={tdClass}>{textFirstCell}</td>
      <td className={tdClass}>{textSecondCell}</td>
    </tr>
  );
}

export default CourseListRow;
