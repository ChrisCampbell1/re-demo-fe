// npm modules
import { Helmet } from 'react-helmet-async'


// components
import NeighborhoodCard from '../../components/NeighborhoodCard/NeighborhoodCard'
// services


// styles
import styles from './Neighborhoods.module.css'

// component


export default function Neighborhoods({ neighborhoods, user, setNeighborhoods }) {
  return (
    <main className={styles.container}>
      <Helmet>
        <title>Denver Neighborhoods</title>
        <link rel="canonical" href={`/neighborhoods`} />
        <meta name='description' content={`Learn about Denver neighborhoods and their market stats.`} />
        <meta property='og:title' content='Denver Neighborhoods' />
        <meta property='og:description' content={`Learn about Denver neighborhoods and their market stats.`} />
      </Helmet>
      <h1>Neighborhoods</h1>
      {neighborhoods.map((neighborhood) =>
        <NeighborhoodCard
          key={neighborhood._id}
          neighborhood={neighborhood}
          user={user}
          setNeighborhoods={setNeighborhoods}
          neighborhoods={neighborhoods}
        />
      )}
    </main>
  )
}
