const Rating = ({ rates }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={rates}
        value={rates}
      />
      <label className="form-check-label" htmlFor={rates}>
        {rates}
      </label>
    </div>
  );
};

export default Rating;
