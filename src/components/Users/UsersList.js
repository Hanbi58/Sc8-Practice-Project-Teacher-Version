import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card propClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old) {user.key}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
