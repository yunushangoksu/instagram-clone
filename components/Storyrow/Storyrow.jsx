import styles from './Storyrow.module.css'
import Image from 'next/image'
import React from 'react'

function Storyrow() {
  return (
    <div className={styles.storyow}>
      <div className={styles.singleStory}>
        <Image
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile Picture'
          className={styles.storyProfilePic}
        />
      </div>
    </div>
  )
}

export default Storyrow