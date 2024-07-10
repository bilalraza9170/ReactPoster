import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";
function PostList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);

  function addPost(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <div>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onClose={onStopPost} onAddPost={addPost} />
        </Modal>
      ) : null}

      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>No posts found.</h1>
          <p>Start adding some!</p>
        </div>
      )}
    </div>
  );
}

export default PostList;
