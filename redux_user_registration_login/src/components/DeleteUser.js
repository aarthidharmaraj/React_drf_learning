import { useDispatch } from "react-redux";
import { deleteUser } from "../store/action/actions";
import { loadUsers } from "../store/action/actions";
const DeleteUser = (props) => {
  console.log(props.id);
  let dispatch = useDispatch();
  if (
    window.confirm(
      "The user will be deleted Permamnently! Are you sure to Remove the user?"
    )
  ) {
    dispatch(deleteUser(props.id));
    dispatch(loadUsers());
  }
};
export default DeleteUser;
