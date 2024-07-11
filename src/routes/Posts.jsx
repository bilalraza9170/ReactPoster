import PostList from "../components/PostList";

import { Outlet } from "react-router-dom";
// import {loader} from "./react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
  // return <main>
  //   <Post />
  //   <Post />
  //   <Post />
  // </main>
}

export default Posts;

export async function loader(){
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
