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
        <h1>Your Downtown Denver Specialist</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem delectus commodi totam dolore mollitia veritatis doloribus, quia exercitationem amet, dignissimos molestiae provident dolores laudantium eligendi pariatur enim a quibusdam. Iste.</p>
      </div>
    </div>
  )
}
