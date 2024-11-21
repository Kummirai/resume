// eslint-disable-next-line react/prop-types
const Input = ({ id, type, name, placeholder }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
