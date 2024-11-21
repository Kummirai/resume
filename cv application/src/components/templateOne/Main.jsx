import AboutMe from "./AboutMe";
import Heading from "./Heading";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";

const Main = () => {
  return (
    <div className="main">
      <Heading />
      <AboutMe />
      <WorkExperience />
      <Skills />
    </div>
  );
};

export default Main;
