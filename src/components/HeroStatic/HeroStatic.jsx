// npm modules
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// components


// services


// styles
import styles from './HeroStatic.module.css'

// component


export default function HeroStatic() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  return (
    
      <div className={styles.container}>
        <div className={styles.bg}></div>
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
        <h1>Your Cap Hill Specialist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus commodi totam dolore mollitia veritatis doloribus, quia exercitationem amet, dignissimos molestiae provident dolores laudantium eligendi pariatur enim a quibusdam. Iste.</p>
      </motion.div>
      </div>

    

  )
}
