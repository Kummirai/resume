// eslint-disable-next-line react/prop-types
const Input = ({ id, type, name, placeholder, value }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
};

export default Input;
