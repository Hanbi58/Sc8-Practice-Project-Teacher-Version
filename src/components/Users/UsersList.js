import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card propClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
