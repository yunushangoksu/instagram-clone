import styles from './Storyrow.module.css'
import Image from 'next/image'
import React from 'react'

function Storyrow() {
  return (
    <div className={styles.storyrow}>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>

      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>

      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
        <span className={styles.storyName}>yunushangoksu</span>
      </div>

    </div>
  )
}

export default Storyrow