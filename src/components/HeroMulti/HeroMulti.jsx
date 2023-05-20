// npm modules
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// components


// services


// styles and assets
import styles from './HeroMulti.module.css'
import bg1 from '../../assets/photos/bg1.jpg'
import bg2 from '../../assets/photos/bg2.jpg'
import bg3 from '../../assets/photos/bg3.jpg'

// component


export default function HeroMulti() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  
  
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.heroContent}
        ref={ref}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 1000,
        }}
        initial={{
          x: 1000,
          opacity: 0
        }}
        transition={{
          duration: 1
        }}
      >
        <h1>Your Luxury Specialist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus commodi totam dolore mollitia veritatis doloribus, quia exercitationem amet, dignissimos molestiae provident dolores laudantium eligendi pariatur enim a quibusdam. Iste.</p>
      </motion.div>
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
