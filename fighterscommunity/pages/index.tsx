import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buet_logo from '../img/buet_logo.png'
import buet_cover from '../img/Civil_Engineering_Building_of_BUET_seen_from_EME_Building.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage fighters community</title>
        <meta name="description" content="Admission is like a war for us! Those fighting for a chance to get a seat in a public versity are truly are fighters, army, visionary. This, the community for those fighting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.joiningCard}>
        <div className={styles.cardName}>
          <div className={styles.cardNameTop}>
            <Image src={buet_logo} width={32} height={32} alt='buet_fightersComm'></Image>
            <p>BUET - Bangladesh University Of Science and Technology</p>
            <p className={styles.uiTxt}>Last Activity 13min ago</p>
          </div>
          <div className={styles.cardNameAction}>
            <button className={styles.btnPrimary}>Join</button>
          </div>
          <div className={styles.cardMid}>
            <div className={styles.cardImageWrapper}>
              <Link href={'/buet'}>
                <Image src={buet_cover} width={500} height={300} alt='buet_fightersComm'></Image>
              </Link>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>399 Members</p>
            <p>49966 Msg</p>
            <p>39 News</p>
          </div>
        </div>
      </div>
      <div className={styles.joiningCard}>
        <div className={styles.cardName}>
          <div className={styles.cardNameTop}>
            <Image src={buet_logo} width={32} height={32} alt='buet_fightersComm'></Image>
            <p>BUET</p>
            <p className={styles.uiTxt}>Last Activity 13min ago</p>
          </div>
          <div className={styles.cardNameAction}>
            <button className={styles.btnPrimary}>Join</button>
          </div>
          <div className={styles.cardMid}>
            <div className={styles.cardImageWrapper}>
              <Image src={buet_cover} width={500} height={300} alt='buet_fightersComm'></Image>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>399 Members</p>
            <p>49966 Msg</p>
            <p>39 News</p>
          </div>
        </div>
      </div>
    </div>
  )
}
