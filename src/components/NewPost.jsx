import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function enteredBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function enteredAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    props.onAddPost(postData);
    props.onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Body</label>
        <textarea id="body" required rows={3} onChange={enteredBodyHandler} />
      </p>

      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={enteredAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
