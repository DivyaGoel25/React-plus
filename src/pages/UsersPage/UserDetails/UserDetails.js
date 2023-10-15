import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetails = () => {
  // Read url param using react-router-dom
  const { userId } = useParams();
  console.log(userId);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);

  const handleUpdateUser = () => {
    let url = "update";

    navigate(url, { replace: true });
  };
  const handleDeleteUser = () => {
    axios

      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)

      .then((res) => {
        console.log(res);

        toast.success("User deleted successfully!", { position: "top-right" });

        setTimeout(function () {
          navigate(-1);
        }, 6000);
      })

      .catch((err) => {
        console.log(err);

        setIsError(true);
      })

      .finally(() => {
        console.log("it is over!");

        setIsLoading(false);
      });
  };
  useEffect(() => {
    // this will be after the initial rendering
    // ideal place for you to hit the rest api
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
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

  return (
    <div className="row mt-2">
      <h1>User Details</h1>
      {isLoading && <div className="spinner-border"></div>}

      {isError && (
        <div className="alert alert-danger">
          Some Error Occurred. Try again later
        </div>
      )}

      {!isError && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              #{user.id} {user.name}
            </h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Email: {user.email}
            </h6>
            <p className="card-text">Phone: {user.phone}</p>
            <button
              type="button"
              onClick={handleUpdateUser}
              className="btn btn-secondary"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={handleDeleteUser}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
