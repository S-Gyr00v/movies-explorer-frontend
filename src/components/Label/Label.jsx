import "./Label.css"

function Label({ text, name, type }) {
  return (
    <label className="label">
      <p className="label__text">{text}</p>
      <input
        className='label__input'
        type={type}
        name={name}
      />
    </label>
  );
}

export default Label;
