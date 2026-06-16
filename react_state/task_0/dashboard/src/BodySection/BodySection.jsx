function BodySection({ title, children }) {
  return (
    <div className="bodySection px-10 py-2.5">
      <h2 className="text-2xl text-[var(--main-color)] mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default BodySection;
