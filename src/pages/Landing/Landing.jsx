// npm modules

// components
import HeroStatic from '../../components/HeroStatic/HeroStatic'
import HeroVideo from '../../components/HeroVideo/HeroVideo'

// services


// styles
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <HeroStatic />
      <HeroVideo />
    </main>
  )
}

export default Landing
