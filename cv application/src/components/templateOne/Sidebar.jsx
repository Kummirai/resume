import Contacts from "./Contacts";
import Education from "./Education";
import Reference from "./Reference";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Education />
      <Reference />
      <Contacts />
    </div>
  );
};

export default Sidebar;
