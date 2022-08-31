import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import { useRef } from "react";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const refName = nameInputRef.current.value;
    const refAge = ageInputRef.current.value;
    console.log(refName, refAge);

    if (refName.trim().length === 0 || refAge.trim().length === 0) {
      setError({
        tile: "Invalid Input",
        message: "Please enter valid name and age.",
      });
      return;
    }
    if (+refAge < 0) {
      setError({
        tile: "Invalid Age",
        message: "Please enter valid age.",
      });
      return;
    }
    props.onAddUser(refName, refAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card propClass={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="usernma">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
