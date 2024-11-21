import Label from "./Label";

// eslint-disable-next-line react/prop-types
const Input = ({ id, type, name, placeholder }) => {
  return (
    <div className="input-field">
      <Label for="fullName" label="Full Name" />
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
