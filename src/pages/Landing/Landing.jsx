// npm modules

// components
import HeroStatic from '../../components/HeroStatic/HeroStatic'
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import HeroMulti from '../../components/HeroMulti/HeroMulti'

// services


// styles
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  const arr = ["1", "2", "3"]

  setTimeout(() => {
    
  }, 5000);
  
  
  return (
    <main className={styles.container}>
      {/* <HeroStatic /> */}
      {/* <HeroVideo /> */}
      <HeroMulti />
    </main>
  )
}

export default Landing
