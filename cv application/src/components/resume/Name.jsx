import Input from "./Input";
import Textarea from "./Textarea";
import { useState, createContext } from "react";

const InputContext = createContext();

const Name = () => {
  const [name, setName] = useState("");
  const getName = (event) => {
    setName(() => event.target.value);
  };
  return (
    <form className="my-form">
      <h1>Create Resume`</h1>
      <h2 className="name-jobtitle">Name & Job Title</h2>
      <hr />
      <div className="name-title">
        <InputContext.Provider value={name}>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full name"
            getInput={getName}
            value={name}
          />
        </InputContext.Provider>

        <Input
          type="text"
          id="JobTitle"
          name="JobTitle"
          placeholder="JobTitle"
        />
      </div>

      <h2 className="name-jobtitle">About</h2>
      <hr />
      <Textarea
        id="about"
        name="about"
        row="10"
        col="70"
        placeholder="A brief desrciption about you ..."
      />

      <h2 className="name-jobtitle">Work Experience</h2>
      <hr />
      <div className="name-title">
        <div>
          <p>From</p>
          <Input
            type="date"
            id="year"
            name="year"
            placeholder=" Period 2010 - 2012"
          />
        </div>
        <div>
          <p>To</p>
          <Input type="date" id="to" name="to" placeholder="2012" />
        </div>
      </div>
      <div className="position name-title">
        <Input
          type="text"
          id="position"
          name="position"
          placeholder="Positon / Job Title"
        />
      </div>
      <Textarea
        id="about"
        name="about"
        row="20"
        col="70"
        placeholder="Add work experience , press add button and add another work experience and press add button"
      />
      <button>Add</button>

      <h2 className="name-jobtitle">Skills</h2>
      <hr />
      <Textarea
        id="about"
        name="about"
        row="10"
        col="70"
        placeholder="Add a Skill , press add button and add another skill and press add button"
      />
      <button>Add</button>

      <h2 className="name-jobtitle">Education</h2>
      <hr />
      <div className="position name-title">
        <Input
          type="text"
          id="major"
          name="major"
          placeholder="Degree / Certificate / Other"
        />
      </div>
      <div className="name-title">
        <div>
          <p>From</p>
          <Input
            type="date"
            id="year"
            name="year"
            placeholder=" Period 2010 - 2012"
          />
        </div>
        <div>
          <p>To</p>
          <Input type="date" id="to" name="to" placeholder="2012" />
        </div>
      </div>
      <div className="position name-title">
        <Input
          type="text"
          id="university"
          name="university"
          placeholder="Name of  School or University"
        />
      </div>
      <button>Add</button>
      <h2 className="name-jobtitle">Reference</h2>
      <hr />
      <div className="name-title">
        <Input type="text" id="refName" name="refName" placeholder="Name" />
        <Input
          type="text"
          id="refJobTitle"
          name="JrefobTitle"
          placeholder="Position"
        />
      </div>
      <div className="name-title">
        <Input type="text" id="company" name="company" placeholder="Company" />
        <Input type="tel" id="refTel" name="refTel" placeholder="Cell number" />
      </div>
      <button>Enter Reference Above And Click Add</button>
      <h2 className="name-jobtitle">Contact Details</h2>
      <hr />
      <div className="name-title">
        <Input type="tel" id="phone" name="phone" placeholder="Phone" />
        <Input type="Email" id="email" name="email" placeholder="Email" />
      </div>
      <div className="name-title">
        <Input
          type="address"
          id="address"
          name="address"
          placeholder="Address"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export const Heading = () => {
  return (
    <div className="heading">
      <h1 className="resume-owner">
        {name} <span>Kumirai</span>
      </h1>
      <p className="owner-title">Web Developer</p>
    </div>
  );
};

export const WorkExperience = () => {
  return (
    <div className="about-me">
      <h2>Work Experience</h2>
      <hr />
      <div className="work-exp-cont">
        <p className="work-exp-year">2013 - 2015</p>
        <div className="work-exp-details">
          <p className="work-exp-title">Web Developer</p>
          <p className="work-exp-comp">codeWithMilton</p>
          <p className="work-exp-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            minus.
          </p>
        </div>
      </div>
      <div className="work-exp-cont">
        <p className="work-exp-year">2015 - 2017</p>
        <div className="work-exp-details">
          <p className="work-exp-title">Frontend Developer</p>
          <p className="work-exp-comp">Google</p>
          <p className="work-exp-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <hr />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt porro
        sint non id recusandae dolorem perspiciatis ipsum reprehenderit ex ipsa.
      </p>
    </div>
  );
};

export const Contacts = () => {
  return (
    <div className="about-me">
      <div>
        <p>Phone</p>
        <p>+27 782 677 436</p>
      </div>
      <div>
        <p>Email</p>
        <p>ajaxmilton@hotmail.com</p>
      </div>
      <div>
        <p>Address</p>
        <p>10 Clarence St</p>
        <p>Regents Park</p>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="about-me">
      <h2>Skills</h2>
      <hr />
      <ul className="skills-container">
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>NODE JS</li>
        <li>JavaScript</li>
        <li>Boostrap</li>
      </ul>
    </div>
  );
};

export const Education = () => {
  return (
    <div className="about-me">
      <div>
        <h2>Education</h2>
        <hr />
        <p>Soft Development</p>
        <p>BYU</p>
        <p>2015 - 2019</p>
      </div>
      <div>
        <p>Soft Development</p>
        <p>BYU</p>
        <p>2015 - 2019</p>
      </div>
    </div>
  );
};

export const Reference = () => {
  return (
    <div className="about-me">
      <div>
        <h2>Reference</h2>
        <hr />
        <p>Cole Baidoo</p>
        <p>Director</p>
        <p>+44 457 2564</p>
      </div>
      <div>
        <p>Cole Baidoo</p>
        <p>Director</p>
        <p>+44 457 2564</p>
      </div>
    </div>
  );
};

export default Name;
