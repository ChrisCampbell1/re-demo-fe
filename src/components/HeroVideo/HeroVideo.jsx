// npm modules
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// components


// services


// styles and assets
import styles from './HeroVideo.module.css'
import video from '../../assets/videos/downtown-denver.mp4'

// component


export default function HeroVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
        src={video}
        playsInline
        autoPlay
        muted
        loop
        ></video>
      </div>
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
        <h1>Your Downtown Denver Specialist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus commodi totam dolore mollitia veritatis doloribus, quia exercitationem amet, dignissimos molestiae provident dolores laudantium eligendi pariatur enim a quibusdam. Iste.</p>
      </motion.div>
    </div>
  )
}
