import { Contacts, Education, Reference } from "../resume/Name";

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
