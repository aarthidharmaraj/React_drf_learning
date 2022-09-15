import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { TrashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUser } from "../store/action/actions";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";
const DisplayUsers = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector((state) => state.usersdata);
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleRemoveUser = (id) => {
    if (
      window.confirm(
        "The user will be deleted Permamnently! Are you sure to Remove the user?"
      )
    ) {
      dispatch(deleteUser(id));
      alert("The user has been removed");
      dispatch(loadUsers());
    }
  };
  const handleEditUser = (id) => {
    // console.log("edit", id);
    navigate(`/edituser/${id}`);
    // navigate(`edituser/:${id}`);
  };
  return (
    <div>
      {/* <Button onClick={() => history.push("/addUser")}>AddUser</Button> */}
      <Table striped="rows">
        <thead>
          {/* {Object.keys(users).map((key, index) => {
            return (
              <tr key={index}>
                <th>
                  {{ key }}: {users[key]}
                </th>
              </tr>
            );
          })} */}
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
            <th>Action</th>
            {/* <th>EDIT</th>
            <th>REMOVE</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {Object.values(users).map((value, index) => {
            return (
              <tr key={index}>
                <td>{{ value }}</td>
              </tr>
            );
          })} */}
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.FULL_NAME}</td>
                <td> {user.USERNAME}</td>
                <td> {user.GENDER}</td>
                <td> {user.DATE_OF_BIRTH}</td>
                <td> {user.CONTACT_NUMBER}</td>
                <td> {user.EMAIL_ADDRESS}</td>
                <td> {user.MARITAL_STATUS}</td>
                <td> {user.PERMANENT_ADDRESS}</td>
                <td>
                  <ButtonGroup className="mb-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEditUser(user.id)}
                    >
                      EDIT
                    </Button>
                    <Button variant="danger" size="lg">
                      <TrashFill
                        onClick={() => handleRemoveUser(user.id)}
                      ></TrashFill>
                    </Button>
                  </ButtonGroup>
                </td>
                {/* <td>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                      EDIT
                    </Button>
                  </div>
                </td>
                <td>
                  <Button variant="outline-danger" size="lg">
                    <TrashFill
                      onClick={() => handleRemoveUser(user.id)}
                    ></TrashFill>
                  </Button> 
                </td>*/}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayUsers;
