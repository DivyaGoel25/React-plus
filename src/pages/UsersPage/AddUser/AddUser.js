import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate(); // Get the navigate function

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        data
      );

      console.log(response);

      alert("Saved Successfully");

      // Clear the form after successful submission

      reset();

      // Navigate back

      navigate(-1); // Use -1 to navigate back one step in the history
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Create New User</h1>

      <div className="position-relative">
        <button
          type="button"
          className="btn btn-secondary position-absolute top-0 end-0 m-3"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left"></i> Go Back
        </button>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>

                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      id="nameInput"
                      placeholder="Enter your name"
                    />
                  )}
                />

                {errors.name && (
                  <p className="invalid-feedback">This field is required</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone
                </label>

                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true,maxLength:10}}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      id="phoneInput"
                      placeholder="Enter your phone number"
                    />
                  )}
                />

                {errors.phone && errors.phone.type === "required" && (
                  <p className="invalid-feedback">This field is required</p>
                )}

                {errors.phone && errors.phone.type === "maxLength" && (
                  <p className="invalid-feedback">
                    Phone number should be max 10 digits
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address
                </label>

                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern:
                      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      id="emailInput"
                      placeholder="Enter your email"
                    />
                  )}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="invalid-feedback">This field is required</p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="invalid-feedback">
                    Please enter a valid email address
                  </p>
                )}
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
