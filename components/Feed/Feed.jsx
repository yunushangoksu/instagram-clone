import React from "react";
import styles from "./Feed.module.css";
import Storyrow from "../Storyrow/Storyrow";
import Postcard from "../Postcard/Postcard";
function Feed() {
  return (
    <div className={styles.Feedwrapper}>
      <Storyrow />
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
  );
}

export default Feed;
