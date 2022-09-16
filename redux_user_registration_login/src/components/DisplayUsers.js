import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { TrashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { displayUsers, deleteUser } from "../store/action/actions";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

const DisplayUsers = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector((state) => state.usersdata);

  useEffect(() => {
    dispatch(displayUsers());
  }, []);

  const handleRemoveUser = (id) => {
    if (
      window.confirm(
        "The user will be deleted Permamnently! Are you sure to Remove the user?"
      )
    ) {
      dispatch(deleteUser(id));
      alert("The user has been removed");
      dispatch(displayUsers());
    }
  };

  const handleEditUser = (id) => {
    navigate(`/edituser/${id}`);
  };

  return (
    <div>
      <Table striped="rows">
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
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
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayUsers;
