import React, { useEffect, useState } from "react";
import instance from "../api/api_instance.js";
import { TrashFill } from "react-bootstrap-icons";

export default function RegisteredUsers() {
  const [registeredUsers, setRegisteredUsers] = useState();
  useEffect(() => {
    instance
      .get("http://localhost:8000/employee_user/")
      .then((response) => {
        setRegisteredUsers(response.data);
      })
      .catch((error) => {
        alert("Cannot fetch details", error);
      });
  });
  const handleRemoveUser = (event, id) => {
    // console.log(id);
    instance
      .delete(`http://localhost:8000/employee_user/${id}`)
      .then((response) => {
        alert("The user has been removed successfully");
      })
      .catch((error) => {
        alert("Cannot remove the user");
        // console.log(error);
      });
  };
  // handleUpdateUser = (event, id) => {
  //   instance
  //     .put(`http://localhost:8000/employee_user/${id}`)
  //     .then((response) => {
  //       alert("The user details has been updated");
  //     })
  //     .catch((errror) => {
  //       alert("Cannot update the user");
  //     });
  // };
  const handleUpdateUser = (event, id) => {
    event.preventDefault();
    let formField = new FormData();
    console.log(formField);
    // formField.append("", title || p.title);
    // formField.append("slug", slug);
    // formField.append("description", description || p.description);
    // formField.append("price", price);
    // formField.append("active", active);
    // formField.append("soldout", soldout);
    // formField.append("image", image || p.image);

    // instance
    //   .put("http://localhost:8000/employee_user/".products.update(), formField)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  };
  return (
    <div>
      <h2>The details of registered users</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>FULL NAME</th>
            <th>USERNAME</th>
            <th>GENDER</th>
            <th>DATE_OF_BIRTH</th>
            <th>CONTACT NUMBER</th>
            <th>EMAIL ADDRESS</th>
            <th>MARITAL STATUS</th>
            <th>PERMANENT ADDRESS</th>
            <th>EDIT</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers &&
            registeredUsers.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.FULL_NAME}</td>
                <td> {users.USERNAME} </td>
                <td>{users.GENDER}</td>
                <td>{users.DATE_OF_BIRTH} </td>
                <td>{users.CONTACT_NUMBER}</td>
                <td>{users.EMAIL_ADDRESS}</td>
                <td>{users.MARITAL_STATUS}</td>
                <td>{users.PERMANENT_ADDRESS}</td>
                <td>
                  <div onClick={(e) => handleUpdateUser(e, users.id)}></div>
                </td>
                <td>
                  <TrashFill
                    onClick={(e) => handleRemoveUser(e, users.id)}
                  ></TrashFill>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
