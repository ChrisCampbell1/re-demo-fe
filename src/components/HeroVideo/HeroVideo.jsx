// npm modules


// components


// services


// styles and assets
import styles from './HeroVideo.module.css'
import video from '../../assets/videos/downtown-denver.mp4'

// component


export default function HeroVideo() {
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
      <div className={styles.heroContent}>
        <h1>Video Heros Are Engaging!</h1>
      </div>
    </div>
  )
}
