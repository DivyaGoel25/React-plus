const AddUser = () => {
  return (
    <div className="row">
      <h1>Create New User</h1>
      <div className="col-md-4 offset-md-4">
        <button type="button" className="btn btn-secondary">Go Back</button>
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="nameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phoneInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="emailInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;