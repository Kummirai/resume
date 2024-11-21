import Input from "./Input";

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
    </form>
  );
};

export default Name;
