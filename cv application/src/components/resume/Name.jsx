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

export default Name;
