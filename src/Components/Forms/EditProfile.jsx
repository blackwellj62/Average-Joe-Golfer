export const EditProfile = () => {
  return (
    <form className="form-container">
      <fieldset>
        <div className="form-name">
          <h3>Name:</h3>
          <input
            className="form-control"
            type="text"
            placeholder="User Name Here"
            name="name"
            required
          ></input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-email">
          <h3>Email:</h3>
          <input
            className="form-control"
            type="text"
            placeholder="User Email Here"
            name="email"
            required
          ></input>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-experience">
          <h3>Years of Experience:</h3>
          <input
            className="form-control"
            type="text"
            placeholder="User Experience Here"
            name="experience"
            required
          ></input>
        </div>
      </fieldset>
    </form>
  );
};
