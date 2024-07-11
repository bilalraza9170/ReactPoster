import classes from "./NewPost.module.css";
import { useNavigate, Form, redirect } from "react-router-dom";

import Modal from "../components/Modal";

function NewPost() {
  const navigate = useNavigate();

  function navigateToPosts() {
    navigate("/");
  }

  return (
    <Modal>
      <Form method="Post" className={classes.form}>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={navigateToPosts}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData=await request.formData();
  const postData=Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect('..');
}
