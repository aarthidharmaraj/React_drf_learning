import React from "react";
import Table from "react-bootstrap/Table";
import { TrashFill } from "react-bootstrap-icons";
import { displayUsers, deleteUser } from "../store/action/actions";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { bindActionCreators } from "redux";
import { Navigate } from "react-router-dom";
// import EditUser from "../pages/EditUser";

const mapStateToProps = (state) => {
  const users = state.usersdata;
  return users;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      displayUsersData: displayUsers,
      deleteUserData: deleteUser,
    },
    dispatch
  );
};

class DisplayUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.displayUsersData();
  }

  render() {
    let users = this.props.users;
    const handleRemoveUser = (id) => {
      if (
        window.confirm(
          "The user will be deleted Permamnently! Are you sure to Remove the user?"
        )
      ) {
        this.props.deleteUserData(id);

        alert("The user has been removed");
      }
    };

    const handleEditUser = (id) => {
      console.log(id);
      //   <EditUser />;
      //   this.props.navigate(`/edituser/${id}`);
      //   <NavLink to={`/edituser/${id}`}>sdfjn</NavLink>;
      //   <Navigate to={`/edituser/${id}`} replace={true} />;
      //   this.props.history.push("/edituser", { id });
      window.open(`/edituser/${id}`);
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUsers);
