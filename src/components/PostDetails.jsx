import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";
import { useState } from "react";

function PostDetails() {
  const post = useLoaderData();

  // State to control the visibility of the modal
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle the modal's visibility
  //   function toggleModal() {
  //     setIsVisible((previousState) => !previousState);
  //   }

  // Check if the post data is available
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to="/" className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  // Render the modal with the post details
  return (
    isVisible && (
      <Modal>
        <main className={classes.details}>
          <Link to="/">
            <p className={classes.author}>{post.author}</p>
            <p className={classes.text}>{post.body}</p>
            {/* Add a close button or similar to allow users to close the modal */}
            {/* <button onClick={toggleModal}>Close</button> */}
          </Link>
        </main>
      </Modal>
    )
  );
}

export default PostDetails;

// Your loader function remains unchanged
export async function loader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.postId);
  const resData = await response.json();
  return resData.post;
}
