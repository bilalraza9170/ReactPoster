import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPost={closeModalHandler} />
      </main>
    </>
  );
  // return <main>
  //   <Post />
  //   <Post />
  //   <Post />
  // </main>
}

export default App;
