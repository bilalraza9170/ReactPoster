import Post from "./Post";
import styles from "./PostList.module.css";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  return (
    <div>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              body={post.body}
              author={post.author}
            />
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
