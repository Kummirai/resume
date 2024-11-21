import Main from "./Main";
import "./template.css";
import Sidebar from "./Sidebar";

const TemplateOne = () => {
  return (
    <div className="template-container">
      <Sidebar />
      <Main />
    </div>
  );
};

export default TemplateOne;
