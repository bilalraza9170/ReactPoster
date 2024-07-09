import styles from "./Post.module.css";
function Post(props) {
  return (
    <div className={styles.post}>
      <h1 className={styles.author}>{props.author}</h1>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}

export default Post;

// const names = ["Bilal", "Raza"];

// function Post() {
//   const random = Math.random();
//   const chosenName = random > 0.5 ? names[0] : names[1];
//   console.log(random);
//   return (
//     <div>
//       <h1>{chosenName}</h1>
//       <p>React.js is awesome!</p>
//     </div>
//   );
// }

// export default Post;
