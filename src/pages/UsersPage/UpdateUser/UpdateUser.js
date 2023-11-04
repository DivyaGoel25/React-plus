import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const validationSchema = yup.object().shape({
  nameInput: yup.string().required("Name is mandatory"),
  phoneInput: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  emailInput: yup
    .string()
    .email("Enter valid email")
    .required("Email is mandatory"),
});

const UpdateUser = () => {
  const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid }, // here
  } = useForm({ mode: "onChange", resolver: yupResolver(validationSchema) });

  useEffect(() => {
    // this will be after the initial rendering
    // ideal place for you to hit the rest api
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        let defaultValues = {};
        defaultValues.nameInput = res.data.name;
        defaultValues.phoneInput = 9876543210;
        defaultValues.emailInput = res.data.email;
        reset({ ...defaultValues });
        trigger();
      })

      .catch((err) => {
        console.log(err);
        setIsError(true);
      })

      .finally(() => {
        console.log("it is over!");
        setIsLoading(false);
      });
  }, []);

  const handleUpdateUser = (data) => {
    const formData = {
      name: data.nameInput,
      phone: data.phoneInput,
      email: data.emailInput,
    };

    console.log(formData);

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${userId}`, formData)
      .then((res) => {
        console.log(res);
        toast.success("Updated Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })

      .catch((err) => {
        console.log(err);

        toast.error("Error !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })

      .finally(() => {
        console.log("It is over!");
      });
  };

  return (
    <div className="row">
      <ToastContainer />
      <h1>Update User</h1>

      <div className="col-md-4 offset-md-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-secondary"
        >
          Go Back
        </button>

        <form onSubmit={handleSubmit(handleUpdateUser)}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>

            <input
              {...register("nameInput")}
              type="text"
              className="form-control"
              id="nameInput"
            />

            {errors.nameInput && (
              <p role="alert"> {errors.nameInput.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone
            </label>

            <input
              {...register("phoneInput")}
              type="number"
              className="form-control"
              id="phoneInput"
            />

            {errors.phoneInput && (
              <p role="alert"> {errors.phoneInput.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>

            <input
              {...register("emailInput")}
              type="email"
              className="form-control"
              id="emailInput"
            />

            {errors.emailInput && (
              <p role="alert"> {errors.emailInput.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
