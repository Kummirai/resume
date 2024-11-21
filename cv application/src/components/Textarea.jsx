// eslint-disable-next-line react/prop-types
const Textarea = ({ name, id, col, row, placeholder }) => {
  return (
    <textarea
      className="about"
      name={name}
      id={id}
      cols={col}
      rows={row}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
