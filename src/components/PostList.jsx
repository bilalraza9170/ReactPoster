import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function enteredBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function enteredAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <div>
      {modalIsVisible ? (
        <Modal onClose={closeModalHandler}>
          <NewPost
            onBodyChange={enteredBodyHandler}
            onAuthorChange={enteredAuthorHandler}
          />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Bilal" body="React.js is awesome!" />
        <Post author="Bilal" body="React.js is awesome!" />
      </ul>
    </div>
  );
}

export default PostList;
