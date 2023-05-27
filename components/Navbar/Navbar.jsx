import styles from './Navbar.module.css'
import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarLogo}>
        <Image 
          src='/Instagram_logo.svg'
          width={106}
          height={37}
          alt='Instagram Logo'
          className={styles.logo}
        />
      </div>

  <div className={styles.navLinks}>
    <div><Image 
                src='/home.svg'
                width={24}
                height={24}
                alt='Main Page'
    />
    Ana Sayfa
    </div>
    <div><Image 
                src='/lens.svg'
                width={24}
                height={24}
                alt='Search'
    />Ara</div>
    <div><Image 
                src='/compass.svg'
                width={24}
                height={24}
                alt='Explore'
    />Keşfet</div>
    <div><Image 
                src='/reels.svg'
                width={24}
                height={24}
                alt='Reels'
    />Reels</div>
    <div><Image 
                src='/messenger.svg'
                width={24}
                height={24}
                alt='Messages'
    />Mesajlar</div>
    <div><Image 
                src='/like.svg'
                width={24}
                height={24}
                alt='Notifications'
    />Bildirimler</div>
    <div><Image 
                src='/postmore.svg'
                width={24}
                height={24}
                alt='Create Post'
    />Oluştur</div>
    <div><Image 
                src='/profile.jpg'
                width={24}
                height={24}
                alt='Profile'
                className={styles.navbarProfilePic}
    />Profil</div>

   

    </div>

    <div className={styles.navLinkMore}
>
      <Image 
        src='/more.svg'
        width={24}
        height={24}
        alt='Profile'
      />Daha fazla
    </div>


    </div>
  )
}

export default Navbar