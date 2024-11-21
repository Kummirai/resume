const Input = ({ id, type, name }) => {
  return (
    <div>
      <input type={type} name={name} id={id} />
    </div>
  );
};

export default Input;
