// npm modules


// components
import HeroStatic from '../../components/HeroStatic/HeroStatic'
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import HeroMulti from '../../components/HeroMulti/HeroMulti'

// services


// styles and assets
import styles from './Landing.module.css'
import headshot from '../../assets/photos/headshot.jpg'

const Landing = ({ user }) => {

  
  return (
    <main className={styles.container}>
      {/* <HeroStatic /> */}
      {/* <HeroVideo /> */}
      <HeroMulti />
      <div className={styles.about}>
        <div className={styles.headshot}>
          <img src={headshot} alt="headshot" />
        </div>
        <div className={styles.bio}>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam deleniti maiores facilis aliquid omnis est aperiam explicabo? Eius facilis nulla totam debitis tempora distinctio ullam cumque iusto nesciunt facere.</p>
        </div>
      </div>
      <div className={styles.listings}>
        <h1>Featured Listings</h1>
      </div>
    </main>
  )
}

export default Landing
