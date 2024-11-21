import Input from "./Input";
import Textarea from "./Textarea";

const Name = () => {
  return (
    <form className="my-form">
      <h2 className="name-jobtitle">Name & Job Title</h2>
      <div className="name-title">
        <Input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full name"
        />
        <Input
          type="text"
          id="JobTitle"
          name="JobTitle"
          placeholder="JobTitle"
        />
      </div>
      <h2 className="name-jobtitle">About</h2>
      <Textarea
        id="about"
        name="about"
        row="10"
        col="70"
        placeholder="A brief desrciption about you ..."
      />
      <h2 className="name-jobtitle">Work Experience</h2>
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
        row="10"
        col="70"
        placeholder="Add work experience , press add button and add another work experience and press add button"
      />
      <button>Add</button>
    </form>
  );
};

export default Name;
