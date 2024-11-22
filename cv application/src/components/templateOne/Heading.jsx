import { useContext } from "react";

const Heading = () => {
  const name = useContext(InputContext);
  return (
    <div className="heading">
      <h1 className="resume-owner">
        {name} <span>Kumirai</span>
      </h1>
      <p className="owner-title">Web Developer</p>
    </div>
  );
};

export default Heading;
