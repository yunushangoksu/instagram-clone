import React from 'react'
import Image from 'next/image'
import styles from './Profiledetails.module.css'

function Profiledetails() {
  return (
    <div className={styles.Profilewrapper}>

      <div className={styles.TopRow}>


        <Image 
          src='/profile.jpg'
          width={56}
          height={56}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.Name}>Yunushan Göksu</div>
          </div>
          <div className={styles.SwapAccount}>Geçiş Yap</div>
          </div>

      </div>

    <div className={styles.RecommendedRow}>
      <div className={styles.RecommendedForYou}>Senin için önerilenler</div>
      <div className={styles.ShowAll}>Tümünü Gör</div>
    </div>


      <div className={styles.AccountRow}>


        <Image 
          src='/profile.jpg'
          width={32}
          height={32}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.OtherFollowers}>50abs615 takip ediyor</div>
          </div>
          <div className={styles.SwapAccount}>Takip Et</div>
          </div>

      </div>

      <div className={styles.AccountRow}>


        <Image 
          src='/profile.jpg'
          width={32}
          height={32}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.OtherFollowers}>50abs615 takip ediyor</div>
          </div>
          <div className={styles.SwapAccount}>Takip Et</div>
          </div>

      </div>

      <div className={styles.AccountRow}>


        <Image 
          src='/profile.jpg'
          width={32}
          height={32}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.OtherFollowers}>50abs615 takip ediyor</div>
          </div>
          <div className={styles.SwapAccount}>Takip Et</div>
          </div>

      </div>
      <div className={styles.AccountRow}>


        <Image 
          src='/profile.jpg'
          width={32}
          height={32}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.OtherFollowers}>50abs615 takip ediyor</div>
          </div>
          <div className={styles.SwapAccount}>Takip Et</div>
          </div>

      </div>
      <div className={styles.AccountRow}>


        <Image 
          src='/profile.jpg'
          width={32}
          height={32}
          alt='Profile'
          className={styles.ProfilePic}
        />
          <div className={styles.TopRow2}>
        <div className={styles.ProfileName}>
          <div>yunushangoksu</div>
          <div className={styles.OtherFollowers}>50abs615 takip ediyor</div>
          </div>
          <div className={styles.SwapAccount}>Takip Et</div>
          </div>

      </div>

    <div className={styles.Footer}>
    <a href="#">Hakkında</a>
    <a href="#">Yardım</a>
    <a href="#">Basın</a>
    <a href="#">API</a>
    <a href="#">İş Fırsatları</a>
    <a href="#">Gizlilik</a>
    <a href="#">Koşullar</a>
    <a href="#">Konumlar</a>
    <a href="#">Dil</a>
    <a href="#">Meta Verified</a>
    </div>

    <div className={styles.Watermark}>© 2023 Instagram from Meta</div>

    </div>
  )
}

export default Profiledetails