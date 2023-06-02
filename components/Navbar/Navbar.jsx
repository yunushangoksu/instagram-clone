import styles from "./Navbar.module.css";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbarLogo}>
        <Image
          src="/instagram.svg"
          width={24}
          height={24}
          alt="Instagram Logo"
          className={styles.logoShrinked}
        />
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
          <div className={styles.navbarText}>Ana Sayfa</div>
        </div>
        <div className={styles.navLink}>
          <Image src="/lens.svg" width={24} height={24} alt="Search" />
          <div className={styles.navbarText}>Ara</div>
        </div>
        <div className={styles.navLink}>
          <Image src="/compass.svg" width={24} height={24} alt="Explore" />
          <div className={styles.navbarText}>Keşfet</div>
        </div>
        <div className={styles.navLink}>
          <Image src="/reels.svg" width={24} height={24} alt="Reels" />
          <div className={styles.navbarText}>Reels</div>
        </div>
        <div className={styles.navLink}>
          <Image src="/messenger.svg" width={24} height={24} alt="Messages" />
          <a href="/messages" className={styles.navbarText}>
            Mesajlar
          </a>
        </div>
        <div className={styles.navLink}>
          <Image src="/like.svg" width={24} height={24} alt="Notifications" />
          <div className={styles.navbarText}>Bildirimler</div>
        </div>
        <div className={styles.navLink}>
          <Image src="/postmore.svg" width={24} height={24} alt="Create Post" />
          <div className={styles.navbarText}>Oluştur</div>
        </div>
        <div className={styles.navLink}>
          <Image
            src="https://picsum.photos/200"
            width={24}
            height={24}
            alt="Profile"
            className={styles.navbarProfilePic}
          />
          <div className={styles.navbarText}>Profil</div>
        </div>
      </div>

      <div className={styles.navLinkMore}>
        <Image src="/more.svg" width={24} height={24} alt="Profile" />
        <div className={styles.navbarText}>Daha fazla</div>
      </div>
    </div>
  );
}

export default Navbar;
