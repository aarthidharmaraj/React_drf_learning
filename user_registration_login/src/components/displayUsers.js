import React from "react";
import { connect } from "react-redux";
import { displayUser } from "../store/action/index";
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
class DisplayUsers extends React.Component {
  state = {
    showUsers: true,
  };
  toggleUser() {
    this.setState({ showUsers: false });
  }
  render() {
    if (this.state.showUsers) {
      return (
        <div>
          <h1> The Details of Registered Users</h1>
          <div>
            {/* <button
              onClick={() => {
                // this.toggleUser();
                this.props.dispatch(displayUser());
              }}
            >
              DISPLAY USERS
            </button> */}
          </div>
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
              {this.props.data.map((users) => (
                <tr key={users.id}>
                  {/* {users.map((user) => (
                    <td>{user}</td> */}
                  {/* ))} */}
                  <td>{users.FULL_NAME}</td>
                  <td> {users.USERNAME} </td>
                  <td>{users.GENDER}</td>
                  <td>{users.DATE_OF_BIRTH} </td>
                  <td>{users.CONTACT_NUMBER}</td>
                  <td>{users.EMAIL_ADDRESS}</td>
                  <td>{users.MARITAL_STATUS}</td>
                  <td>{users.PERMANENT_ADDRESS}</td>
                  {/* <td>
                    <div onClick={(e) => handleUpdateUser(e, users.id)}></div>
                  </td>
                  <td>
                    <TrashFill
                      onClick={(e) => handleRemoveUser(e, users.id)}
                    ></TrashFill>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps)(DisplayUsers);
