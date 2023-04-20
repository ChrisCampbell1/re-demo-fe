// npm modules


// components


// services


// styles and assets
import styles from './HeroMulti.module.css'
import bg1 from '../../assets/photos/bg1.jpg'
import bg2 from '../../assets/photos/bg2.jpg'
import bg3 from '../../assets/photos/bg3.jpg'

// component


export default function HeroMulti() {
  
  
  
  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <h1>Headline goes here</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus commodi totam dolore mollitia veritatis doloribus, quia exercitationem amet, dignissimos molestiae provident dolores laudantium eligendi pariatur enim a quibusdam. Iste.</p>
      </div>
      <div className={styles.bgFade}>
        <img src={bg1} alt="mansion" />
      </div>
      <div className={styles.bgFade}>
        <img src={bg2} alt="condo" />
      </div>
      <div className={styles.bgFade}>
        <img src={bg3} alt="pool" />
      </div>
    </div>
  )
}
