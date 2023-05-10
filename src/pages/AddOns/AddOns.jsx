// npm modules


// components
import CmaRequest from '../../components/CmaRequest/CmaRequest'

// services


// styles
import styles from './AddOns.module.css'

// component


export default function AddOns() {
  return (
    <main className={styles.container}>
      <h1>Add Ons</h1>
      <h2>CMA Request with minimalist design</h2>
      <CmaRequest />
    </main>
  )
}
