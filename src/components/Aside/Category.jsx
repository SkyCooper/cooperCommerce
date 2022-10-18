const Category = ({ category }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        name={category}
        id={category}
        value={category}
      />
      <label className="form-check-label" htmlFor={category}>
        {category}
      </label>
    </div>
  );
};

export default Category;
