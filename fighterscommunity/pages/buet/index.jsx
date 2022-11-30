import Head from "next/head"
import styles from '../../styles/Threads.module.css'
import Image from "next/image"
import profile from '../../img/profile1.png'


export default function Page() {
  return (
    <section>
      <Head>
        <title>fc_BUET - Bangladesh University of Engineering and Technology</title>
        <meta name="description" content="Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School, it is the oldest institution for the study of engineering, architecture and urban planning in Bangladesh." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.threadsContainer}>
        <div className={styles.threadsMain}>
          <div className={styles.threadslMessage}>
            <div className={styles.msgInfoTop}>
              <div className={styles.proImageContainer}>
                <Image src={profile} alt={profile} width="100%" height="100%"></Image>
              </div>
              <p>userName</p>
            </div>
            <div className={styles.msg}>
              <p>This is awesome news. Hope you guys doing really well as i'm going to the mars</p>
            </div>
            <div className={styles.msgInfoFooter}>
              <p>12:45 AM 11/11/22</p>
            </div>
          </div>

          <div className={styles.threadslMessage}>
            <div className={styles.msgInfoTop}>
              <div className={styles.proImageContainer}>
                <Image src={profile} alt={profile} width="100%" height="100%"></Image>
              </div>
              <p>userName</p>
            </div>
            <div className={styles.msg}>
              <p>This ny well as i'm going to the mars</p>
            </div>
            <div className={styles.msgInfoFooter}>
              <p>12:45 AM 11/11/22</p>
            </div>
          </div>


          <div className={styles.threadslMessage}>
            <div className={styles.msgInfoTop}>
              <div className={styles.proImageContainer}>
                <Image src={profile} alt={profile} width="100%" height="100%"></Image>
              </div>
              <p>userName</p>
            </div>
            <div className={styles.msg}>
              <p>This is awesome news. Hope yo well as i'm going to the mars</p>
            </div>
            <div className={styles.msgInfoFooter}>
              <p>12:45 AM 11/11/22</p>
            </div>
          </div>
          {/*next msg */}

          <div className={styles.threadsrMessage}>
            <div className={styles.msgInfoTop}>

              <p>userName</p>
              <div className={styles.proImageContainer}>
                <Image src={profile} alt={profile} width="100%" height="100%"></Image>
              </div>
            </div>
            <div className={styles.msg}>
              <p>This is awesome news. Hope you guys doing really well as i'm going to the mars</p>
            </div>
            <div className={styles.msgInfoFooter}>
              <p>12:45 AM 11/11/22</p>
            </div>
          </div>
          <div className={styles.threadslMessage}>
            <div className={styles.msgInfoTop}>
              <div className={styles.proImageContainer}>
                <Image src={profile} alt={profile} width="100%" height="100%"></Image>
              </div>
              <p>userName</p>
            </div>
            <div className={styles.msg}>
              <p>This is awesome news. Hope yo well as i'm going to the mars</p>
            </div>
            <div className={styles.msgInfoFooter}>
              <p>12:45 AM 11/11/22</p>
            </div>
          </div>
        </div>
        <div className={styles.msgForm}>
          <form action="">
            <input type="text" />
            <button>send</button>
          </form>
        </div>
        <div className={styles.threadsOptions}>

        </div>
      </div>

    </section>
  )
}
