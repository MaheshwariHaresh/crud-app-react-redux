import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../states/reducers/UserReducer";
import { toast } from "react-toastify";

const UpdatePage = () => {
  const { id } = useParams();
  let userId = Number(id);
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((item) => item.id === userId);
  const { name, email } = existingUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        email: updateEmail,
      })
    );
    toast.success("User Updated Successfully");
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Your Name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
