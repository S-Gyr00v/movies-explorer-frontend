import "./Label.css"

function Label({ text, name, type, value, setValue }) {
  return (
    <label className="label">
      <p className="label__text">{text}</p>
      <input
        className='label__input'
        type={type}
        name={name}
        value={value[name] || ""}
        onInput={setValue}
        required
      />
    </label>
  );
}

export default Label;
