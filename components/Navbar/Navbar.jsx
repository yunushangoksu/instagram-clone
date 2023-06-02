import styles from "./Navbar.module.css";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarLogo}>
        <Image
          src="/Instagram_logo.svg"
          width={109}
          height={39}
          alt="Instagram Logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.navLinks}>
        <div className={styles.navLink}>
          <Image src="/home.svg" width={24} height={24} alt="Main Page" />
          Ana Sayfa
        </div>
        <div className={styles.navLink}>
          <Image src="/lens.svg" width={24} height={24} alt="Search" />
          Ara
        </div>
        <div className={styles.navLink}>
          <Image src="/compass.svg" width={24} height={24} alt="Explore" />
          Keşfet
        </div>
        <div className={styles.navLink}>
          <Image src="/reels.svg" width={24} height={24} alt="Reels" />
          Reels
        </div>
        <div className={styles.navLink}>
          <Image src="/messenger.svg" width={24} height={24} alt="Messages" />
          Mesajlar
        </div>
        <div className={styles.navLink}>
          <Image src="/like.svg" width={24} height={24} alt="Notifications" />
          Bildirimler
        </div>
        <div className={styles.navLink}>
          <Image src="/postmore.svg" width={24} height={24} alt="Create Post" />
          Oluştur
        </div>
        <div className={styles.navLink}>
          <Image
            src="https://picsum.photos/200"
            width={24}
            height={24}
            alt="Profile"
            className={styles.navbarProfilePic}
          />
          Profil
        </div>
      </div>

      <div className={styles.navLinkMore}>
        <Image src="/more.svg" width={24} height={24} alt="Profile" />
        Daha fazla
      </div>
    </div>
  );
}

export default Navbar;
