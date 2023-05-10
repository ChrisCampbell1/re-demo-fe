// npm modules


// components


// services


// styles
import styles from './ProtectedDownload.module.css'

// component


export default function ProtectedDownload({ swapSignup }) {
  return (
    <div className={styles.container}>
      <h3>Download My 10 Step Guide to Prep Your Home To Sell</h3>
      <p>Learn about:</p>
      <ul>
        <li>What improvements are worth making</li>
        <li>Steps to list your home and sell fast</li>
        <li>Pricing strategies</li>
        <li>Top mistaktes made by sellers</li>
      </ul>
      <button type='button' onClick={() => swapSignup()}>Download</button>
    </div>
  )
}
