import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";
function PostList({ isPosting, onStopPost }) {
  const [posts, setPosts] = useState([]);

  function addPost(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <div>
      {isPosting ? (
        <Modal onClose={onStopPost}>
          <NewPost onClose={onStopPost} onAddPost={addPost} />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post body={post.body} author={post.author} />
        ))}
      </ul>
    </div>
  );
}

export default PostList;
