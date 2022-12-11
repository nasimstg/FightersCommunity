import '../styles/globals.css'
import styles from '../styles/Homepage.module.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import user from '../img/user.png'
import setting from '../img/setting.png'
import buet_logo from '../img/buet_logo.png'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.linkListLeft}>
          <ul className={styles.linkList}>
            <Link href={'/'}><li className={styles.navLogo}>fighters<br />community</li></Link>
          </ul>

        </div>
        <div className={styles.linkListMid}>
          <ul className={styles.linkList}>
            <li className={styles.listItem}>Road Map</li>
            <li className={styles.listItem}>Calender</li>
            <li className={styles.listItem}>engineering</li>
            <li className={styles.listItem}>medical</li>
          </ul>
        </div>
        <div className={styles.linkListRight}>
          <ul className={styles.linkList}>
            <li className={styles.listItemBtn}><Image height={18} width={18} src={user} alt='' ></Image></li>
            <li className={styles.listItemBtn}><Image height={18} width={18} src={setting} alt='' ></Image></li>
          </ul>

        </div>
      </nav>


      <main>
        <div className={styles.mainLeft}>
          <section>
            <p>Popular Threads</p>
            <hr />
            <div className={styles.shortcutContaner}>
              <Image src={buet_logo} width={42} height={42} alt='buet_fightersComm'></Image>
              <p>BUET</p>
            </div>
            <div className={styles.shortcutContaner}>
              <Image src={buet_logo} width={42} height={42} alt='buet_fightersComm'></Image>
              <p>DU</p>
            </div>
            <div className={styles.shortcutContaner}>
              <Image src={buet_logo} width={42} height={42} alt='buet_fightersComm'></Image>
              <p>Medical</p>
            </div>
            <div className={styles.shortcutContaner}>
              <Image src={buet_logo} width={42} height={42} alt='buet_fightersComm'></Image>
              <p>GST</p>
            </div>
          </section>
        </div>
        <div className={styles.mainRight}>
          <Component {...pageProps} />
        </div>
      </main>

      <footer>
      </footer>
    </div>
  </>
}
