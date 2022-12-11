import Head from "next/head"
import styles from '../../styles/Threads.module.css'
import Image from "next/image"
import profile from '../../img/profile1.png'
import att from '../../img/icons/Attached.png'
import image from '../../img/icons/image-gallery.png'
import vid from '../../img/icons/play.png'
import upV from '../../img/icons/up-arrow.png'
function Posts({ proImg, uName, txt }) {
  return <>
    <section className={styles.Posts}>
      <div className={styles.head}>
        <div className={styles.votes}>
          <div>
            <Image src={upV}></Image>
          </div>
          <div>
            <p>20</p>
          </div>
          <div>
            <Image src={upV} style={{ transform: "rotate(180deg)" }}></Image>
          </div>
        </div>
        <div className={styles.titleLinks}>
          <div className={styles.profileInfo}>
            <div className={styles.proImageContainer}>
              <Image src={proImg} alt={profile} width="100%" height="100%"></Image>
            </div>
            <div className={styles.postsTitleTxt}>
              <p>{uName}</p>
            </div>
          </div>
          <div>
            <p>{txt}</p>
          </div>
        </div>
      </div>
      <div className="body">

      </div>
      <div className="foot">
        <div className={styles.mainFormBtns}>
          <button>
            <p>Answer</p>
          </button>
          <button>
            <p>Share</p>
          </button>
        </div>
      </div>
    </section>
  </>
}

export default function Page({ Component }) {
  return (
    <section>
      <Head>
        <title>fc_BUET - Bangladesh University of Engineering and Technology</title>
        <meta name="description" content="Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School, it is the oldest institution for the study of engineering, architecture and urban planning in Bangladesh." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.threadsContainer}>
        <div className={styles.threadsMain}>
          <h3>/buet</h3>
          <div className={styles.topForm}>
            <div className={styles.mainForm}>
              <p>Post a question or thoughts.</p>
              <form action="">

                <textarea type="text" />

              </form>
            </div>
            <div className={styles.mainFormBtns}>
              <button>
                <Image src={att} height={32} width={32} alt=""></Image>

              </button>
              <button>
                <Image src={image} height={32} width={32} alt=""></Image></button>
              <button><Image src={vid} height={32} width={32} alt=""></Image></button>
            </div>
            <button className={styles.btnAccent}>Post</button>
          </div>

          <hr />
          <Posts proImg={profile} uName="Mo Nasim" txt=" How can i get into BUET?" />
          {/*<div className={styles.threadslMessage}>
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

          {/*<div className={styles.threadsrMessage}>
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
          </div> */}
        </div>
        {/*<div className={styles.msgForm}>
          <form action="">
            <input type="text" />
            <button>send</button>
          </form>
        </div> */}
        <div className={styles.threadsOptions}>

        </div>
      </div>

    </section>
  )
}
