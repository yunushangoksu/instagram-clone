import React from "react";
import Image from "next/image";
import styles from "./Postcard.module.css";

function Postcard() {
  return (
    <div className={styles.PostcardWrapper}>
      <div className={styles.TopRow}>
        <Image
          src="https://picsum.photos/200"
          width={36}
          height={36}
          alt="Poster Profile Pic"
          className={styles.TopRowLogo}
        />
        <div className={styles.TopRowName}>
          <div className={styles.name}>yunushangoksu</div>
          <div>•</div>
          <div>19s</div>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <Image
          src="https://picsum.photos/200"
          fill
          alt="Post"
          className={styles.Post}
        />
      </div>
      <div className={styles.PostButtonRow1}>
        <div className={styles.PostButtonRow}>
          <Image
            src="/like.svg"
            width={24}
            height={24}
            alt="Like"
            className={styles.PostButtons}
          />
          <Image
            src="/comment.svg"
            width={24}
            height={24}
            alt="Comment"
            className={styles.PostButtons}
          />
          <Image
            src="/share.svg"
            width={24}
            height={24}
            alt="Share"
            className={styles.PostButtons}
          />
        </div>
        <Image
          src="/save.svg"
          width={24}
          height={24}
          alt="Share"
          className={styles.PostButtons}
        />
      </div>
      <p className={styles.likeCount}>2.719 beğenme</p>
      <div className={styles.postDescription}>
        <p className={styles.postOwner}>trashcanpaul</p>
        <p className={styles.postDescriptionText}>
          Now I am become alcoholic, drinker of beers
        </p>
      </div>
    </div>
  );
}

export default Postcard;
